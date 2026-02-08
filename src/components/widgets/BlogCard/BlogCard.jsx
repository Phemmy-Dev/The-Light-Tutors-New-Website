import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { urlFor } from '../../../lib/sanity'

const BlogCard = ({ post, variant = 'default' }) => {
  const { title, slug, excerpt, mainImage, publishedAt, categories, author } = post

  const formattedDate = new Date(publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  // Compact variant for related posts
  if (variant === 'compact') {
    return (
      <Link to={`/blog/${slug.current}`}>
        <motion.div
          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          <div className="relative overflow-hidden h-40">
            {mainImage ? (
              <img
                src={urlFor(mainImage).width(400).height(250).url()}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-tltgreen to-tltgreen/70 flex items-center justify-center">
                <span className="text-white text-2xl font-bold opacity-40">TLT</span>
              </div>
            )}
            {/* Category Badge */}
            {categories && categories[0] && (
              <div className="absolute top-3 left-3">
                <span className="bg-tltorange text-white text-xs font-bold px-3 py-1 rounded-full">
                  {categories[0].title}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <h4 className="font-bold text-tltgreen group-hover:text-tltorange transition-colors line-clamp-2 text-sm uppercase tracking-wide leading-snug">
              {title}
            </h4>
            {excerpt && (
              <p className="text-gray-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                {excerpt}
              </p>
            )}
          </div>
        </motion.div>
      </Link>
    )
  }

  // Default variant
  return (
    <Link to={`/blog/${slug.current}`}>
      <motion.div
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Featured Image */}
        <div className="relative overflow-hidden h-52 md:h-60">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category Badge */}
          {categories && categories[0] && (
            <div className="absolute top-4 left-4">
              <span className="bg-tltorange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                {categories[0].title}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-grow">
          {/* Author & Date */}
          <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
            {author?.image && (
              <img
                src={urlFor(author.image).width(40).height(40).url()}
                alt={author.name}
                className="w-7 h-7 rounded-full object-cover"
              />
            )}
            {author?.name && (
              <>
                <span className="font-medium text-tltgreen">{author.name}</span>
                <span>•</span>
              </>
            )}
            <span>{formattedDate}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-tltgreen group-hover:text-tltorange transition-colors duration-300 mb-3 line-clamp-2 uppercase tracking-wide leading-snug">
            {title}
          </h3>
          
          {/* Excerpt */}
          {excerpt && (
            <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3 flex-grow">
              {excerpt}
            </p>
          )}
          
          {/* Read More */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-tltorange font-bold text-sm group-hover:underline">
              Read Article
            </span>
            <div className="w-8 h-8 bg-tltorange/10 rounded-full flex items-center justify-center group-hover:bg-tltorange transition-colors duration-300">
              <svg
                className="w-4 h-4 text-tltorange group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
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
