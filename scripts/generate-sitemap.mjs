// Writes dist/sitemap.xml after `vite build`: the main pages plus every
// published blog post from Sanity. If Sanity can't be reached, it still
// writes the main pages and never fails the build.
import { writeFileSync } from 'node:fs'

const SITE = 'https://thelightutors.com'
const QUERY = '*[_type == "post" && defined(publishedAt) && !(_id in path("drafts.**"))]{ "slug": slug.current, publishedAt, _updatedAt }'
const API = `https://oy1d5jtt.apicdn.sanity.io/v2024-01-01/data/query/production?query=${encodeURIComponent(QUERY)}`

const pages = ['/', '/about', '/meet-our-team', '/csr', '/blog', '/frequently-asked-questions', '/become-a-tutor', '/terms', '/privacy', '/refund']

const entry = (path, lastmod) =>
  `  <url><loc>${SITE}${path}</loc>${lastmod ? `<lastmod>${lastmod.slice(0, 10)}</lastmod>` : ''}</url>`

let posts = []
try {
  const res = await fetch(API)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  posts = (await res.json()).result || []
} catch (err) {
  console.warn(`sitemap: could not load posts from Sanity (${err.message}); writing main pages only`)
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((p) => entry(p)),
  ...posts.filter((p) => p.slug).map((p) => entry(`/blog/${p.slug}`, p._updatedAt || p.publishedAt)),
  '</urlset>',
  '',
].join('\n')

writeFileSync('dist/sitemap.xml', xml)
console.log(`sitemap: wrote ${pages.length + posts.length} URLs to dist/sitemap.xml`)
