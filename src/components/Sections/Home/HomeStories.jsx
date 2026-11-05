import { useState } from 'react'

const stories = [
  { short: 'As and Bs in Maths and Physics!', tag: 'GCSE', text: "Femi did exceptionally well in his GCSEs, with As and Bs in Maths and Physics. Teacher Daniel has been a pillar of support throughout. We're excited to continue with him for A-Levels.", outcome: 'As & Bs at GCSE', name: 'Mrs Soyoye', role: 'Parent of Femi' },
  { short: 'Moved from the bottom set to the top.', tag: 'Set 5 → 1', text: 'Omolade was moved from set 5, the lowest set, to set 1 in science. Thank you so much for helping her achieve this and for being a wonderful teacher.', outcome: 'Set 5 → Set 1', name: 'Miss Tade', role: 'Parent of Omolade' },
  { short: 'Atinu passed the cutoff mark.', tag: 'Entrance', text: "Atinu passed the cutoff mark! Thank you to The Light Tutors team for your consistent support and dedication. We couldn't have done it without you.", outcome: 'Passed the cutoff', name: 'Parent of Atinu', role: 'Entrance exam preparation' },
  { short: 'Finally, a platform worth recommending.', tag: 'Parent', text: 'I was waiting for a personal recommendation before choosing an online tutor. My uncle reassured me it was a good decision because his son was so impressed. A big thanks to TLT for their competent, dedicated and friendly tutors.', outcome: 'Trusted choice', name: 'Mrs Ottun', role: 'Parent' },
  { short: 'My GCSEs felt like a breeze.', tag: 'Student', text: 'The GCSE preparations were smooth, stress-free and truly enjoyable thanks to the incredible teachers. Huge thanks to Obasa, Noah and Mr Seyi. A 10/10 experience.', outcome: '10/10 experience', name: 'A Light Tutors student', role: 'GCSE preparation' },
]

const HomeStories = () => {
  const [i, setI] = useState(0)
  const s = stories[i]

  return (
    <section id="stories">
      <div className="wrap">
        <div className="sec-head">
          <h2>What parents tell us</h2>
          <p>Real messages from our families, who we call the Light Guardians.</p>
        </div>
        <div className="story-grid">
          <div className="story-main">
            <div className="mark" aria-hidden="true">“</div>
            <div key={i} className="swap" aria-live="polite">
              <blockquote>{s.text}</blockquote>
              <div className="who"><span className="outcome">{s.outcome}</span><p><b>{s.name}</b>{s.role}</p></div>
            </div>
          </div>
          <ul className="story-list">
            {stories.map((st, n) => (
              <li key={st.name}>
                <button aria-pressed={n === i} onClick={() => setI(n)}><span className="q">“{st.short}”</span><span className="o">{st.tag}</span></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeStories
