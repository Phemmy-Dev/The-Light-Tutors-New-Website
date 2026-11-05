import { PiWalletDuotone, PiCalendarCheckDuotone, PiHouseLineDuotone, PiCheckBold, PiArrowRightBold } from 'react-icons/pi'
import PageLayout from '../../Layout/PageLayout'
import PageHead from '../../Layout/PageHead'
import CtaPanel from '../../Layout/CtaPanel'
import teamImg from '../../../assets/images/teamimg.JPG'

const APPLY = 'https://forms.gle/3bzxXxwatTGGiHiH6'

const benefits = [
  { icon: PiWalletDuotone, title: 'Competitive pay', text: 'Prompt, fair pay for your time and effort.' },
  { icon: PiCalendarCheckDuotone, title: 'A schedule that suits you', text: 'Your own teaching calendar, planned around your day.', warm: true },
  { icon: PiHouseLineDuotone, title: 'Work from anywhere', text: 'Teach remotely, with little or no need to be anywhere in person.' },
]

const requirements = [
  { label: 'Education', text: 'WASSCE and/or a B.Sc. in Education or a relevant subject, or an equivalent qualification.' },
  { label: 'Experience', text: 'Prior experience teaching your subject, preferably online.' },
  { label: 'Subject knowledge', text: 'A thorough understanding of the subject you’ll teach.' },
  { label: 'Technical skills', text: 'Comfortable with virtual tools such as Zoom and Google Docs.' },
  { label: 'People skills', text: 'Excellent communication, adaptability, patience and empathy.' },
  { label: 'Language', text: 'Fluent in English.' },
]

const steps = [
  { title: 'Fill in the application', text: 'Complete the online application form in full.' },
  { title: 'Upload your documents', text: 'Your CV, a cover letter, and contact details for professional references.' },
  { title: 'Check your details', text: 'Make sure everything is accurate and up to date.' },
  { title: 'Submit', text: 'Press Submit at the end of the form. We’ll be in touch.' },
]

const Becomeatutor = () => (
  <PageLayout title="Become a Tutor" description="Join The Light Tutors: teach one-to-one online, from anywhere, on a schedule that suits you. See the benefits, requirements and how to apply.">
    <PageHead
      kicker="Careers at The Light Tutors"
      title="Teach from anywhere. Change a child’s year."
      lede="We’re always glad to welcome passionate, patient tutors to our growing team. Here’s what we offer, what we look for, and how to apply."
      image={teamImg}
      imageAlt="The Light Tutors team"
      actions={<>
        <a className="btn btn-primary" href={APPLY} target="_blank" rel="noopener noreferrer">Apply now <PiArrowRightBold /></a>
        <a className="btn btn-ghost" href="#requirements">See the requirements</a>
      </>}
    />

    <section className="flush-top">
      <div className="wrap">
        <div className="sec-head"><h2>Why tutors join us</h2></div>
        <div className="feature-grid" style={{ '--cols': 3 }}>
          {benefits.map(({ icon: Icon, title, text, warm }) => (
            <div className={`feature${warm ? ' warm' : ''}`} key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="band-cool" id="requirements">
      <div className="wrap split">
        <div>
          <h2 className="h-section">What we look for</h2>
          <p className="muted-lede">If this sounds like you, we’d love to hear from you.</p>
        </div>
        <ul className="req-list">
          {requirements.map(r => (
            <li key={r.label}><PiCheckBold aria-hidden="true" /><div><b>{r.label}</b><span>{r.text}</span></div></li>
          ))}
        </ul>
      </div>
    </section>

    <section>
      <div className="wrap">
        <div className="sec-head"><h2>How to apply</h2><p>Have your CV and cover letter ready before you start.</p></div>
        <ol className="numbered">
          {steps.map((s, i) => (
            <li key={s.title}><span className="num">{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>
          ))}
        </ol>
      </div>
    </section>

    <CtaPanel
      title={<>Ready to <span>join us?</span></>}
      text="If you meet the requirements and love teaching, fill in the application form and we’ll be in touch."
      points={[]}
      label="Apply now"
      href={APPLY}
      image={null}
    />
  </PageLayout>
)

export default Becomeatutor
