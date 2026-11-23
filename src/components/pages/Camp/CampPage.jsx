import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../../Layout/PageLayout'
import './Camp.css'

// Fill these in as the details arrive. While a value is null the page shows a numbered yellow placeholder,
// which disappears as soon as the value is set. The numbers match the placeholder list we agreed.
const CAMP = {
  start: Date.UTC(2026, 11, 22, 10, 0), // Tue 22 Dec 2026, 11:00 AM WAT (10:00 UTC)
  hours: 2, // 11:00 AM to 1:00 PM WAT
  formUrl: 'https://forms.gle/jdf1GNBgTgvrazJG7', // 1. Google registration form
  ages: '5–14', // 2.
  endTime: '1:00 PM WAT', // 5.
  // The livestream link is shared in the WhatsApp community after registering, so it isn't on the page.
  guides: null, // 6. optional: [{ name: 'Ada Obi', session: 'Kitchen Lab', img: importedPhoto }]. The section shows once set.
  pastCamps: null, // 7. optional: { headline: '…', photos: [importedPhoto, …] }. The section shows once set.
  deadline: 'Monday 21 December', // 8.
  closes: Date.UTC(2026, 11, 21, 23, 0), // buttons switch to "Registration closed" from 00:00 WAT on Tue 22 Dec
  replay: true, // 8. the recording stays on YouTube afterwards
}

// The camp's own playful heading font, loaded on this page only
const FONT_URL = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@500..700&display=swap'

const PLACES = [
  ['My time', null], ['Nigeria', 'Africa/Lagos'], ['UK', 'Europe/London'], ['Canada (Toronto)', 'America/Toronto'],
  ['Ghana', 'Africa/Accra'], ['Saudi Arabia', 'Asia/Riyadh'], ['USA (New York)', 'America/New_York'],
]
const BADGES = { food: { icon: '🍞', name: 'Food Science', c: '#ff9a3d' }, mind: { icon: '💙', name: 'Psychology', c: '#4aa3ff' }, aid: { icon: '🩹', name: 'First Aid', c: '#ff6b6b' } }
const FROSTY_LINES = [
  'Did you know? Snowflakes always have six sides!',
  'At LifeQuest we’ll find out why onions make us cry 🧅',
  'Kindness is a superpower. Use it daily!',
  'Brrr! Good thing the camp is online and cosy.',
  'Psst… there are 3 badges to win below!',
  'I wear goggles because science is serious fun.',
]
const FEELINGS = [
  ['happy', '😄', 'Happy', 'Happy!', 'Notice what made you smile today. Sharing it can make someone else happy too.'],
  ['sad', '😢', 'Sad', 'Sad is OK.', 'Talking to someone you trust, or a big hug, can help the feeling get smaller.'],
  ['cross', '😠', 'Cross', 'Feeling cross?', 'Try “dragon breaths”: breathe in slowly for 4, then blow out like a dragon.'],
  ['nervous', '😬', 'Nervous', 'A bit nervous?', 'Butterflies mean your brain is getting ready for something new. That’s brave!'],
]
const AID_OPTIONS = [['Laugh and keep playing', false], ['Stay calm and tell a grown-up', true], ['Run home without saying anything', false]]
const YEAST_LABELS = ['Add a pinch of yeast', 'Add some more!', 'Keep going…', 'One more pinch!', 'Bread risen! 🍞']

const still = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const store = {
  get: (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d } catch { return d } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch { /* private mode: progress just isn't saved */ } },
}
const pad = n => String(n).padStart(2, '0')
const myZone = () => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone } catch { return 'Africa/Lagos' } }
// Camp start time as seen in a time zone
const timeIn = tz => {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: 'numeric', minute: '2-digit', hourCycle: 'h23', weekday: 'long', day: 'numeric', month: 'long' }).formatToParts(CAMP.start).map(x => [x.type, x.value]))
  const h = +p.hour, m = +p.minute
  return { h, m, label: `${(h % 12) || 12}:${pad(m)} ${h < 12 ? 'AM' : 'PM'}`, day: `${p.weekday} ${p.day} ${p.month}` }
}

const Todo = ({ n, children }) => <span className="lq-todo"><b>{n}</b>{children}</span>
Todo.propTypes = { n: PropTypes.number.isRequired, children: PropTypes.node }

// The page re-renders every second for the countdown, so this flips on time without a reload
const Register = ({ children, className = 'lq-btn' }) => Date.now() >= CAMP.closes
  ? <span className={`${className} closed`} aria-disabled="true">Registration closed</span>
  : CAMP.formUrl
  ? <a className={className} href={CAMP.formUrl} target="_blank" rel="noopener noreferrer">{children}</a>
  : <a className={className} href="#how-to-join">{children} <Todo n={1}>form link</Todo></a>
Register.propTypes = { children: PropTypes.node, className: PropTypes.string }

const Frosty = () => (
  <svg viewBox="0 0 220 260" aria-hidden="true">
    <defs><radialGradient id="lq-shade" cx="35%" cy="30%" r="75%"><stop offset="60%" stopColor="#fff" stopOpacity="0" /><stop offset="100%" stopColor="#9cc6ff" stopOpacity=".6" /></radialGradient></defs>
    <ellipse cx="110" cy="250" rx="70" ry="8" fill="rgba(0,0,0,.25)" />
    <circle cx="110" cy="190" r="62" fill="#fff" /><circle cx="110" cy="190" r="62" fill="url(#lq-shade)" />
    <circle cx="110" cy="96" r="50" fill="#fff" /><circle cx="110" cy="96" r="50" fill="url(#lq-shade)" />
    <path d="M58 78 Q110 64 162 78" stroke="#16120f" strokeWidth="6" fill="none" />
    <circle cx="88" cy="84" r="17" fill="#cfeaff" stroke="#ff7300" strokeWidth="6" />
    <circle cx="132" cy="84" r="17" fill="#cfeaff" stroke="#ff7300" strokeWidth="6" />
    <rect x="103" y="80" width="14" height="6" rx="3" fill="#ff7300" />
    <circle className="eye" cx="90" cy="86" r="6" fill="#16120f" /><circle className="eye" cx="130" cy="86" r="6" fill="#16120f" />
    <circle cx="92" cy="83" r="2" fill="#fff" /><circle cx="132" cy="83" r="2" fill="#fff" />
    <path d="M110 100 L140 108 L110 112 Z" fill="#ff7300" />
    <path d="M92 120 Q110 132 128 120" stroke="#16120f" strokeWidth="4" fill="none" strokeLinecap="round" />
    <circle cx="76" cy="112" r="7" fill="#ff9fd9" opacity=".7" /><circle cx="144" cy="112" r="7" fill="#ff9fd9" opacity=".7" />
    <path d="M66 136 Q110 156 154 136 L156 152 Q110 172 64 152 Z" fill="#ff7300" />
    <path d="M132 150 L150 200 L132 204 L120 156 Z" fill="#ff7300" />
    <path d="M80 142 L84 158 M100 147 L102 163 M120 147 L118 163 M140 142 L136 158" stroke="#ffd600" strokeWidth="4" />
    <circle cx="110" cy="182" r="6" fill="#007bff" /><circle cx="110" cy="204" r="6" fill="#04bf09" /><circle cx="110" cy="226" r="6" fill="#ff4fcb" />
    <path d="M52 176 L18 150 M30 159 L22 140" stroke="#7a4a1d" strokeWidth="6" strokeLinecap="round" />
    <path d="M168 176 L200 146" stroke="#7a4a1d" strokeWidth="6" strokeLinecap="round" />
    <path d="M182 124 h18 M185 124 v16 l-10 22 a5 5 0 0 0 4.5 7 h23 a5 5 0 0 0 4.5 -7 l-10 -22 v-16" fill="#e9fffd" stroke="#16120f" strokeWidth="3.5" strokeLinejoin="round" />
    <path d="M182 150 h22 l6 12 a3 3 0 0 1 -3 4 h-28 a3 3 0 0 1 -3 -4 Z" fill="#00d4c7" />
  </svg>
)

const Hills = ({ bottom = '#f7fbff' }) => (
  <svg className="lq-hills" viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 90 C200 30 380 40 560 80 C760 125 920 50 1120 60 C1280 68 1370 100 1440 90 V150 H0 Z" fill="#dcecff" />
    <path d="M0 115 C240 70 420 90 640 110 C860 130 1040 85 1240 95 C1340 100 1400 112 1440 110 V150 H0 Z" fill={bottom} />
  </svg>
)
Hills.propTypes = { bottom: PropTypes.string }

const CampPage = () => {
  const [now, setNow] = useState(Date.now())
  const [caught, setCaught] = useState(0)
  const [bubble, setBubble] = useState({ text: 'Hi! I’m Frosty. Tap me, or catch some snowflakes!', n: 0 })
  const [soundOn, setSoundOn] = useState(() => store.get('lq-sound', true))
  const [badges, setBadges] = useState(() => store.get('lq-badges', []))
  const [rise, setRise] = useState(0)
  const [bubbles, setBubbles] = useState([])
  const [feeling, setFeeling] = useState(null)
  const [aidPicked, setAidPicked] = useState({})
  const [kidName, setKidName] = useState(() => store.get('lq-name', ''))
  const [place, setPlace] = useState('My time')
  const snowRef = useRef(null)
  const confettiRef = useRef(null)
  const audio = useRef(null)
  const lineIdx = useRef(0)
  const onCatch = useRef(null)

  const say = text => setBubble(b => ({ text, n: b.n + 1 }))
  const beep = notes => {
    if (!soundOn) return
    try {
      audio.current = audio.current || new (window.AudioContext || window.webkitAudioContext)()
      const ctx = audio.current
      notes.forEach((f, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain(), at = ctx.currentTime + i * .09
        o.type = 'triangle'; o.frequency.value = f
        g.gain.setValueAtTime(.0001, at); g.gain.exponentialRampToValueAtTime(.18, at + .02); g.gain.exponentialRampToValueAtTime(.0001, at + .25)
        o.connect(g).connect(ctx.destination); o.start(at); o.stop(at + .3)
      })
    } catch { /* no audio support: stay silent */ }
  }

  // page-only font
  useEffect(() => {
    if (document.querySelector(`link[href="${FONT_URL}"]`)) return
    const link = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: FONT_URL })
    document.head.appendChild(link)
  }, [])

  // countdown clock
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t) }, [])

  // catchable snow in the hero
  onCatch.current = () => {
    setCaught(c => {
      const next = c + 1
      if (next === 5) say('Wow, 5 snowflakes! You’re a natural explorer.')
      if (next === 15) say('15 snowflakes! Snowflake champion! 🏆')
      return next
    })
    beep([880 + caught * 10])
  }
  useEffect(() => {
    const c = snowRef.current, ctx = c.getContext('2d'), calm = still()
    let flakes = [], sparks = [], raf
    const mk = (w, h, anywhere) => ({ x: Math.random() * w, y: anywhere ? Math.random() * h : -10, r: 2 + Math.random() * 4, v: .3 + Math.random() * .8, a: Math.random() * 6.28 })
    const size = () => {
      const r = c.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2)
      c.width = r.width * dpr; c.height = r.height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      flakes = Array.from({ length: Math.round(r.width / 16) }, () => mk(r.width, r.height, true))
    }
    const flake = f => {
      ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.a); ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = Math.max(1, f.r / 3)
      for (let i = 0; i < 6; i++) { ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, f.r * 1.6); ctx.stroke() }
      ctx.restore()
    }
    const draw = () => {
      const w = c.clientWidth, h = c.clientHeight
      ctx.clearRect(0, 0, w, h)
      for (const f of flakes) {
        if (!calm) { f.y += f.v; f.a += .01; f.x += Math.sin(f.a) * .4; if (f.y > h + 10) Object.assign(f, mk(w, h)) }
        flake(f)
      }
      sparks = sparks.filter(s => (s.t -= 1) > 0)
      for (const s of sparks) { ctx.fillStyle = `rgba(255,214,0,${s.t / 30})`; ctx.beginPath(); ctx.arc(s.x + s.dx * (30 - s.t), s.y + s.dy * (30 - s.t), 2.5, 0, 6.28); ctx.fill() }
      if (!calm || sparks.length) raf = requestAnimationFrame(draw)
    }
    const tap = e => {
      const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top
      let best = -1, bd = 46 // generous target: flakes are small and moving
      flakes.forEach((f, i) => { const d = Math.hypot(f.x - x, f.y - y); if (d < bd) { bd = d; best = i } })
      if (best < 0) return
      const f = flakes[best]
      for (let i = 0; i < 10; i++) { const a = i / 10 * 6.28; sparks.push({ x: f.x, y: f.y, dx: Math.cos(a) * 1.5, dy: Math.sin(a) * 1.5, t: 30 }) }
      Object.assign(f, mk(c.clientWidth, c.clientHeight))
      onCatch.current()
      if (calm) { cancelAnimationFrame(raf); draw() }
    }
    const resize = () => { size(); if (calm) draw() }
    // light the cursor up while it's over a catchable flake
    const hover = e => {
      const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top
      c.classList.toggle('near', flakes.some(f => Math.hypot(f.x - x, f.y - y) < 46))
    }
    size(); draw()
    c.addEventListener('pointerdown', tap)
    c.addEventListener('pointermove', hover)
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); c.removeEventListener('pointerdown', tap); c.removeEventListener('pointermove', hover); window.removeEventListener('resize', resize) }
  }, [])

  const confetti = () => {
    if (still()) return
    const cv = confettiRef.current, cx = cv.getContext('2d'), dpr = Math.min(window.devicePixelRatio || 1, 2), W = window.innerWidth, H = window.innerHeight
    cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const cols = ['#ff7300', '#ffd600', '#007bff', '#04bf09', '#ff4fcb', '#00d4c7']
    let ps = Array.from({ length: 160 }, () => ({ x: W / 2, y: H * .6, vx: (Math.random() - .5) * 16, vy: -8 - Math.random() * 10, s: 5 + Math.random() * 6, c: cols[Math.random() * 6 | 0], r: Math.random() * 6, life: 120 + Math.random() * 60 }))
    const step = () => {
      cx.clearRect(0, 0, W, H)
      ps = ps.filter(p => (p.life -= 1) > 0)
      for (const p of ps) { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += .2; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); cx.restore() }
      if (ps.length) requestAnimationFrame(step)
    }
    step()
  }

  const award = k => {
    if (badges.includes(k)) return
    const next = [...badges, k]
    setBadges(next); store.set('lq-badges', next)
    beep([523, 659, 784])
    if (next.length === 3) { setTimeout(() => beep([523, 659, 784, 1047]), 350); confetti(); say('You did it! You’re a Junior LifeQuester! 🎉') }
  }

  const addYeast = () => {
    const r = Math.min(rise + 1, 4)
    setRise(r)
    const id = Date.now()
    setBubbles(b => [...b, ...Array.from({ length: 5 }, (_, i) => ({ id: `${id}-${i}`, left: 30 + Math.random() * 40, delay: i * .12 }))])
    setTimeout(() => setBubbles(b => b.filter(x => !x.id.startsWith(String(id)))), 2000)
    beep([300 + r * 80])
    if (r === 4) award('food')
  }

  // countdown + event state
  const left = Math.max(0, Math.floor((CAMP.start - now) / 1000))
  const end = CAMP.start + CAMP.hours * 3600e3
  const live = now >= CAMP.start && now < end
  const ended = now >= end
  const zone = PLACES.find(p => p[0] === place)[1] || myZone()
  const shown = timeIn(zone)
  const mine = timeIn(myZone())
  const done = badges.length === 3

  return (
    <PageLayout className="lq" title="LifeQuest! Winter Camp 2026" description="A free one-day virtual winter camp for children, live on YouTube on Tuesday 22 December 2026: kitchen science, feelings and first aid. Every child is welcome.">
      {/* HERO */}
      <section className="lq-hero" aria-labelledby="lq-title">
        <div className="lq-aurora" aria-hidden="true" />
        <div className="lq-stars" aria-hidden="true" />
        <canvas ref={snowRef} aria-label="Falling snow. Tap a snowflake to catch it." />
        <div className="wrap lq-hero-grid">
          <div className="lq-hero-copy">
            <div className="lq-chips">
              <span className="lq-chip free">100% free</span>
              <span className="lq-chip">Live on YouTube</span>
              <span className="lq-chip">Every child welcome</span>
              <span className="lq-chip">Ages {CAMP.ages || <Todo n={2}>?–?</Todo>}</span>
            </div>
            <h1 className="lq-title" id="lq-title" aria-label="TLT Winter Camp 2026: LifeQuest!">
              <small>TLT Winter Camp 2026</small>
              <span aria-hidden="true">{[...'LifeQuest'].map((ch, i) => <span className="l" style={{ '--i': i }} key={i}>{ch}</span>)}</span>
              <span className="bang" aria-hidden="true">!</span>
            </h1>
            <p className="lq-lede">One magical holiday morning. <b>Kitchen science</b>, <b>feelings detective work</b> and <b>lifesaver skills</b>, live from wherever you are in the world.</p>
            <div className="lq-actions">
              <Register>Join the quest</Register>
              <a className="lq-btn alt" href="#quest">Play the quest first</a>
            </div>
            <p className="lq-hint">❄ Tap the falling snow to catch it! <span>Caught: <b>{caught}</b></span></p>
          </div>
          <div className="lq-buddy-zone">
            <div className="lq-bubble pop" key={bubble.n} aria-live="polite">{bubble.text}</div>
            <button className="lq-buddy" aria-label="Frosty the snow buddy. Tap for a fun fact." onClick={() => { say(FROSTY_LINES[lineIdx.current++ % FROSTY_LINES.length]); beep([523, 784]) }}>
              <Frosty />
            </button>
          </div>
        </div>
        <Hills />
      </section>

      {/* TICKET */}
      <div className="lq-ticket-strip"><div className="wrap">
        <div className="lq-ticket">
          <div className="lq-cal" aria-hidden="true"><span>DEC</span><b>22</b></div>
          <div className="lq-ticket-info">
            <h3>Tuesday, 22 December 2026</h3>
            <p>11:00 AM WAT · ends {CAMP.endTime || <Todo n={5}>time?</Todo>} · streamed live on YouTube</p>
            <p className="mine">That’s {mine.label} on {mine.day} where you are.</p>
          </div>
          {live ? <p className="lq-live">We’re live now! Find the livestream link in the WhatsApp community.</p>
            : ended ? <p className="lq-live">Thanks for joining LifeQuest 2026! See you at the next camp.</p>
              : (
                <div className="lq-count" aria-label="Countdown to camp">
                  {[['Days', Math.floor(left / 86400)], ['Hours', Math.floor(left % 86400 / 3600)], ['Mins', Math.floor(left % 3600 / 60)], ['Secs', left % 60]].map(([l, v]) => (
                    <div key={l}><b>{pad(v)}</b><small>{l}</small></div>
                  ))}
                </div>
              )}
        </div>
      </div></div>

      {/* QUEST */}
      <section className="lq-sec lq-map-sec" id="quest" aria-labelledby="lq-quest-title">
        <div className="wrap">
          <div className="lq-head center">
            <span className="lq-sticker blue">Try it now</span>
            <h2 id="lq-quest-title">Warm up for the quest!</h2>
            <p>Three stops, three mini-challenges. Win all three badges to unlock your LifeQuest certificate. At camp, the real adventure is even bigger.</p>
          </div>

          <div className="lq-passport" aria-label="Quest passport">
            <div className="lq-passport-label lq-fun">Quest Passport <small>{done ? 'All badges collected! Certificate unlocked 🎉' : `${badges.length} of 3 badges collected`}</small></div>
            <div className="lq-slots">
              {Object.entries(BADGES).map(([k, b]) => (
                <span key={k} className={`lq-slot${badges.includes(k) ? ' got' : ''}`} style={{ '--c': b.c }} aria-label={`${b.name} badge, ${badges.includes(k) ? 'earned' : 'not yet earned'}`}>{b.icon}</span>
              ))}
            </div>
            <button className="lq-sound" aria-pressed={soundOn} aria-label={soundOn ? 'Sound effects on' : 'Sound effects off'} onClick={() => { setSoundOn(!soundOn); store.set('lq-sound', !soundOn) }}>{soundOn ? '🔊' : '🔈'}</button>
          </div>

          <div className="lq-map">
            <svg className="lq-map-path" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true"><path d="M60 40 C200 120 300 0 500 50 S800 120 940 30" fill="none" stroke="#9cc6ff" strokeWidth="5" strokeDasharray="4 14" strokeLinecap="round" /></svg>

            <article className="lq-stop food">
              <div className="lq-stop-top"><div className="lq-medal" aria-hidden="true">🍞</div><div><span className="lq-stop-num">Stop 1 · Food Science</span><h3>Kitchen Lab</h3></div></div>
              <p>Science isn’t only in labs. It’s bubbling away in your kitchen.</p>
              <div className="lq-game">
                <h4>Make the bread rise!</h4>
                <div className="lq-oven">
                  <div className="lq-dough" style={{ width: 90 + rise * 26, height: 46 + rise * 18 }} />
                  {bubbles.map(b => <span key={b.id} className="lq-bub" style={{ left: `${b.left}%`, animationDelay: `${b.delay}s` }} />)}
                </div>
                <div className="lq-meter" aria-hidden="true"><i style={{ width: `${rise * 25}%` }} /></div>
                <button className="lq-play" onClick={addYeast} disabled={rise === 4}>{YEAST_LABELS[rise]}</button>
                {rise === 4 && <p className="lq-done"><b>Puffy! 🎉</b> Yeast munches sugar and burps out gas bubbles. The bubbles get trapped and make the dough rise.</p>}
              </div>
            </article>

            <article className="lq-stop mind">
              <div className="lq-stop-top"><div className="lq-medal" aria-hidden="true">💙</div><div><span className="lq-stop-num">Stop 2 · Psychology</span><h3>Feelings Detective</h3></div></div>
              <p>Why do we feel the way we feel? Let’s investigate.</p>
              <div className="lq-game">
                <h4>How are you feeling today?</h4>
                <div className="lq-faces" role="group" aria-label="Pick a feeling">
                  {FEELINGS.map(([k, face, label]) => (
                    <button key={k} className="lq-face" aria-pressed={feeling === k} aria-label={label} onClick={() => { setFeeling(k); beep([587]); award('mind') }}>{face}</button>
                  ))}
                </div>
                <p className="lq-tip">{feeling
                  ? (([, , , bold, text]) => <><b>{bold}</b> {text}</>)(FEELINGS.find(f => f[0] === feeling))
                  : 'Tap a face. Every feeling is allowed!'}</p>
              </div>
            </article>

            <article className="lq-stop aid">
              <div className="lq-stop-top"><div className="lq-medal" aria-hidden="true">🩹</div><div><span className="lq-stop-num">Stop 3 · First Aid</span><h3>Little Lifesaver</h3></div></div>
              <p>Brave helpers know what to do, and when to get help.</p>
              <div className="lq-game">
                <h4>What would you do?</h4>
                <p className="lq-scene">Your friend trips at the park and hurts their knee. It’s bleeding a little. What’s the <b>first</b> thing you do?</p>
                <div className="lq-opts">
                  {AID_OPTIONS.map(([text, ok], i) => (
                    <button key={text} className={`lq-opt${aidPicked[i] ? (ok ? ' right' : ' wrong') : ''}`}
                      onClick={() => { setAidPicked(p => ({ ...p, [i]: (p[i] || 0) + 1 })); if (ok) award('aid'); else beep([200]) }}>{text}</button>
                  ))}
                </div>
                {aidPicked[1] && <p className="lq-done"><b>Lifesaver move! ⭐</b> Staying calm and getting a grown-up is always step one. At camp you’ll learn what happens next.</p>}
              </div>
            </article>
          </div>

          <div className="lq-finish" aria-labelledby="lq-finish-title">
            <div className="lq-finish-copy">
              <span className="lq-sticker pink">Your reward</span>
              <h3 id="lq-finish-title">Collect all 3 badges to unlock your certificate</h3>
              <p>Type your name, finish the challenges, and watch it light up. Then ask a grown-up to sign you up for the real thing.</p>
              <div className="lq-name">
                <label htmlFor="lq-kid-name">Your first name</label>
                <input id="lq-kid-name" maxLength={24} placeholder="e.g. Amara" autoComplete="off" value={kidName} onChange={e => { setKidName(e.target.value); store.set('lq-name', e.target.value) }} />
              </div>
              <Register>Ask a grown-up to register me</Register>
            </div>
            <div>
              <div className={`lq-cert${done ? '' : ' locked'}`}>
                <div className="lq-seal">TLT<br />2026</div>
                <small>This certifies that</small>
                <div className="lq-cert-who">{kidName.trim() || 'Your name'}</div>
                <div className="lq-cert-ttl">is a Junior LifeQuester</div>
                <div className="lq-cert-badges">{Object.entries(BADGES).map(([k, b]) => badges.includes(k) ? b.icon : '🔒').join('')}</div>
                <small>LifeQuest · Winter Camp 2026</small>
              </div>
              <p className="lq-lock">{done ? '✨ Unlocked! Show a grown-up your certificate.' : `🔒 Locked: collect ${3 - badges.length} more badge${3 - badges.length === 1 ? '' : 's'}`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="lq-sec" id="how-to-join" aria-labelledby="lq-join-title">
        <div className="wrap">
          <div className="lq-head center">
            <span className="lq-sticker">Grown-ups, this bit’s for you</span>
            <h2 id="lq-join-title">Three steps to camp</h2>
          </div>
          <ol className="lq-trail">
            <li><span className="n">1</span><h3>Register</h3><p>A two-minute form: your child’s name and age, your contact details, and your consent.</p></li>
            <li><span className="n">2</span><h3>Join the WhatsApp community</h3><p>You’ll get the link after registering, for reminders and the livestream link.</p></li>
            <li><span className="n">3</span><h3>Watch live on YouTube</h3><p>On 22 December, open the livestream link we share in the WhatsApp community and join in from home. No account needed.</p></li>
          </ol>
        </div>
      </section>

      {/* TIME MACHINE */}
      <section className="lq-sec lq-time" aria-labelledby="lq-time-title">
        <div className="wrap">
          <div className="lq-head">
            <span className="lq-sticker teal">Time machine</span>
            <h2 id="lq-time-title">What time is LifeQuest for you?</h2>
            <p>We’re live around the world at the same moment. Tap where you are.</p>
          </div>
          <div className="lq-time-grid">
            <svg className="lq-clock" viewBox="0 0 200 200" role="img" aria-label={`Clock showing ${shown.label}`}>
              <circle cx="100" cy="100" r="94" fill="#fff" stroke="#ffd600" strokeWidth="8" />
              {Array.from({ length: 12 }, (_, i) => {
                const a = i * Math.PI / 6, r1 = i % 3 ? 80 : 74
                return <line key={i} x1={100 + Math.sin(a) * r1} y1={100 - Math.cos(a) * r1} x2={100 + Math.sin(a) * 86} y2={100 - Math.cos(a) * 86} stroke="#16120f" strokeWidth={i % 3 ? 2 : 4} strokeLinecap="round" />
              })}
              <line className="hand" x1="100" y1="100" x2="100" y2="58" stroke="#16120f" strokeWidth="8" strokeLinecap="round" style={{ transform: `rotate(${(shown.h % 12) * 30 + shown.m / 2}deg)` }} />
              <line className="hand" x1="100" y1="100" x2="100" y2="30" stroke="#ff7300" strokeWidth="5" strokeLinecap="round" style={{ transform: `rotate(${shown.m * 6}deg)` }} />
              <circle cx="100" cy="100" r="7" fill="#007bff" />
              <text x="100" y="140" textAnchor="middle" fontSize="24">{shown.h >= 6 && shown.h < 18 ? '☀️' : '🌙'}</text>
            </svg>
            <div className="lq-time-panel">
              <div className="lq-big-time">{shown.label}</div>
              <div className="lq-where">{shown.day}<small>{place === 'My time' ? `Your time (${zone.split('/').pop().replace(/_/g, ' ')})` : place}</small></div>
              <div className="lq-places" role="group" aria-label="Choose a place">
                {PLACES.map(([label]) => <button key={label} className="lq-place" aria-pressed={place === label} onClick={() => { setPlace(label); beep([700]) }}>{label}</button>)}
              </div>
              <p className="lq-time-note">All times are for the same moment: Tuesday 22 December 2026, 11:00 AM in Nigeria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GROWN-UPS */}
      <section className="lq-sec" aria-labelledby="lq-grown-title">
        <div className="wrap">
          <div className="lq-head center">
            <span className="lq-sticker blue">Why grown-ups love it</span>
            <h2 id="lq-grown-title">Fun for them. Worth it for you.</h2>
          </div>
          <div className="lq-grown">
            <div><span className="ico" aria-hidden="true">🛡️</span><h3>Safe and structured</h3><p>Age-appropriate sessions, consent collected at sign-up, and a moderated parents’ community.</p></div>
            <div><span className="ico" aria-hidden="true">🧠</span><h3>Skills for real life</h3><p>Practical things most children don’t meet in a normal school term.</p></div>
            <div><span className="ico" aria-hidden="true">🌍</span><h3>Every child welcome</h3><p>TLT students, siblings, friends and newcomers from any country.</p></div>
            <div><span className="ico" aria-hidden="true">🎁</span><h3>Completely free</h3><p>No fees and no catch. A holiday morning of discovery from The Light Tutors.</p></div>
          </div>
        </div>
      </section>

      {/* OPTIONAL: guides + past camps. Hidden until CAMP.guides or CAMP.pastCamps is set. */}
      {(CAMP.guides || CAMP.pastCamps) && <section className="lq-sec" style={{ paddingTop: 0 }} aria-label="Guides and past camps">
        <div className="wrap lq-two">
          {CAMP.guides && <div className="lq-panel">
            <h3>Meet your quest guides</h3>
            <p>The friendly faces leading each stop.</p>
            <div className="lq-guides">
              {(CAMP.guides || ['Kitchen Lab', 'Feelings', 'Lifesaver'].map(session => ({ session }))).map(g => (
                <div className="lq-guide" key={g.session}>
                  {g.img ? <img src={g.img} alt={g.name} /> : <div className="lq-todo-box">Photo</div>}
                  {g.name ? <span><b>{g.name}</b><br />{g.session}</span> : <Todo n={6}>Name · {g.session}</Todo>}
                </div>
              ))}
            </div>
          </div>}
          {CAMP.pastCamps && <div className="lq-panel">
            <h3>Snapshots from past camps</h3>
            <p>{CAMP.pastCamps?.headline || <Todo n={7}>e.g. “300 children from 6 countries joined our Summer Camp”</Todo>}</p>
            <div className="lq-gallery">
              {(CAMP.pastCamps?.photos || [null, null, null]).map((src, i) => src ? <img key={i} src={src} alt="A moment from a past TLT camp" loading="lazy" /> : <div key={i} className="lq-todo-box"><Todo n={7}>Photo</Todo></div>)}
            </div>
          </div>}
        </div>
      </section>}

      {/* FAQ */}
      <section className="lq-sec" style={{ background: 'var(--lq-ice)' }} aria-labelledby="lq-faq-title">
        <div className="wrap">
          <div className="lq-head center"><span className="lq-sticker">Questions</span><h2 id="lq-faq-title">Snowball questions</h2></div>
          <div className="lq-faq">
            <details open><summary>Is it really free?</summary><p>Yes! LifeQuest is completely free for every child who registers.</p></details>
            <details><summary>What ages is it for?</summary><p>LifeQuest is designed for children aged {CAMP.ages || <Todo n={2}>?–?</Todo>}.</p></details>
            <details><summary>Does my child need to be a TLT student?</summary><p>Not at all. Every child is welcome, whether they learn with us or are discovering TLT for the first time.</p></details>
            <details><summary>Do we need a YouTube account?</summary><p>No. You just need the livestream link, which we share in the WhatsApp community before the day.</p></details>
            <details><summary>What if we miss it live?</summary><p>{CAMP.replay === null ? <Todo n={8}>Will the recording stay on YouTube afterwards?</Todo> : CAMP.replay ? 'No problem. The recording stays on our YouTube channel after the camp, so you can watch it any time.' : 'The camp is live only, so do join us on the day.'}</p></details>
            <details><summary>When does registration close?</summary><p>{CAMP.deadline ? `Registration closes on ${CAMP.deadline}.` : <Todo n={8}>Registration deadline</Todo>}</p></details>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="lq-sec lq-final" aria-labelledby="lq-final-title">
        <div className="wrap">
          <span className="lq-sticker">22 December · Live on YouTube</span>
          <h2 id="lq-final-title">Every child is welcome at <span>LifeQuest!</span></h2>
          <p>Grab your spot, join the community, and get ready for a morning of discovery. Frosty is waiting.</p>
          <Register>Join the quest</Register>
        </div>
        <Hills bottom="#ffffff" />
      </section>

      <canvas ref={confettiRef} className="lq-confetti" aria-hidden="true" />
    </PageLayout>
  )
}

export default CampPage
