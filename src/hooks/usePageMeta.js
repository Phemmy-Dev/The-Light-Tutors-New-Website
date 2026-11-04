import { useEffect } from 'react'

const SITE_NAME = 'The Light Tutors'
// Always point Google at the main domain, even when the site is opened on a
// Netlify or Vercel copy, so those copies don't count as duplicate pages.
const SITE_URL = 'https://thelightutors.com'

const setMeta = (attr, key, content) => {
  if (!content) return
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const setCanonical = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

// Gives each page its own title, description, share tags and canonical URL,
// instead of every page sharing the homepage's tags from index.html.
export default function usePageMeta({ title, description, image, type = 'website' }) {
  useEffect(() => {
    if (!title) return
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    const url = SITE_URL + window.location.pathname
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)
    setCanonical(url)
  }, [title, description, image, type])
}
