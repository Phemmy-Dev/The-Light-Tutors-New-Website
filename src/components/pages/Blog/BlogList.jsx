import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../Layout/PageLayout'
import PageHead from '../../Layout/PageHead'
import BlogCard from '../../widgets/BlogCard/BlogCard'
import Newsletter from '../../widgets/Newsletter/Newsletter'
import { client, queries } from '../../../lib/sanity'

const ALL = 'All articles'

const BlogList = () => {
  const [posts, setPosts] = useState([])
  const [featuredPost, setFeaturedPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [topic, setTopic] = useState(ALL)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // A post in the "Featured" category leads the page; otherwise the newest post does
        const featured = await client.fetch(queries.featuredPost)
        if (featured) {
          setFeaturedPost(featured)
          setPosts(await client.fetch(queries.nonFeaturedPosts, { featuredId: featured._id }))
        } else {
          setPosts(await client.fetch(queries.allPosts))
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const lead = featuredPost || posts[0]
  const rest = featuredPost ? posts : posts.slice(1)
  // Topic filter, built from the categories the posts actually use
  const topics = [ALL, ...new Set(rest.flatMap(p => (p.categories || []).map(c => c.title)).filter(t => t !== 'Featured'))]
  const shown = topic === ALL ? rest : rest.filter(p => p.categories?.some(c => c.title === topic))

  return (
    <PageLayout
      title="Blog: Advice for Parents on GCSEs, SATs and Confidence"
      description="Practical, caring advice for parents: helping your child with GCSEs, KS2 SATs, homework, focus and exam stress, from the tutors at The Light Tutors."
    >
      <PageHead
        kicker="The Light Tutors blog"
        title="Advice for parents, from the people who teach your children"
        lede="Practical tips on exams, homework, focus and confidence, written by our tutors."
      />

      <div className="wrap blog-wrap">
        {loading ? (
          <div className="blog-skeleton" aria-label="Loading articles">
            <div className="sk sk-lead" />
            <div className="post-grid">{[1, 2, 3].map(i => <div key={i} className="sk sk-card" />)}</div>
          </div>
        ) : !lead ? (
          <div className="empty-state">
            <h2>Our first articles are on the way.</h2>
            <p>We’re writing guides to help your child succeed. Message us to hear when they’re out.</p>
            <div className="actions">
              <a className="btn btn-primary" href="https://wa.me/2348185179500" target="_blank" rel="noopener noreferrer">Get notified</a>
              <Link className="btn btn-ghost" to="/">Back home</Link>
            </div>
          </div>
        ) : (
          <>
            <BlogCard post={lead} variant="featured" />
            {rest.length > 0 && (
              <div className="blog-latest">
                <div className="sec-head">
                  <h2>Latest articles</h2>
                  {topics.length > 2 && (
                    <div className="filter" role="tablist" aria-label="Filter by topic">
                      {topics.map(t => <button key={t} role="tab" aria-selected={topic === t} onClick={() => setTopic(t)}>{t}</button>)}
                    </div>
                  )}
                </div>
                <div key={topic} className="post-grid swap">
                  {shown.map(post => <BlogCard key={post._id} post={post} />)}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <section className="cta">
        <div className="wrap"><Newsletter source="Blog Page" /></div>
      </section>
    </PageLayout>
  )
}

export default BlogList
