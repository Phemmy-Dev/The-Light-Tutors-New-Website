import { useState } from 'react'
import PropTypes from 'prop-types'
import { PiArrowRightBold, PiCheckCircleFill, PiWarningCircleFill } from 'react-icons/pi'

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyVJaJAeRlKMkLVBvTDDjCnL6POBQBAklJrI2gilR24V7xYU-6bMWIDuvpqbwZuZsfL/exec'

// Email sign-up that writes to the team's Google Sheet; `source` says which page it came from.
const Newsletter = ({ source, title = 'Get our best advice for parents', text = 'Tips on exams, homework and confidence, from our tutors to your inbox.' }) => {
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setBusy(true)
    setStatus(null)
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Subscription error:', error)
      setStatus('error')
    } finally {
      setBusy(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <div className="newsletter">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div>
        <form onSubmit={subscribe}>
          <label htmlFor={`nl-${source}`} className="sr-only">Email address</label>
          <input id={`nl-${source}`} type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required disabled={busy} />
          <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? 'Subscribing…' : <>Subscribe <PiArrowRightBold /></>}</button>
        </form>
        <p className="nl-status" role="status">
          {status === 'success' && <><PiCheckCircleFill /> Thank you. You’re on the list.</>}
          {status === 'error' && <><PiWarningCircleFill /> Something went wrong. Please try again.</>}
        </p>
      </div>
    </div>
  )
}

Newsletter.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Newsletter
