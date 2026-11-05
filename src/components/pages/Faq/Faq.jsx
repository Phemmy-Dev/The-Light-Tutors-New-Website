import { useState } from 'react'
import { PiPlusBold, PiWhatsappLogoBold } from 'react-icons/pi'
import PageLayout from '../../Layout/PageLayout'
import PageHead from '../../Layout/PageHead'
import { WHATSAPP } from '../../Layout/links'

const faqs = [
  {
    q: 'What subjects and levels do you teach?',
    a: 'We teach Mathematics, Further Mathematics, English Language, English Literature, Sciences, Biology, Chemistry, Physics, Geography, Computer Science, Coding (HTML, CSS, Java, C++, C#, Python, Scratch and more) and languages (French and Yoruba), to primary and secondary school students.',
  },
  {
    q: 'What technology do you use to teach?',
    a: 'Lessons run on Zoom, and our student portal holds class work, assignments and quizzes. Tutors also use trusted learning materials such as videos, slides and infographics. It helps if parents share their child’s school curriculum so lessons match what they’re learning in class.',
  },
  {
    q: 'How long are lessons, and how often?',
    a: 'A standard lesson is one hour per subject. This can change based on the tutor’s advice and what you’d like for your child.',
  },
  {
    q: 'How do I follow my child’s progress?',
    a: 'After each lesson, a class report goes to the student portal with details of how the lesson went and how your child engaged. You can also see assignment and test scores in the portal. Monthly progress reports are available on request.',
  },
  {
    q: 'What happens in a lesson?',
    a: 'Our tutors are patient and encouraging. They guide students with questions rather than just giving answers, so your child learns how to solve problems on their own. After each lesson, your child should feel more ready for homework, tests and exams.',
  },
  {
    q: 'How many students are in a class?',
    a: 'Lessons are one-to-one: one tutor and one student. If you’d like your child to learn alongside others, we can arrange that too.',
  },
  {
    q: 'What curriculum do tutors follow?',
    a: 'We ask parents to share their child’s school curriculum before lessons begin. If that isn’t possible, tutors follow the national curriculum, such as the Gov.UK National Curriculum.',
  },
]

const Faq = () => {
  const [open, setOpen] = useState(0)

  return (
    <PageLayout title="Frequently Asked Questions" description="Answers to the questions parents ask most about The Light Tutors: subjects, lesson length, progress reports, class sizes and more.">
      <PageHead
        kicker="FAQ"
        title="Questions parents ask us"
        lede="Everything you need to know before your child’s first lesson. Can’t see your question? Message us and we’ll answer it."
      />

      <section className="flush-top">
        <div className="wrap faq-grid">
          <div className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div className={`faq${isOpen ? ' open' : ''}`} key={f.q}>
                  <h3>
                    <button aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                      {f.q}<PiPlusBold aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="faq-a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                    <p>{f.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <aside className="faq-aside">
            <h2>Still wondering about something?</h2>
            <p>Our team usually replies on WhatsApp within the day. Ask us anything about lessons, tutors or prices.</p>
            <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><PiWhatsappLogoBold /> Ask on WhatsApp</a>
          </aside>
        </div>
      </section>
    </PageLayout>
  )
}

export default Faq
