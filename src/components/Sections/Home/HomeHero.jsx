import { useEffect, useState } from 'react'
import { PiArrowRightBold } from 'react-icons/pi'
import heroImg from '../../../assets/images/heroBg3.jpg'
import { WHATSAPP } from '../../Layout/links'
import BrandShapes from '../../Layout/BrandShapes'

// Real outcomes from parent reviews; the card cycles through them.
const results = [
  { subject: 'Science', from: 'Set 5', to: 'Set 1', name: 'Omolade', note: 'moved from the bottom set to the top' },
  { subject: 'GCSE Maths & Physics', from: 'Worried', to: 'As & Bs', name: 'Femi', note: 'now staying with us for A-Levels' },
  { subject: 'Entrance exam', from: 'Nervous', to: 'Passed', name: 'Atinu', note: 'made the cutoff mark' },
]

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const HomeHero = () => {
  const [i, setI] = useState(0)
  const [restart, setRestart] = useState(0)

  useEffect(() => {
    if (reduceMotion()) return
    const t = setInterval(() => setI(n => (n + 1) % results.length), 4500)
    return () => clearInterval(t)
  }, [restart])

  const r = results[i]

  return (
    <div className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-kicker">One-to-one online tutoring, KS2 to A-Level</p>
          <h1>
            Your child isn’t behind. They just need someone who teaches{' '}
            <span className="squiggle">their way.
              <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8 C 30 2, 50 12, 80 6 S 130 2, 160 7 S 190 6, 198 4" /></svg>
            </span>
          </h1>
          <p className="hero-lede">Friendly, patient tutors who learn how your child thinks, then teach to it. One child, one tutor, every lesson. Most families notice the confidence first, and then the grades follow.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Book a free first lesson <PiArrowRightBold /></a>
            <a className="btn btn-ghost" href="#tutors">Meet the tutors</a>
          </div>
          <p className="hero-proof">
            <span className="stars" aria-hidden="true">★★★★★</span>
            <span><b>4.9/5</b> from parents across the UK and Europe</span>
          </p>
        </div>

        <figure className="hero-photo">
          <BrandShapes />
          <img src={heroImg} alt="A young girl writing in her notebook during an online lesson" />
          <div className="result" aria-live="polite">
            <div className="result-top">
              <span>{r.subject}</span>
              <div className="result-dots">
                {results.map((_, n) => (
                  <button key={n} aria-label={`Show result ${n + 1}`} aria-current={n === i} onClick={() => { setI(n); setRestart(x => x + 1) }} />
                ))}
              </div>
            </div>
            <div key={i} className="swap">
              <div className="result-move"><span className="from">{r.from}</span><span className="arrow">→</span><span className="to">{r.to}</span></div>
              <p><b>{r.name}</b>, {r.note}</p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  )
}

export default HomeHero
