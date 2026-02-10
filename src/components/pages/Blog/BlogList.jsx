import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../../Sections/NavBar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import BlogCard from '../../widgets/BlogCard/BlogCard'
import { client, queries, urlFor } from '../../../lib/sanity'

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyVJaJAeRlKMkLVBvTDDjCnL6POBQBAklJrI2gilR24V7xYU-6bMWIDuvpqbwZuZsfL/exec'

const BlogList = () => {
  const [posts, setPosts] = useState([])
  const [featuredPost, setFeaturedPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [subscribing, setSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch featured post (with "Featured" category)
        const featured = await client.fetch(queries.featuredPost)
        
        if (featured) {
          // If there's a featured post, get all other posts
          setFeaturedPost(featured)
          const otherPosts = await client.fetch(queries.nonFeaturedPosts)
          setPosts(otherPosts)
        } else {
          // No featured post - use all posts, first one becomes featured
          const allPosts = await client.fetch(queries.allPosts)
          setPosts(allPosts)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setSubscribing(true)
    setSubscribeStatus(null)
    
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'Blog Page'
        }),
      })
      
      setSubscribeStatus('success')
      setEmail('')
      setTimeout(() => setSubscribeStatus(null), 5000)
    } catch (error) {
      console.error('Subscription error:', error)
      setSubscribeStatus('error')
      setTimeout(() => setSubscribeStatus(null), 5000)
    } finally {
      setSubscribing(false)
    }
  }

  // Determine featured and remaining posts
  // If we have a manually set featured post, use it; otherwise use the latest post
  const displayFeaturedPost = featuredPost || posts[0]
  const remainingPosts = featuredPost ? posts : posts.slice(1)

  // Total count for display
  const totalPosts = (featuredPost ? 1 : 0) + posts.length

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="pt-28 md:pt-36 pb-12 md:pb-16 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a3d48' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-tltorange/10 to-orange-100 text-tltorange text-sm font-bold px-5 py-2.5 rounded-full mb-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              The Light Tutors Blog
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-tltgreen mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Insights for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tltorange to-orange-500">
                Academic Excellence
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Expert advice, proven strategies, and inspiring stories to help your child thrive academically and build lasting confidence.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        {loading ? (
          /* Skeleton Loading UI */
          <div className="animate-pulse">
            {/* Featured Post Skeleton */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] md:aspect-auto bg-gray-200"></div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex gap-2 mb-4">
                      <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                      <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-8 w-full bg-gray-200 rounded-lg mb-3"></div>
                    <div className="h-8 w-3/4 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 w-full bg-gray-200 rounded"></div>
                      <div className="h-4 w-full bg-gray-200 rounded"></div>
                      <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Articles Skeleton */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-36 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="aspect-[16/10] bg-gray-200"></div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
                        <div className="h-5 w-20 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-6 w-2/3 bg-gray-200 rounded mb-4"></div>
                      <div className="space-y-2 mb-4">
                        <div className="h-3 w-full bg-gray-200 rounded"></div>
                        <div className="h-3 w-full bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="h-3 w-20 bg-gray-200 rounded"></div>
                        <div className="ml-auto h-3 w-16 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : posts.length === 0 && !featuredPost ? (
          <motion.div
            className="flex flex-col items-center justify-center min-h-[500px] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-tltorange/20 to-orange-100 rounded-2xl flex items-center justify-center mb-8 mx-auto rotate-3">
                <svg
                  className="w-12 h-12 text-tltorange -rotate-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-tltgreen mb-4">
                Coming Soon!
              </h3>
              <p className="text-gray-600 mb-8">
                We're crafting amazing content to help your child succeed. Be the first to know when we publish!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/2348185179500"
                  className="bg-tltorange text-white font-bold px-6 py-3 rounded-full hover:bg-orange-500 transition-colors"
                >
                  Get Notified
                </a>
                <Link
                  to="/"
                  className="border-2 border-tltgreen text-tltgreen font-bold px-6 py-3 rounded-full hover:bg-tltgreen hover:text-white transition-colors"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured Post */}
            {displayFeaturedPost && (
              <motion.section
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-tltorange rounded-full"></div>
                  <h2 className="text-xl font-bold text-tltgreen">Featured Article</h2>
                </div>
                <BlogCard post={displayFeaturedPost} variant="featured" />
              </motion.section>
            )}

            {/* Latest Articles Grid */}
            {remainingPosts.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-tltgreen rounded-full"></div>
                    <h2 className="text-xl font-bold text-tltgreen">Latest Articles</h2>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-tltorange rounded-full animate-pulse"></span>
                      {totalPosts} {totalPosts === 1 ? 'Article' : 'Articles'} Published
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingPosts.map((post, index) => (
                    <motion.div
                      key={post._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </motion.div>
        )}
      </div>

      {/* Newsletter Section */}
      <motion.section
        className="py-16 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-tltgreen via-tltgreen to-tltgreen/90 rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-tltorange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-tltorange/30 rounded-full blur-xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-bold px-5 py-2.5 rounded-full mb-6"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Join Our Newsletter
              </motion.div>
              
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Get Weekly Insights Delivered
              </motion.h3>
              
              <motion.p
                className="text-white/80 text-lg mb-10 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Receive our best tips on education, parenting, and helping children achieve academic excellence.
              </motion.p>
              
              <motion.form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={subscribing}
                    className="w-full px-6 py-4 pr-12 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-tltorange/30 shadow-xl text-base disabled:opacity-50"
                  />
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                  </svg>
                </div>
                <button
                  type="submit"
                  disabled={subscribing}
                  className="bg-tltorange hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {subscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </>
                  )}
                </button>
              </motion.form>
              
              {/* Status Messages */}
              {subscribeStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className="bg-white rounded-full px-6 py-3 inline-flex items-center gap-3 shadow-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-tltgreen font-semibold">Thank you! Check your inbox soon.</span>
                  </div>
                </motion.div>
              )}
              {subscribeStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className="bg-white rounded-full px-6 py-3 inline-flex items-center gap-3 shadow-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-semibold">Something went wrong. Please try again.</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

export default BlogList
