import { Link } from 'react-router-dom'
import { PiWhatsappLogoDuotone, PiEnvelopeSimpleDuotone, PiInstagramLogoBold, PiLinkedinLogoBold, PiXLogoBold } from 'react-icons/pi'
import Logo from '../../assets/images/Logo.png'

const SiteFooter = () => (
  <footer className="foot">
    <div className="wrap">
      <div className="foot-grid">
        <div className="foot-brand">
          <img src={Logo} alt="The Light Tutors" />
          <p>One-to-one online tutoring for children across the UK and Europe.</p>
          <div className="socials">
            <a href="https://www.instagram.com/thelightutors/" aria-label="Instagram"><PiInstagramLogoBold /></a>
            <a href="https://www.linkedin.com/company/the-light-tutors/posts/?feedView=all" aria-label="LinkedIn"><PiLinkedinLogoBold /></a>
            <a href="https://x.com/thelightutors" aria-label="X"><PiXLogoBold /></a>
          </div>
        </div>
        <div>
          <h4>Learn</h4>
          <ul>
            <li><a href="/#subjects">Subjects</a></li>
            <li><a href="/#how">How it works</a></li>
            <li><Link to="/meet-our-team">Our tutors</Link></li>
            <li><Link to="/frequently-asked-questions">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/csr">Our impact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/become-a-tutor">Become a tutor</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li className="contact-line"><PiWhatsappLogoDuotone />+234-8153418503</li>
            <li className="contact-line"><PiEnvelopeSimpleDuotone />thelightutorsltd@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="foot-base">
        <span>© {new Date().getFullYear()} The Light Tutors Limited. All rights reserved.</span>
        <nav aria-label="Legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/refund">Refunds</Link>
        </nav>
      </div>
    </div>
  </footer>
)

export default SiteFooter
