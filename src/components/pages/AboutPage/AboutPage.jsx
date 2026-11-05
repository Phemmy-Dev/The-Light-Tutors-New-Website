import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiHandHeartDuotone, PiStarDuotone, PiPlantDuotone, PiGlobeHemisphereWestDuotone, PiConfettiDuotone, PiLaptopDuotone, PiWifiHighDuotone, PiVideoCameraDuotone, PiClockDuotone } from 'react-icons/pi'
import PageLayout from '../../Layout/PageLayout'
import PageHead from '../../Layout/PageHead'
import CtaPanel from '../../Layout/CtaPanel'
import { WHATSAPP } from '../../Layout/links'
import teamImg from '../../../assets/images/teamimg.JPG'
import operatePic from '../../../assets/images/operatepic.png'

const stats = [
  { num: '300', unit: '+', text: 'students taught one-to-one' },
  { num: '49', unit: '+', text: 'qualified tutors' },
  { num: '4', unit: '', text: 'countries our students learn from' },
  { num: '65', unit: '+', text: 'staff across teaching and support' },
]

const values = [
  { icon: PiHandHeartDuotone, title: 'Servant Leadership', text: 'We lead by serving our students, families and each other first.' },
  { icon: PiStarDuotone, title: 'Excellence', text: 'We prepare every lesson properly and hold ourselves to a high standard.' },
  { icon: PiPlantDuotone, title: 'Growth & Development', text: 'We help students and tutors keep growing, in learning and in character.' },
  { icon: PiGlobeHemisphereWestDuotone, title: 'Impact', text: 'We measure ourselves by the difference we make for children and communities.' },
  { icon: PiConfettiDuotone, title: 'Celebration', text: 'We notice progress, big and small, and we celebrate it together.' },
]

const purpose = {
  Vision: 'To build a delightful learning ecosystem that uplifts everyone who comes in contact with us, as we become the premier online tutoring company.',
  Mission: 'To give students a strong foundation and the tools to enjoy learning, to lead programmes that build both academic success and character, and to teach each child in the way that works best for them.',
}

const needs = [
  { icon: PiLaptopDuotone, text: 'A computer' },
  { icon: PiVideoCameraDuotone, text: 'A webcam' },
  { icon: PiWifiHighDuotone, text: 'A reliable internet connection' },
  { icon: PiClockDuotone, text: 'A regular time that suits your family' },
]

const AboutPage = () => {
  const [tab, setTab] = useState('Vision')

  return (
    <PageLayout title="About Us" description="The Light Tutors was founded to keep children learning, wherever they are. Meet the people, values and mission behind our one-to-one online tutoring.">
      <PageHead
        kicker="About The Light Tutors"
        title={<>We started so no child would have to stop <span className="squiggle">learning.<svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8 C 30 2, 50 12, 80 6 S 130 2, 160 7 S 190 6, 198 4" /></svg></span></>}
        lede="The Light Tutors was founded during the pandemic, when classrooms closed and many children fell behind. We set out to keep learning going for every child, whatever the time zone or circumstance. That is still what we do today."
        image={teamImg}
        imageAlt="The Light Tutors team together"
        actions={<>
          <Link className="btn btn-primary" to="/meet-our-team">Meet the team</Link>
          <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Talk to us</a>
        </>}
      />

      <div className="wrap">
        <div className="stats" style={{ '--cols': 4 }}>
          {stats.map(s => (
            <div className="stat" key={s.text}>
              <div className="stat-num">{s.num}<span>{s.unit}</span></div>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <section>
        <div className="wrap split">
          <div>
            <h2 className="h-section">What we teach, and who we teach</h2>
          </div>
          <div className="prose-block">
            <p>We offer one-to-one tutoring in Mathematics, English and the Sciences for students from KS2 up to GCSE, and for students in elementary (Grades K–5), middle (Grades 6–8) and high school (Grades 9–12).</p>
            <p>We also teach Yoruba and French to beginners and intermediate learners.</p>
            <p className="pull">Our goal is simple: to make learning as easy and seamless as possible, with support that fits each student.</p>
          </div>
        </div>
      </section>

      <section className="band-dark">
        <div className="wrap">
          <div className="sec-head">
            <h2>What guides us</h2>
            <p>Five values shape how we teach, how we hire and how we treat every family.</p>
          </div>
          <div className="values">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="value" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="purpose">
            <div className="purpose-tabs" role="tablist" aria-label="Vision and mission">
              {Object.keys(purpose).map(k => (
                <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>Our {k.toLowerCase()}</button>
              ))}
            </div>
            <p key={tab} className="purpose-text swap" role="tabpanel">{purpose[tab]}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split align-center">
          <div>
            <h2 className="h-section">How we work</h2>
            <div className="prose-block">
              <p>Our tutors are trained and based in Africa, and our students learn from several countries. Every lesson happens online, so good teaching reaches your child at home.</p>
              <p>Parents tell us the flexibility is what makes it work. Lessons fit around school and family life, instead of the other way round.</p>
            </div>
            <h3 className="h-small">All your child needs</h3>
            <ul className="needs">
              {needs.map(({ icon: Icon, text }) => <li key={text}><Icon aria-hidden="true" />{text}</li>)}
            </ul>
          </div>
          <img className="rounded-photo" src={operatePic} alt="A student in an online lesson with a tutor" loading="lazy" />
        </div>
      </section>

      <CtaPanel />
    </PageLayout>
  )
}

export default AboutPage
