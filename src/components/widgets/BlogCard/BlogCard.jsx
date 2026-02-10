import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { urlFor } from '../../../lib/sanity'

const BlogCard = ({ post, variant = 'default' }) => {
  const { title, slug, excerpt, mainImage, publishedAt, categories, author } = post

  const formattedDate = new Date(publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  // Estimate reading time (rough calculation)
  const readingTime = excerpt ? Math.max(1, Math.ceil(excerpt.length / 500)) : 3

  // Featured/Hero variant for first post
  if (variant === 'featured') {
    return (
      <Link to={`/blog/${slug.current}`}>
        <motion.div
          className="group relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background Image */}
          {mainImage ? (
            <img
              src={urlFor(mainImage).width(1200).height(600).url()}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-tltgreen via-tltgreen/90 to-tltorange/30"></div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            {/* Category & Reading Time */}
            <div className="flex items-center gap-3 mb-4">
              {categories && categories[0] && (
                <span className="bg-tltorange text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  {categories[0].title}
                </span>
              )}
              <span className="text-white/70 text-sm flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-tltorange transition-colors duration-300">
              {title}
            </h2>
            
            {/* Excerpt */}
            {excerpt && (
              <p className="text-white/80 text-base md:text-lg leading-relaxed line-clamp-2 mb-6 max-w-3xl">
                {excerpt}
              </p>
            )}
            
            {/* Author & Date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {author?.image && (
                  <img
                    src={urlFor(author.image).width(60).height(60).url()}
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                  />
                )}
                <div>
                  {author?.name && (
                    <p className="text-white font-semibold text-sm">{author.name}</p>
                  )}
                  <p className="text-white/60 text-xs">{formattedDate}</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-white text-sm font-semibold group-hover:bg-tltorange transition-colors duration-300 flex items-center gap-2">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    )
  }

  // Compact variant for related posts
  if (variant === 'compact') {
    return (
      <Link to={`/blog/${slug.current}`}>
        <motion.div
          className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 h-full border border-gray-100 flex flex-col"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          <div className="relative overflow-hidden h-48">
            {mainImage ? (
              <img
                src={urlFor(mainImage).width(400).height(280).url()}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-tltgreen to-tltgreen/70 flex items-center justify-center">
                <span className="text-white text-3xl font-bold opacity-30">TLT</span>
              </div>
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Category Badge */}
            {categories && categories[0] && (
              <div className="absolute top-3 left-3">
                <span className="bg-gradient-to-r from-tltorange to-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {categories[0].title}
                </span>
              </div>
            )}
            
            {/* Reading time */}
            <div className="absolute bottom-3 right-3">
              <span className="bg-white/90 backdrop-blur-sm text-tltgreen text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            <h4 className="font-bold text-tltgreen group-hover:text-tltorange transition-colors line-clamp-2 text-base leading-snug mb-3">
              {title}
            </h4>
            {excerpt && (
              <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed flex-grow">
                {excerpt}
              </p>
            )}
            
            {/* Author & Date */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
              {author?.image ? (
                <img
                  src={urlFor(author.image).width(36).height(36).url()}
                  alt={author.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-tltorange/20"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tltorange to-orange-400 flex items-center justify-center text-white text-xs font-bold">
                  {author?.name?.charAt(0) || 'T'}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-tltgreen font-semibold text-xs truncate">{author?.name || 'TLT Team'}</p>
                <p className="text-gray-400 text-xs">{formattedDate}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-tltorange flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    )
  }

  // Default variant
  return (
    <Link to={`/blog/${slug.current}`}>
      <motion.div
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 h-full flex flex-col border border-gray-100/50"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Featured Image */}
        <div className="relative overflow-hidden h-56 md:h-64">
          {mainImage ? (
            <img
              src={urlFor(mainImage).width(600).height(400).url()}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-tltgreen via-tltgreen/90 to-tltgreen/70 flex items-center justify-center">
              <span className="text-white text-5xl font-bold opacity-20">TLT</span>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          
          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            {categories && categories[0] && (
              <span className="bg-tltorange text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                {categories[0].title}
              </span>
            )}
            <span className="bg-white/90 backdrop-blur-sm text-tltgreen text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime} min
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Author & Date Row */}
          <div className="flex items-center gap-3 mb-4">
            {author?.image ? (
              <img
                src={urlFor(author.image).width(48).height(48).url()}
                alt={author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-tltorange/20"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-tltorange to-orange-400 flex items-center justify-center text-white text-sm font-bold">
                {author?.name?.charAt(0) || 'T'}
              </div>
            )}
            <div className="flex-1">
              <p className="text-tltgreen font-semibold text-sm">{author?.name || 'TLT Team'}</p>
              <p className="text-gray-400 text-xs">{formattedDate}</p>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-tltgreen group-hover:text-tltorange transition-colors duration-300 mb-3 line-clamp-2 leading-snug">
            {title}
          </h3>
          
          {/* Excerpt */}
          {excerpt && (
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-grow">
              {excerpt}
            </p>
          )}
          
          {/* Read More */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-tltorange font-bold text-sm group-hover:underline underline-offset-4">
              Read Article
            </span>
            <div className="w-10 h-10 bg-gradient-to-br from-tltorange/10 to-orange-100 rounded-full flex items-center justify-center group-hover:from-tltorange group-hover:to-orange-500 transition-all duration-300 shadow-sm group-hover:shadow-lg">
              <svg
                className="w-4 h-4 text-tltorange group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default BlogCard
