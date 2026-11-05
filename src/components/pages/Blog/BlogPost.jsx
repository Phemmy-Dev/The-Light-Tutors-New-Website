import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import { PiArrowLeftBold, PiArrowRightBold, PiXLogoBold, PiFacebookLogoBold, PiLinkedinLogoBold, PiWhatsappLogoBold, PiLinkBold, PiCheckBold } from 'react-icons/pi'
import PageLayout from '../../Layout/PageLayout'
import BlogCard from '../../widgets/BlogCard/BlogCard'
import Newsletter from '../../widgets/Newsletter/Newsletter'
import { client, queries, urlFor } from '../../../lib/sanity'
import usePageMeta from '../../../hooks/usePageMeta'

const slugify = children => children?.toString().toLowerCase().replace(/\s+/g, '-')

// How Sanity's rich text renders; styling lives under .article in pages.css
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      return (
        <figure>
          <img src={urlFor(value).width(1200).url()} alt={value.alt || ''} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }) => <h2 id={slugify(children)}>{children}</h2>,
    h2: ({ children }) => <h2 id={slugify(children)}>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ value, children }) => {
      const external = (value?.href || '').startsWith('http')
      return <a href={value?.href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>
    },
  },
}

const ShareLinks = ({ title, copied, onCopy }) => {
  const url = encodeURIComponent(window.location.href)
  const t = encodeURIComponent(title)
  const links = [
    { label: 'Share on X', href: `https://twitter.com/intent/tweet?url=${url}&text=${t}`, icon: PiXLogoBold },
    { label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}`, icon: PiFacebookLogoBold },
    { label: 'Share on LinkedIn', href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${t}`, icon: PiLinkedinLogoBold },
    { label: 'Share on WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + window.location.href)}`, icon: PiWhatsappLogoBold },
  ]
  return (
    <div className="share">
      {links.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>
      ))}
      <button type="button" onClick={onCopy} aria-label="Copy link">{copied ? <PiCheckBold /> : <PiLinkBold />}</button>
    </div>
  )
}

ShareLinks.propTypes = {
  title: PropTypes.string.isRequired,
  copied: PropTypes.bool,
  onCopy: PropTypes.func.isRequired,
}

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const metaDescription = (post?.seoDescription || post?.excerpt || '').replace(/\s+/g, ' ').trim()
  usePageMeta({
    title: post?.seoTitle || post?.title,
    description: metaDescription.length > 155 ? metaDescription.slice(0, 152).trimEnd() + '...' : metaDescription,
    image: post?.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined,
    type: 'article',
  })

  // Reading progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(queries.postBySlug, { slug })
        setPost(data)
        if (data?.categories?.length > 0) {
          const related = await client.fetch(queries.relatedPosts, { slug, categoryIds: data.categories.map(c => c._id) })
          setRelatedPosts(related.length > 0 ? related : await client.fetch(queries.latestPosts, { slug }))
        } else {
          setRelatedPosts(await client.fetch(queries.latestPosts, { slug }))
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

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  if (loading) {
    return (
      <PageLayout>
        <div className="page-head"><div className="wrap wrap-narrow blog-skeleton" aria-label="Loading article"><div className="sk sk-title" /><div className="sk sk-lead" /></div></div>
      </PageLayout>
    )
  }

  if (!post) {
    return (
      <PageLayout title="Article not found">
        <div className="page-head">
          <div className="wrap wrap-narrow">
            <h1>We couldn’t find that article.</h1>
            <p className="lede">It may have been moved or removed.</p>
            <div className="actions"><Link className="btn btn-primary" to="/blog"><PiArrowLeftBold /> Back to the blog</Link></div>
          </div>
        </div>
      </PageLayout>
    )
  }

  const date = new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const words = (post.body || []).map(b => (b._type === 'block' ? (b.children || []).map(c => c.text || '').join(' ') : '')).join(' ').split(/\s+/).filter(Boolean).length
  const readingTime = Math.max(1, Math.ceil(words / 200))
  // The WhatsApp message names the post, so the team can see which article brought the parent in
  const bookHref = `https://api.whatsapp.com/send?phone=2348153418503&text=${encodeURIComponent(`Hi! I just read "${post.title}" on your blog and I'd like to book a free session for my child.`)}`

  return (
    <PageLayout>
      <motion.div className="read-progress" style={{ scaleX }} />

      <header className="page-head article-head">
        <div className="wrap wrap-narrow">
          <Link className="kicker" to="/blog"><PiArrowLeftBold /> All articles</Link>
          <div className="post-meta">
            {post.categories?.[0] && <span className="tag">{post.categories[0].title}</span>}
            <span>{readingTime} min read</span>
          </div>
          <h1>{post.title}</h1>
          <div className="byline">
            <div className="author">
              {post.author?.image
                ? <img src={urlFor(post.author.image).width(96).height(96).url()} alt="" />
                : <span className="author-initial">{post.author?.name?.charAt(0) || 'T'}</span>}
              <div><b>{post.author?.name || 'The Light Tutors'}</b><span>{date}</span></div>
            </div>
            <ShareLinks title={post.title} copied={copied} onCopy={copyLink} />
          </div>
        </div>
      </header>

      {post.mainImage && (
        <div className="wrap article-hero">
          <img src={urlFor(post.mainImage).width(1400).url()} alt="" />
        </div>
      )}

      <article className="wrap wrap-narrow article">
        {post.body && <PortableText value={post.body} components={portableTextComponents} />}

        <div className="article-cta">
          <h2>Does this sound like your child?</h2>
          <p>You don’t have to figure it out alone. Book a free session and one of our tutors will meet your child, find where they’re stuck, and show you a clear way forward.</p>
          <a className="btn btn-primary" href={bookHref} target="_blank" rel="noopener noreferrer">Book a free session <PiArrowRightBold /></a>
        </div>

        <div className="article-foot">
          {post.categories?.length > 0 && <div className="tags">{post.categories.map(c => <span className="tag" key={c._id}>{c.title}</span>)}</div>}
          <div className="share-row"><span>Share this article</span><ShareLinks title={post.title} copied={copied} onCopy={copyLink} /></div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="band-mist related">
          <div className="wrap">
            <div className="sec-head">
              <h2>Keep reading</h2>
              <Link className="btn btn-ghost" to="/blog">All articles</Link>
            </div>
            <div className="post-grid">{relatedPosts.map(p => <BlogCard key={p._id} post={p} variant="compact" />)}</div>
          </div>
        </section>
      )}

      <section className="cta newsletter-section">
        <div className="wrap"><Newsletter source={'Blog Post: ' + post.title} title="Enjoyed this? Get more like it." /></div>
      </section>
    </PageLayout>
  )
}

export default BlogPost
