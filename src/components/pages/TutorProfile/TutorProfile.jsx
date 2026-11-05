import { useParams, Link, Navigate } from 'react-router-dom'
import { PiArrowLeftBold, PiCertificateDuotone, PiClockDuotone, PiUsersDuotone, PiWhatsappLogoBold } from 'react-icons/pi'
import PageLayout from '../../Layout/PageLayout'
import team from '../../../data/team'

// Older profiles use "Nil" or blank strings for missing answers
const clean = (value) => {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed && trimmed.toLowerCase() !== 'nil' ? trimmed : null
}

const TeamProfile = () => {
  const { id } = useParams()
  const member = team.find(m => m.id === Number(id))

  // Leadership/staff don't have profile pages
  if (member && !member.hasProfilePage) return <Navigate to="/meet-our-team" replace />

  if (!member) {
    return (
      <PageLayout title="Team member not found">
        <div className="page-head">
          <div className="wrap wrap-narrow">
            <h1>We couldn’t find that team member.</h1>
            <p className="lede">They may have moved on, or the link may be wrong.</p>
            <div className="actions"><Link className="btn btn-primary" to="/meet-our-team"><PiArrowLeftBold /> Back to the team</Link></div>
          </div>
        </div>
      </PageLayout>
    )
  }

  // Prefer the new form answers, fall back to the older profile fields
  const profile = member.profile || {}
  const subjects = profile.subjects
    || (clean(member.subject) ? member.subject.split(/,| and |&/).map(s => s.trim().replace(/\.$/, '')).filter(Boolean) : [])
  const qualification = clean(profile.qualification) || clean(member.level)
  const field = clean(profile.field) || clean(member.course)
  const bio = profile.bio || []
  const passion = bio.length === 0 ? clean(member.passionate) : null
  const interests = (member.interest || []).map(i => i.trim()).filter(Boolean)
  const teaches = member.isTutor && subjects.length > 0
  const firstName = member.name.split(' ')[0]

  const facts = [
    { label: 'Teaching experience', value: clean(profile.experience), icon: PiClockDuotone },
    { label: 'Age groups', value: clean(profile.ageGroups), icon: PiUsersDuotone },
    { label: 'Qualification', value: qualification, icon: PiCertificateDuotone },
  ].filter(f => f.value)

  const whatsapp = `https://api.whatsapp.com/send?phone=2348153418503&text=${encodeURIComponent(`Hi! I saw ${member.name}'s profile and I'd like to book a free lesson for my child.`)}`

  return (
    <PageLayout title={`${member.name}, ${member.title}`} description={`Meet ${member.name}, ${member.title.toLowerCase()} at The Light Tutors${teaches ? `, teaching ${subjects.join(', ')}` : ''}.`}>
      <div className="page-head profile-head">
        <div className="wrap">
          <Link className="kicker" to="/meet-our-team"><PiArrowLeftBold /> All team members</Link>
          <div className="profile-top">
            <img className="profile-photo" src={member.img} alt={member.name} />
            <div className="profile-intro">
              <h1>{member.name}</h1>
              <p className="profile-title">{member.title}</p>
              {teaches && <div className="tags">{subjects.map(s => <span className="tag" key={s}>{s}</span>)}</div>}
              {teaches && (
                <div className="actions">
                  <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><PiWhatsappLogoBold /> Book a free lesson with {firstName}</a>
                </div>
              )}
            </div>
          </div>
          {facts.length > 0 && (
            <dl className="facts">
              {facts.map(({ label, value, icon: Icon }) => (
                <div key={label}>
                  <Icon aria-hidden="true" />
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      <section className="profile-body">
        <div className="wrap wrap-narrow profile-sections">
          {bio.length > 0 && (
            <div className="profile-block">
              <h2>About me</h2>
              {bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}
          {clean(profile.teachingStyle) && (
            <div className="profile-block quote">
              <h2>How I teach</h2>
              <p>{profile.teachingStyle}</p>
            </div>
          )}
          {passion && (
            <div className="profile-block quote">
              <h2>{member.isTutor ? 'What drives me as a tutor' : 'What drives me'}</h2>
              <p>{passion}</p>
            </div>
          )}
          {(field || interests.length > 0) && (
            <div className="profile-pair">
              {field && <div className="profile-block"><h2>Field of study</h2><p>{field}</p></div>}
              {interests.length > 0 && (
                <div className="profile-block">
                  <h2>Outside lessons</h2>
                  <div className="tags">{interests.map(i => <span className="tag" key={i}>{i}</span>)}</div>
                </div>
              )}
            </div>
          )}

          {teaches && (
            <div className="profile-cta">
              <div>
                <h2>Think {firstName} is a good fit?</h2>
                <p>Message us and we’ll arrange a free first lesson for your child.</p>
              </div>
              <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><PiWhatsappLogoBold /> Chat on WhatsApp</a>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}

export default TeamProfile
