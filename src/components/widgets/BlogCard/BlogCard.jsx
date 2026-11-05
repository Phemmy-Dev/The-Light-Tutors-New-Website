import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { PiArrowRightBold } from 'react-icons/pi'
import { urlFor } from '../../../lib/sanity'

// variant: "featured" (wide, first post), "default" (grid), "compact" (related posts)
const BlogCard = ({ post, variant = 'default' }) => {
  const { title, slug, excerpt, bodyText, mainImage, publishedAt, categories, author } = post

  const date = new Date(publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  // Reading time from the full post text (about 200 words a minute)
  const words = (bodyText || excerpt || '').split(/\s+/).filter(Boolean).length
  const readingTime = Math.max(1, Math.ceil(words / 200))
  const featured = variant === 'featured'
  const size = featured ? [1200, 750] : [640, 420]

  return (
    <Link to={`/blog/${slug.current}`} className={`post-card ${variant}`}>
      <span className="post-img">
        {mainImage
          ? <img src={urlFor(mainImage).width(size[0]).height(size[1]).url()} alt="" loading="lazy" />
          : <span className="post-img-empty" aria-hidden="true">TLT</span>}
      </span>
      <span className="post-body">
        <span className="post-meta">
          {categories?.[0] && <span className="tag">{categories[0].title}</span>}
          <span>{readingTime} min read</span>
        </span>
        <span className="post-title">{title}</span>
        {excerpt && variant !== 'compact' && <span className="post-excerpt">{excerpt}</span>}
        <span className="post-foot">
          <span>{author?.name || 'The Light Tutors'} · {date}</span>
          {featured && <span className="post-read">Read article <PiArrowRightBold /></span>}
        </span>
      </span>
    </Link>
  )
}

BlogCard.propTypes = {
  post: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['featured', 'default', 'compact']),
}

export default BlogCard
