import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import Navbar from '../../Sections/NavBar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import BlogCard from '../../widgets/BlogCard/BlogCard'
import { client, queries, urlFor } from '../../../lib/sanity'

// Custom components for Portable Text rendering
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      return (
        <figure className="my-12 -mx-4 md:-mx-8 lg:-mx-12">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
            <img
              src={urlFor(value).width(1200).url()}
              alt={value.alt || 'Blog image'}
              className="w-full"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-gray-500 text-sm mt-4 italic px-4">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl md:text-3xl font-bold text-tltgreen mt-14 mb-5 scroll-mt-24" id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-bold text-tltgreen mt-12 mb-4 scroll-mt-24 flex items-center gap-3" id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>
        <span className="w-1 h-6 bg-tltorange rounded-full"></span>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-bold text-tltgreen mt-10 mb-3 scroll-mt-24">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base md:text-lg font-bold text-tltgreen mt-8 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-600 leading-[1.9] mb-6 text-[17px] md:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative my-10 py-6 px-8 md:px-10 bg-gradient-to-br from-tltgreen/5 to-tltorange/5 rounded-2xl border-l-4 border-tltorange">
        <svg className="absolute top-4 left-4 w-8 h-8 text-tltorange/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p className="relative z-10 text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed pl-8">
          {children}
        </p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-4 mb-8 text-gray-600 ml-1">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-none space-y-4 mb-8 text-gray-600 ml-1 counter-reset-list">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-4 text-[17px] md:text-lg">
        <span className="mt-2.5 w-2 h-2 bg-gradient-to-br from-tltorange to-orange-400 rounded-full flex-shrink-0 shadow-sm"></span>
        <span className="leading-[1.8]">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="flex items-start gap-4 text-[17px] md:text-lg counter-increment-list">
        <span className="w-7 h-7 bg-gradient-to-br from-tltgreen to-tltgreen/80 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5 shadow-sm"></span>
        <span className="leading-[1.8]">{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-tltgreen">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-tltorange hover:text-orange-600 underline underline-offset-4 decoration-tltorange/30 hover:decoration-tltorange font-medium transition-colors"
        >
          {children}
        </a>
      )
    },
    code: ({ children }) => (
      <code className="bg-gray-100 text-tltgreen px-2 py-1 rounded-md text-sm font-mono">
        {children}
      </code>
    ),
  },
}

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const articleRef = useRef(null)

  // Reading progress bar
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"]
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(queries.postBySlug, { slug })
        setPost(data)

        // Fetch related posts
        if (data?.categories?.length > 0) {
          const categoryIds = data.categories.map(cat => cat._id)
          const related = await client.fetch(queries.relatedPosts, { 
            slug, 
            categoryIds 
          })
          setRelatedPosts(related.length > 0 ? related : await client.fetch(queries.latestPosts, { slug }))
        } else {
          const latest = await client.fetch(queries.latestPosts, { slug })
          setRelatedPosts(latest)
        }
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
    window.scrollTo(0, 0)
  }, [slug])

  const formattedDate = post?.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  // Calculate reading time based on body content
  const calculateReadingTime = () => {
    if (!post?.body) return 5
    const text = post.body.map(block => {
      if (block._type === 'block' && block.children) {
        return block.children.map(child => child.text || '').join(' ')
      }
      return ''
    }).join(' ')
    const words = text.split(/\s+/).length
    return Math.max(1, Math.ceil(words / 200))
  }

  const readingTime = calculateReadingTime()

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-tltorange border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 font-medium">Loading post...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-tltgreen mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="bg-tltorange text-white px-6 py-3 rounded-full font-bold hover:bg-transparent border-2 border-tltorange hover:text-tltorange transition ease-in-out duration-300"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-gray-50" ref={articleRef}>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-tltorange via-orange-500 to-tltorange z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />

      {/* Article Header */}
      <motion.div
        className="pt-28 md:pt-36 pb-10 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a3d48' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-tltorange transition-colors text-sm font-medium group"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-tltorange/10 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              Back to Blog
            </Link>
          </motion.div>

          {/* Category & Reading Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-5"
          >
            {post.categories && post.categories[0] && (
              <span className="inline-block bg-gradient-to-r from-tltorange to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {post.categories[0].title}
              </span>
            )}
            <span className="text-gray-400 text-sm flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime} min read
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-tltgreen mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {post.title}
          </motion.h1>

          {/* Author & Date & Share */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {post.author && (
              <div className="flex items-center gap-4">
                {post.author.image ? (
                  <img
                    src={urlFor(post.author.image).width(80).height(80).url()}
                    alt={post.author.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-tltorange/10"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-tltorange to-orange-400 flex items-center justify-center text-white text-xl font-bold">
                    {post.author.name?.charAt(0) || 'T'}
                  </div>
                )}
                <div>
                  <p className="font-bold text-tltgreen text-lg">{post.author.name}</p>
                  <p className="text-gray-500 text-sm">{formattedDate}</p>
                </div>
              </div>
            )}
            
            {/* Quick Share */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm mr-2">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-[#1DA1F2] hover:text-white text-gray-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-[#1877F2] hover:text-white text-gray-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-[#25D366] hover:text-white text-gray-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Image */}
      {post.mainImage && (
        <motion.div
          className="max-w-5xl mx-auto px-4 md:px-8 -mt-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={urlFor(post.mainImage).width(1400).url()}
              alt={post.title}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      )}

      {/* Blog Content */}
      <motion.article
        className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 lg:p-14">
          {/* Body Content */}
          {post.body && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          )}

          {/* Tags/Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="mt-14 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
                <span className="text-gray-500 font-medium text-sm">Topics</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 text-tltgreen text-sm font-semibold px-5 py-2.5 rounded-full border border-gray-200 hover:border-tltorange hover:from-orange-50 hover:to-orange-100 transition-all duration-300 cursor-pointer"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-tltorange/10 to-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-tltorange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                </div>
                <span className="text-tltgreen font-bold">Enjoyed this article? Share it!</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-50 hover:bg-[#1DA1F2] hover:text-white text-gray-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-100"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-50 hover:bg-[#1877F2] hover:text-white text-gray-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-100"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-50 hover:bg-[#0A66C2] hover:text-white text-gray-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-100"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-50 hover:bg-[#25D366] hover:text-white text-gray-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-100"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Link copied to clipboard!')
                  }}
                  className="w-11 h-11 bg-gray-50 hover:bg-tltgreen hover:text-white text-gray-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-100"
                  title="Copy link"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Newsletter Section */}
      <motion.section
        className="max-w-5xl mx-auto px-4 md:px-8 py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-tltgreen via-tltgreen to-tltgreen/90 rounded-3xl p-8 md:p-14 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-tltorange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-tltorange/30 rounded-full blur-xl"></div>
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Enjoyed this article? Get more like it!
            </h3>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Subscribe to receive our best tips on education, parenting, and helping children achieve academic excellence.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 pr-12 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-tltorange/30 shadow-xl"
                />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                </svg>
              </div>
              <button
                type="submit"
                className="bg-tltorange hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2"
              >
                Subscribe
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-tltorange to-orange-400 rounded-full"></div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-tltgreen">
                You Might Also Like
              </h2>
              <p className="text-gray-500 text-sm mt-1">More articles from our experts</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <BlogCard post={relatedPost} variant="compact" />
              </motion.div>
            ))}
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-white text-tltgreen font-bold px-8 py-4 rounded-full border-2 border-tltgreen hover:bg-tltgreen hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </motion.section>
      )}

      <Footer />
    </div>
  )
}

export default BlogPost
