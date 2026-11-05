import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PiListBold, PiXBold } from 'react-icons/pi'
import Logo from '../../assets/images/Logo.png'
import menu from '../menuitems.json'
import { WHATSAPP } from './links'

const links = menu.filter(item => item.path !== '/' && item.path !== '/become-a-tutor')

const SiteNav = () => {
  const [open, setOpen] = useState(false)

  return (
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
      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="wrap">
            <ul>
              {links.map(item => <li key={item.path}><Link to={item.path}>{item.title}</Link></li>)}
              <li><Link to="/become-a-tutor">Become a tutor</Link></li>
            </ul>
            <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Book a free lesson</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default SiteNav
