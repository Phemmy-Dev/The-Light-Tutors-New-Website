import { useState } from 'react'
import { Link } from 'react-router-dom'
import daniel from '../../../assets/images/tutors/21.jpg'
import kemisola from '../../../assets/images/tutors/37.jpg'
import praise from '../../../assets/images/tutors/34.jpg'
import abisola from '../../../assets/images/tutors/16.jpg'
import noah from '../../../assets/images/tutors/31.jpg'
import dongmo from '../../../assets/images/tutors/8.jpg'
import { WHATSAPP } from '../../Layout/links'

// tutor.id matches the id in src/data/team.js, so the card links to their profile
const subjects = [
  { name: 'Mathematics', levels: ['KS2', '11+', 'KS3', 'GCSE', 'A-Level'], text: 'From times tables to further maths. We rebuild the basics first, so harder topics stop feeling scary.', covers: ['Number and times tables', 'Fractions and percentages', 'Algebra and equations', 'Exam technique for GCSE'], tutor: { id: 30, img: daniel, name: 'Daniel Babalola', subjects: 'Maths, Further Maths, Physics' } },
  { name: 'English', levels: ['KS2', '11+', 'KS3', 'GCSE'], text: 'Reading, writing and comprehension, taught so your child can explain their ideas with confidence.', covers: ['Reading comprehension', 'Spelling and grammar', 'Creative writing', 'GCSE Language and Literature'], tutor: { id: 23, img: kemisola, name: 'Kemisola David', subjects: 'Maths, English, Science' } },
  { name: '11+ Preparation', levels: ['Year 4', 'Year 5', 'Year 6'], text: 'Calm, steady practice for grammar and independent school entrance exams.', covers: ['Verbal reasoning', 'Non-verbal reasoning', 'Maths and English papers', 'Timed mock practice'], tutor: { id: 22, img: praise, name: 'Praise Aderinola', subjects: 'Maths, Science, NVR' } },
  { name: 'Sciences', levels: ['KS3', 'GCSE', 'A-Level'], text: 'Physics, Chemistry and Biology made clear, with lots of real-world examples.', covers: ['Biology', 'Chemistry', 'Physics', 'Required practicals and exam questions'], tutor: { id: 18, img: abisola, name: 'Abisola Adefila', subjects: 'Science, Biology, Chemistry' } },
  { name: 'Coding', levels: ['Ages 8+', 'KS3', 'GCSE'], text: 'Fun first projects that grow into real programming and computer science skills.', covers: ['Scratch and block coding', 'Python basics', 'Problem solving', 'GCSE Computer Science'], tutor: { id: 32, img: noah, name: 'Noah Ige', subjects: 'Maths, Science, Computing' } },
  { name: 'Languages & Music', levels: ['All ages'], text: 'French, Yoruba, music and more, with tutors who love what they teach.', covers: ['French', 'Yoruba', 'Music lessons', 'Speaking practice'], tutor: { id: 28, img: dongmo, name: 'Dongmo Bilson', subjects: 'French, Biology, Sciences' } },
]

const range = levels => levels.length > 1 ? `${levels[0]} to ${levels[levels.length - 1]}` : levels[0]

const HomeSubjects = () => {
  const [i, setI] = useState(0)
  const s = subjects[i]

  return (
    <section className="band-orange" id="subjects">
      <div className="wrap">
        <div className="sec-head">
          <h2>Where does your child need a little help?</h2>
          <p>Choose a subject to see what we cover. Not sure which one is the real problem? Just tell us what you’re seeing at home.</p>
        </div>
        <div className="explorer">
          <div className="tabs" role="tablist" aria-label="Subjects">
            {subjects.map((sub, n) => (
              <button key={sub.name} role="tab" id={`subject-tab-${n}`} aria-selected={n === i} aria-controls="subject-panel"
                onClick={e => { setI(n); e.currentTarget.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' }) }}>
                {sub.name}<small>{range(sub.levels)}</small>
              </button>
            ))}
          </div>
          <div key={i} className="panel swap" role="tabpanel" id="subject-panel" aria-labelledby={`subject-tab-${i}`}>
            <h3>{s.name}</h3>
            <div className="tags">{s.levels.map(l => <span className="tag" key={l}>{l}</span>)}</div>
            <p>{s.text}</p>
            <ul className="covers">{s.covers.map(c => <li key={c}>{c}</li>)}</ul>
            <Link className="matched" to={`/meet-our-team/${s.tutor.id}`}>
              <img src={s.tutor.img} alt="" />
              <p><b>{s.tutor.name}</b>One of our {s.name.toLowerCase()} tutors · {s.tutor.subjects}</p>
            </Link>
            <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Ask about {s.name}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSubjects
