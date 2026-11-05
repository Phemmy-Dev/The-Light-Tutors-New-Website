import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../Layout/PageLayout'
import PageHead from '../../Layout/PageHead'
import CtaPanel from '../../Layout/CtaPanel'
import EmployeeOfTheMonth from '../../../assets/images/employeeM.png'
import team from '../../../data/team'

const groups = {
  Everyone: () => true,
  Tutors: m => m.isTutor,
  'Leadership & staff': m => !m.isTutor,
}

// "Nil" and blank subjects come from older entries
const subjectsOf = m => (typeof m.subject === 'string' && !['', 'nil'].includes(m.subject.trim().toLowerCase()) ? m.subject.replace(/\s+/g, ' ').trim().replace(/[.,]$/, '') : null)

const MeetTheTeam = () => {
  // Filter hidden for now. To bring it back: use `const [group, setGroup] = useState('Everyone')` and uncomment the filter below.
  const [group] = useState('Everyone')
  const members = team.filter(groups[group])

  return (
    <PageLayout title="Meet Our Team" description="Meet the tutors and staff behind The Light Tutors: qualified, patient people who bring a wide range of experience to every lesson.">
      <PageHead
        kicker="Meet the team"
        title="The friendly faces behind every lesson"
        lede="We are a group of young, passionate people working towards one goal: helping every child learn with confidence. Tap a tutor to read about how they teach."
      />

      <div className="wrap">
        <figure className="eotm">
          <img src={EmployeeOfTheMonth} alt="The Light Tutors employee of the month" />
        </figure>
      </div>

      <section className="team-section">
        <div className="wrap">
          <div className="sec-head">
            <h2>Our team</h2>
            {/* <div className="filter" role="tablist" aria-label="Filter the team">
              {Object.keys(groups).map(g => (
                <button key={g} role="tab" aria-selected={group === g} onClick={() => setGroup(g)}>
                  {g} <span>{team.filter(groups[g]).length}</span>
                </button>
              ))}
            </div> */}
          </div>

          <div key={group} className="person-grid swap" style={{ '--cols': 4 }}>
            {members.map(m => {
              const role = m.isTutor ? (subjectsOf(m) || m.title) : m.title
              const body = <>
                <span className="ph"><img src={m.img} alt={m.name} loading="lazy" /></span>
                <span className="person-name">{m.name}</span>
                <span className="person-role">{role}</span>
              </>
              return m.hasProfilePage
                ? <Link className="person" to={`/meet-our-team/${m.id}`} key={m.id}>{body}</Link>
                : <div className="person" key={m.id}>{body}</div>
            })}
          </div>
        </div>
      </section>

      <CtaPanel
        title={<>Found a tutor you like? <span>Let’s talk.</span></>}
        text="Tell us about your child and we’ll match them with the right tutor for their subject and level. The first lesson is free."
        points={[]}
        label="Chat with us on WhatsApp"
      />
    </PageLayout>
  )
}

export default MeetTheTeam
