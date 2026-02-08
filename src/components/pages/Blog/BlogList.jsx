import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../Sections/NavBar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import BlogCard from '../../widgets/BlogCard/BlogCard'
import { client, queries } from '../../../lib/sanity'

const BlogList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(queries.allPosts)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="pt-28 md:pt-36 pb-16 bg-gradient-to-br from-tltgreen via-tltgreen/95 to-tltgreen/90 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-tltorange/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-tltorange/5 rounded-full"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-tltorange/20 text-tltorange text-sm font-bold px-4 py-2 rounded-full mb-6"
          >
            📚 Our Blog
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Educational Insights &{' '}
            <span className="text-tltorange">Success Stories</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert tips, parenting advice, and proven strategies to help your child excel academically and build confidence.
          </motion.p>
        </div>
      </motion.div>

      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-tltgreen">
              Latest Articles
            </h2>
            <p className="text-gray-600 mt-2">
              Discover our latest posts on education, parenting, and student success
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-tltorange rounded-full"></span>
            <span>{posts.length} {posts.length === 1 ? 'Article' : 'Articles'}</span>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 border-4 border-tltorange border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">Loading amazing content...</p>
            </div>
          </div>
        ) : posts.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center min-h-[400px] text-center bg-white rounded-2xl shadow-sm p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-tltorange/20 to-tltorange/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-tltorange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-tltgreen mb-3">
              Coming Soon!
            </h3>
            <p className="text-gray-600 max-w-md">
              We're working on creating amazing content for you. Subscribe below to be notified when we publish our first article!
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {posts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Newsletter Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4 md:px-8 pb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-tltgreen to-tltgreen/90 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tltorange/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-block bg-white/10 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              ✉️ Newsletter
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Join thousands of parents receiving our weekly tips on helping their children succeed academically.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tltorange shadow-lg"
              />
              <button
                type="submit"
                className="bg-tltorange hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

export default BlogList
