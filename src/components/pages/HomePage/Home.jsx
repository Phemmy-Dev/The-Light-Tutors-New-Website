import './Home.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PiUsersThreeDuotone, PiLightbulbFilamentDuotone, PiCalendarCheckDuotone, PiHouseLineDuotone } from 'react-icons/pi'
import PageLayout from '../../Layout/PageLayout'
import CtaPanel from '../../Layout/CtaPanel'
import HomeHero from '../../Sections/Home/HomeHero'
import HomeSubjects from '../../Sections/Home/HomeSubjects'
import HowItWorks from '../../Sections/Home/HowItWorks'
import HomeStories from '../../Sections/Home/HomeStories'
import daniel from '../../../assets/images/tutors/21.jpg'
import noah from '../../../assets/images/tutors/31.jpg'
import kemisola from '../../../assets/images/tutors/37.jpg'
import james from '../../../assets/images/tutors/25.jpg'
import abisola from '../../../assets/images/tutors/16.jpg'
import dongmo from '../../../assets/images/tutors/8.jpg'

const stats = [
  { num: '300', unit: '+', text: "students who've grown in confidence with us" },
  { num: '18,000', unit: '+', text: 'hours of one-to-one teaching delivered' },
  { num: '4.9', unit: '/5', text: 'average parent rating for patience and expertise' },
]

const perks = [
  { icon: PiUsersThreeDuotone, title: 'Always one-to-one', text: "Your child gets their tutor's full attention, every single lesson." },
  { icon: PiLightbulbFilamentDuotone, title: 'Patient tutors', text: 'Chosen for how kindly they explain, not just for what they know.', warm: true },
  { icon: PiCalendarCheckDuotone, title: 'Fits your week', text: 'Lessons booked around school, clubs and family time.', warm: true },
  { icon: PiHouseLineDuotone, title: 'Learn from home', text: "Online lessons, so there's no travelling and no rushing about." },
]

// id matches src/data/team.js, so each card opens that tutor's profile
const tutors = [
  { id: 30, img: daniel, name: 'Daniel Babalola', subjects: 'Maths, Physics, Economics' },
  { id: 32, img: noah, name: 'Noah Ige', subjects: 'Maths, Science, Computing' },
  { id: 23, img: kemisola, name: 'Kemisola David', subjects: 'Maths, English, Science' },
  { id: 16, img: james, name: 'James Opara', subjects: 'Maths, English, Computing' },
  { id: 18, img: abisola, name: 'Abisola Adefila', subjects: 'Biology, Chemistry' },
  { id: 28, img: dongmo, name: 'Dongmo Bilson', subjects: 'French, Biology' },
]

const Home = () => {
  // Footer links on other pages point to /#subjects and /#how; scroll there once the page has rendered
  useEffect(() => {
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
  }, [])

  return (
    <PageLayout
      title="The Light Tutors | Expert Online Tutors for UK Students"
      description="Struggling with GCSEs or KS2 SATs? The Light Tutors provides patient, one-on-one online tutoring that builds confidence and boosts grades for students across the UK. Book a free session!"
    >
      <HomeHero />

      <div className="wrap">
        <div className="stats">
          {stats.map(s => (
            <div className="stat" key={s.text}>
              <div className="stat-num">{s.num}<span>{s.unit}</span></div>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="why">
        <div className="wrap why-grid">
          <div className="why-copy">
            <h2>Big classes can leave bright kids behind. We give them a tutor of their own.</h2>
            <p>The Light Tutors was started by educators who saw clever children lose faith in themselves in classrooms of thirty. <strong>So every lesson here is one tutor and one child</strong>, with all the time it takes for things to click.</p>
          </div>
          <div className="feature-grid">
            {perks.map(({ icon: Icon, title, text, warm }) => (
              <div className={`feature${warm ? ' warm' : ''}`} key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeSubjects />
      <HowItWorks />

      <section className="band-peach" id="tutors">
        <div className="wrap">
          <div className="sec-head">
            <h2>Say hello to the people your child will learn with</h2>
            <p>Qualified, experienced and picked for their patience. Every tutor is interviewed and trained by our team.</p>
          </div>
          <div className="person-grid">
            {tutors.map(t => (
              <Link className="person" to={`/meet-our-team/${t.id}`} key={t.id}>
                <span className="ph"><img src={t.img} alt={t.name} loading="lazy" /></span>
                <span className="person-name">{t.name}</span>
                <span className="person-role">{t.subjects}</span>
              </Link>
            ))}
          </div>
          <div className="tutors-foot">
            <span>Plus 30 more tutors across every subject.</span>
            <Link className="btn btn-ghost" to="/meet-our-team">See every tutor</Link>
          </div>
        </div>
      </section>

      <HomeStories />
      <CtaPanel />
    </PageLayout>
  )
}

export default Home
