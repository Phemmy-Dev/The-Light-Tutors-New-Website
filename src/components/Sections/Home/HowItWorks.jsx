import { useState } from 'react'
import { PiCheckBold } from 'react-icons/pi'
import Logo from '../../../assets/images/Logo.png'
import abisola from '../../../assets/images/tutors/16.jpg'

const steps = [
  { title: 'Say hello on WhatsApp', text: "Tell us your child's year, subject and what's been hard." },
  { title: 'We match a tutor', text: 'Picked for their level, subject and how they like to learn.' },
  { title: 'Try a free lesson', text: "A full first lesson. You decide if it's the right fit." },
  { title: 'Watch them grow', text: 'Regular lessons with the same tutor who knows them.' },
]

// Example previews for each step (illustrative, not a real booking)
const scenes = [
  <div key="chat" className="card chat">
    <div className="chat-head"><img src={Logo} alt="" /><div>The Light Tutors<small>usually replies within the day</small></div></div>
    <div className="bubble me">Hi! My daughter is in Year 9 and finding Science really hard this term.</div>
    <div className="bubble them">Thanks for getting in touch! Which topics worry her most, and when is she usually free after school?</div>
  </div>,
  <div key="match" className="card match-card">
    <span className="k">Your tutor match</span>
    <div className="top"><img src={abisola} alt="" /><div><h4>Abisola Adefila</h4><span className="k">Science, Biology and Chemistry</span></div></div>
    <ul>
      <li><PiCheckBold />Teaches Year 9 Science</li>
      <li><PiCheckBold />Free on weekday evenings</li>
      <li><PiCheckBold />Patient, step-by-step style</li>
    </ul>
  </div>,
  <div key="lesson" className="card lesson-card">
    <span className="free-tag">Free first lesson</span>
    <div className="when"><div className="cal"><span>THU</span><b>14</b></div><div><h4>Year 9 Science</h4><span className="k">5:00pm · 60 minutes · online</span></div></div>
    <div className="matched"><img src={abisola} alt="" /><p><b>with Abisola</b>Joining link sent on WhatsApp</p></div>
    <span className="fake-btn">Join lesson</span>
  </div>,
  <div key="grow" className="card grow">
    <span className="k">Lessons this term</span>
    <h4>Same tutor, every week</h4>
    <div className="weeks">
      {Array.from({ length: 8 }, (_, w) => <i key={w} className={w < 6 ? 'on' : ''} style={{ animationDelay: `${w * 0.12}s` }}>W{w + 1}</i>)}
    </div>
    <p className="grow-note"><b>Six lessons in.</b> Same tutor, same time each week, and a lot more confidence.</p>
  </div>,
]

const HowItWorks = () => {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  return (
    <section id="how">
      <div className="wrap">
        <div className="sec-head">
          <h2>From your first message to their first “oh, I get it!”</h2>
        </div>
        <div className={`how-grid${paused ? ' paused' : ''}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="steps" role="tablist" aria-label="How it works">
            {steps.map((s, n) => (
              <button key={s.title} role="tab" aria-selected={n === i} aria-controls="how-stage" onClick={() => setI(n)}>
                <span className="num">{n + 1}</span>
                <b>{s.title}</b>
                <span className="d">{s.text}</span>
                {/* the bar's animation drives auto-advance, so pausing it (hover, reduced motion) pauses the steps too */}
                {n === i && <span className="bar"><i key={i} onAnimationEnd={() => setI((i + 1) % steps.length)} /></span>}
              </button>
            ))}
          </div>
          <div className="stage" role="tabpanel" id="how-stage">
            <div key={i} className="swap">{scenes[i]}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
