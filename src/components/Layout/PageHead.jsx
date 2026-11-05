import PropTypes from 'prop-types'

// The opening block of an inner page: kicker, big heading, intro, buttons, and an optional photo.
const PageHead = ({ kicker, title, lede, image, imageAlt = '', actions }) => (
  <div className="page-head">
    <div className={`wrap page-head-grid${image ? '' : ' solo'}`}>
      <div>
        {kicker && <div className="kicker">{kicker}</div>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {actions && <div className="actions">{actions}</div>}
      </div>
      {image && <figure><img src={image} alt={imageAlt} /></figure>}
    </div>
  </div>
)

PageHead.propTypes = {
  kicker: PropTypes.node,
  title: PropTypes.node.isRequired,
  lede: PropTypes.node,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  actions: PropTypes.node,
}

export default PageHead
