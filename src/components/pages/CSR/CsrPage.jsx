import { useState } from 'react'
import { PiGraduationCapDuotone, PiBriefcaseDuotone, PiHandHeartDuotone, PiUsersThreeDuotone, PiCalendarBlankBold, PiArrowDownBold } from 'react-icons/pi'
import PageLayout from '../../Layout/PageLayout'
import PageHead from '../../Layout/PageHead'
import CtaPanel from '../../Layout/CtaPanel'
import heroImg from '../../../assets/images/csrhero.jpg'

const pillars = {
  education: { icon: PiGraduationCapDuotone, title: 'Educational access & sponsorships', text: 'Breaking financial barriers by sponsoring exams and providing learning support.' },
  careers: { icon: PiBriefcaseDuotone, title: 'Career & skills development', text: 'Career fairs, webinars and training that prepare learners for the world of work.' },
  community: { icon: PiHandHeartDuotone, title: 'Community welfare & advocacy', text: 'Working with partners to provide food, mentorship and advocacy programmes.' },
  partnerships: { icon: PiUsersThreeDuotone, title: 'Partnerships & volunteering', text: 'Staff-led projects and collaborations that extend our reach and deepen our impact.' },
}

const activities = {
  2026: [
    { title: 'HireGround Academy', date: '2026', pillar: 'careers', summary: 'A six-week employability and skills programme following the HireGround Career Fair, preparing graduates and early-career professionals for the job market.', impact: '20 students impacted' },
  ],
  2025: [
    { title: 'GCSE Boot Camp', date: '12 April 2025', pillar: 'education', summary: 'A one-day intensive boot camp preparing students for their GCSE exams and building their confidence.', impact: '11 students reached · 70% attendance' },
    { title: 'Feeding Outreach (Ibadan)', date: 'May 2025', pillar: 'community', summary: 'A community feeding programme providing nutritious meals to children and families in need across Ibadan.', impact: '100+ families served · 300+ meals' },
    { title: 'Microsoft Excel Training Webinar', date: 'July 2025', pillar: 'careers', summary: 'A virtual session teaching essential Excel skills for the workplace.', impact: '45 participants · 85% completion' },
    { title: 'Boy-Child Advocacy Outreach', date: 'July 2025', pillar: 'community', summary: 'Advocacy focused on boy-child education, mental health awareness and positive role models.', impact: '60 young men engaged · 12 mentorship matches' },
    { title: 'School Infrastructure + Feeding Project', date: 'Q4 2025', pillar: 'education', summary: 'School infrastructure improvements combined with a sustainable feeding programme.', impact: '200+ students · 3 schools' },
    { title: 'HireGround', date: 'December 2025', pillar: 'careers', summary: 'A career event bringing together industry leaders, job seekers, career changers and entrepreneurs, to connect talent with opportunity.', impact: '1,000+ people reached' },
  ],
  2024: [
    { title: 'JAMB Sponsorship', date: 'January 2024', pillar: 'education', summary: 'Paying JAMB registration fees for underprivileged students so they could pursue higher education.', impact: '50+ students sponsored · 85% admission rate' },
    { title: 'Direct Entry Sponsorship', date: 'January 2024', pillar: 'education', summary: 'Supporting qualified students through direct-entry university admission and its costs.', impact: '25 students supported · 90% success rate' },
    { title: 'Virtual Career Fair Conference', date: 'August 2024', pillar: 'careers', summary: 'A large virtual career fair connecting students with employers, with career guidance sessions.', impact: '500+ attendees · 30+ employers · 150+ job matches' },
    { title: 'CARE Program Support', date: 'Late 2024', pillar: 'partnerships', summary: 'A partnership programme supporting vulnerable members of the community.', impact: '200+ people supported · 15 partner organisations' },
  ],
}

const years = Object.keys(activities).sort((a, b) => b - a)

const CsrPage = () => {
  const [year, setYear] = useState(years[0])

  return (
    <PageLayout title="Our Impact (CSR)" description="How The Light Tutors gives back: exam sponsorships, outreach, mentorship and skills training for learners and communities.">
      <PageHead
        kicker="Our impact"
        title="Learning should reach everyone. So we go further."
        lede="Beyond our lessons, The Light Tutors supports learners through exam sponsorships, community outreach, mentorship and skills training."
        image={heroImg}
        imageAlt="Students at a Light Tutors outreach event"
        actions={<a className="btn btn-primary" href="#projects">See our projects <PiArrowDownBold /></a>}
      />

      <section className="flush-top">
        <div className="wrap">
          <div className="sec-head"><h2>Where we focus</h2><p>Our work falls into four areas.</p></div>
          <div className="feature-grid" style={{ '--cols': 4 }}>
            {Object.values(pillars).map(({ icon: Icon, title, text }, i) => (
              <div className={`feature${i % 2 ? ' warm' : ''}`} key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-dark" id="projects">
        <div className="wrap">
          <div className="sec-head">
            <h2>Our projects, year by year</h2>
            <div className="filter light" role="tablist" aria-label="Choose a year">
              {years.map(y => (
                <button key={y} role="tab" aria-selected={year === y} onClick={() => setYear(y)}>{y} <span>{activities[y].length}</span></button>
              ))}
            </div>
          </div>
          <div key={year} className="project-grid swap" role="tabpanel">
            {activities[year].map(a => {
              const { icon: Icon, title: pillarTitle } = pillars[a.pillar]
              return (
                <article className="project" key={a.title}>
                  <div className="project-top"><Icon aria-hidden="true" /><span>{pillarTitle}</span></div>
                  <h3>{a.title}</h3>
                  <p className="project-date"><PiCalendarBlankBold aria-hidden="true" /> {a.date}</p>
                  <p>{a.summary}</p>
                  <p className="project-impact">{a.impact}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaPanel
        title={<>Want to <span>work with us?</span></>}
        text="We partner with schools, organisations and volunteers on projects that open doors for young people. Get in touch to talk about working together."
        points={[]}
        label="Talk to us on WhatsApp"
        image={null}
      />
    </PageLayout>
  )
}

export default CsrPage
