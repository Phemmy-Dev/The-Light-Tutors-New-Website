import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PiListBold, PiXBold, PiArrowRightBold, PiWhatsappLogoDuotone, PiEnvelopeSimpleDuotone } from 'react-icons/pi'
import Logo from '../../assets/images/Logo.png'
import menu from '../menuitems.json'
import { WHATSAPP } from './links'

const links = menu.filter(item => item.path !== '/' && item.path !== '/become-a-tutor')

// One-line hints under each link in the mobile menu
const hints = {
  '/about': 'Our story and what guides us',
  '/meet-our-team': 'The tutors your child will learn with',
  '/csr': 'Projects in our community',
  '/blog': 'Advice for parents',
  '/frequently-asked-questions': 'Questions parents ask us',
  '/become-a-tutor': 'Join our teaching team',
}

const SiteNav = () => {
  const [open, setOpen] = useState(false)

  // While the menu is open: stop the page behind from scrolling, and let Escape close it
  useEffect(() => {
    if (!open) return
    const close = e => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', close)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', close)
    }
  }, [open])

  // The menu sits beside the header, not inside it: the header's blur would trap the fixed panel inside its own box
  return (
    <>
    <header className="nav">
      <div className="wrap nav-row">
        <Link to="/" className="nav-logo" aria-label="The Light Tutors home"><img src={Logo} alt="The Light Tutors" /></Link>
        <ul className="nav-links">
          {links.map(item => <li key={item.path}><NavLink to={item.path}>{item.title}</NavLink></li>)}
        </ul>
        <div className="nav-cta">
          <Link className="tutor-link" to="/become-a-tutor">Become a tutor</Link>
          <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Book a free lesson</a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <PiXBold /> : <PiListBold />}
          </button>
        </div>
      </div>
    </header>
      {open && (
        <nav className="mobile-menu" id="mobile-menu" aria-label="Main menu">
          <div className="wrap">
            <ul>
              {[...links, { title: 'Become a tutor', path: '/become-a-tutor' }].map((item, i) => (
                <li key={item.path} style={{ '--i': i }}>
                  <NavLink to={item.path} onClick={() => setOpen(false)}>
                    <span><b>{item.title}</b><small>{hints[item.path]}</small></span>
                    <PiArrowRightBold aria-hidden="true" />
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="menu-card">
              <p className="menu-card-title">Your child’s first lesson is free.</p>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Book a free lesson <PiArrowRightBold /></a>
              <p className="contact-line"><PiWhatsappLogoDuotone aria-hidden="true" />+234-8153418503</p>
              <p className="contact-line"><PiEnvelopeSimpleDuotone aria-hidden="true" />thelightutorsltd@gmail.com</p>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

export default SiteNav
