import PropTypes from 'prop-types'
import '../../styles/site.css'
import '../../styles/pages.css'
import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'
import usePageMeta from '../../hooks/usePageMeta'

// Wraps every page: new nav, footer, design tokens, and the page's own Google title/description.
const PageLayout = ({ title, description, className = '', children }) => {
  usePageMeta({ title, description })
  return (
    <div className={`site ${className}`}>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default PageLayout
