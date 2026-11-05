import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './PageLayout'

// Layout for Terms, Privacy and Refund: header, a contents list built from the section headings, and the text.
const LegalPage = ({ title, description, updated, children }) => {
  const body = useRef(null)
  const [sections, setSections] = useState([])

  useEffect(() => {
    const headings = [...body.current.querySelectorAll('h2')]
    setSections(headings.map((h, i) => {
      h.id = h.id || `section-${i + 1}`
      // the old markup puts the section number in a <span>; leave it out of the contents label
      const label = [...h.childNodes].filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent).join('').trim() || h.textContent
      return { id: h.id, label }
    }))
  }, [])

  return (
    <PageLayout title={title} description={description}>
      <div className="page-head legal-head">
        <div className="wrap">
          <div className="kicker">Legal</div>
          <h1>{title}</h1>
          {updated && <p className="lede">Last updated {updated}</p>}
        </div>
      </div>
      <section className="flush-top">
        <div className={`wrap legal-grid${sections.length > 1 ? '' : ' single'}`}>
          {sections.length > 1 && (
            <nav className="legal-toc" aria-label="On this page">
              <p>On this page</p>
              <ol>{sections.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}</ol>
            </nav>
          )}
          <div className="legal" ref={body}>{children}</div>
        </div>
      </section>
    </PageLayout>
  )
}

LegalPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  updated: PropTypes.string,
  children: PropTypes.node,
}

export default LegalPage
