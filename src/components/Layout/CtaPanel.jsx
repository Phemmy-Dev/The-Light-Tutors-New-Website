import PropTypes from 'prop-types'
import { PiArrowRightBold, PiCheckBold } from 'react-icons/pi'
import { WHATSAPP } from './links'
import defaultImg from '../../assets/images/ctaImg.jpg'

// The teal closing panel at the bottom of most pages. Defaults to the "free first lesson" offer.
const CtaPanel = ({
  title = <>Their first lesson is <span>on us.</span></>,
  text = 'Meet a tutor, see how your child gets on, and decide after. There’s nothing to sign and nothing to pay for the first lesson.',
  points = ['A full one-to-one lesson, not a sales call', 'Matched to your child’s subject and level', 'We reply on WhatsApp within the day'],
  label = 'Book the free lesson',
  href = WHATSAPP,
  image = defaultImg,
  imageAlt = 'A girl working through a lesson at her laptop',
}) => (
  <section className="cta">
    <div className="wrap">
      <div className={`cta-panel${image ? '' : ' no-photo'}`}>
        <div className="cta-copy">
          <h2>{title}</h2>
          {text && <p>{text}</p>}
          {points?.length > 0 && <ul className="checks">{points.map(p => <li key={p}><PiCheckBold />{p}</li>)}</ul>}
          <div className="actions">
            <a className="btn btn-primary" href={href} target="_blank" rel="noopener noreferrer">{label} <PiArrowRightBold /></a>
          </div>
        </div>
        {image && <div className="cta-photo"><img src={image} alt={imageAlt} loading="lazy" /></div>}
      </div>
    </div>
  </section>
)

CtaPanel.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  points: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default CtaPanel
