import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'oy1d5jtt',
  dataset: 'production',
  useCdn: true, // Enable CDN for faster content delivery
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

// GROQ Queries
export const queries = {
  // Get all published posts
  allPosts: `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "excerpt": pt::text(body[0..2]),
    mainImage,
    publishedAt,
    author->{
      name,
      image
    },
    categories[]->{
      _id,
      title
    }
  }`,

  // Get single post by slug
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title
    }
  }`,

  // Get related posts (same category, excluding current)
  relatedPosts: `*[_type == "post" && defined(publishedAt) && slug.current != $slug && count(categories[@._ref in $categoryIds]) > 0] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    "excerpt": pt::text(body[0..1]),
    mainImage,
    publishedAt,
    categories[]->{
      _id,
      title
    }
  }`,

  // Get latest posts (for related section fallback)
  latestPosts: `*[_type == "post" && defined(publishedAt) && slug.current != $slug] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    "excerpt": pt::text(body[0..1]),
    mainImage,
    publishedAt,
    categories[]->{
      _id,
      title
    }
  }`,

  // Get featured post (post with "Featured" category)
  featuredPost: `*[_type == "post" && defined(publishedAt) && "Featured" in categories[]->title] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    "excerpt": pt::text(body[0..2]),
    mainImage,
    publishedAt,
    author->{
      name,
      image
    },
    categories[]->{
      _id,
      title
    }
  }`,

  // Get all posts except featured
  nonFeaturedPosts: `*[_type == "post" && defined(publishedAt) && !("Featured" in categories[]->title)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "excerpt": pt::text(body[0..2]),
    mainImage,
    publishedAt,
    author->{
      name,
      image
    },
    categories[]->{
      _id,
      title
    }
  }`,
}
