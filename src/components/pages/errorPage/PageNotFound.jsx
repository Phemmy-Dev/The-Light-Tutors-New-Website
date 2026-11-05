import { Link, useNavigate } from 'react-router-dom'
import { PiArrowLeftBold, PiHouseBold, PiUsersDuotone, PiInfoDuotone, PiBookOpenTextDuotone, PiQuestionDuotone, PiArrowUpRightBold } from 'react-icons/pi'
import PageLayout from '../../Layout/PageLayout'
import { WHATSAPP } from '../../Layout/links'

const nextSteps = [
  { title: 'Meet our tutors', text: 'Find the right person to guide your child.', path: '/meet-our-team', icon: PiUsersDuotone },
  { title: 'About us', text: 'Who we are and how we teach.', path: '/about', icon: PiInfoDuotone },
  { title: 'Read the blog', text: 'Tips and guides for parents and students.', path: '/blog', icon: PiBookOpenTextDuotone },
  { title: 'FAQs', text: 'Answers to the questions parents ask most.', path: '/frequently-asked-questions', icon: PiQuestionDuotone },
]

// The "0" in 404 is the logo's lightbulb, which flickers on: we light the way back
const Bulb = () => (
  <svg viewBox="0 0 120 170" className="bulb" aria-hidden="true">
    <path className="bulb-glass" d="M60 8 C30 8 10 30 10 60 C10 80 22 94 32 106 C38 113 40 120 40 128 L80 128 C80 120 82 113 88 106 C98 94 110 80 110 60 C110 30 90 8 60 8 Z" />
    <path className="bulb-filament" d="M44 128 L44 92 L52 80 L60 92 L68 80 L76 92 L76 128" />
    <rect x="38" y="134" width="44" height="10" rx="4" />
    <rect x="40" y="148" width="40" height="10" rx="4" />
  </svg>
)

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <PageLayout title="Page not found">
      <section className="nf">
        <div className="wrap">
          <div className="nf-panel">
            <p className="nf-kicker">Error 404</p>
            <h1 className="nf-code" aria-label="404"><span aria-hidden="true">4</span><Bulb /><span aria-hidden="true">4</span></h1>
            <h2>This lesson isn’t on the timetable.</h2>
            <p>Even the brightest students take a wrong turn now and then. The page you’re looking for has moved or never existed, so let us light the way back.</p>
            <div className="actions">
              <Link className="btn btn-primary" to="/"><PiHouseBold /> Back to the homepage</Link>
              <button className="btn btn-light" type="button" onClick={() => navigate(-1)}><PiArrowLeftBold /> Go back a page</button>
            </div>
          </div>
        </div>
      </section>

      <section className="flush-top">
        <div className="wrap">
          <div className="sec-head"><h2>Pick up where you left off</h2></div>
          <div className="nf-links">
            {nextSteps.map(({ title, text, path, icon: Icon }) => (
              <Link className="nf-link" to={path} key={path}>
                <span className="nf-link-top"><Icon aria-hidden="true" /><PiArrowUpRightBold aria-hidden="true" /></span>
                <b>{title}</b>
                <span>{text}</span>
              </Link>
            ))}
          </div>
          <p className="nf-foot">Looking for a tutor for your child? <a className="text-link" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></p>
        </div>
      </section>
    </PageLayout>
  )
}

export default PageNotFound
