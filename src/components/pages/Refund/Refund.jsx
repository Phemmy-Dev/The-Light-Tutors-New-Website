import { Link } from 'react-router-dom'
import LegalPage from '../../Layout/LegalPage'

const Refund = () => (
  <LegalPage title="Refund Policy" description="The Light Tutors refund policy. The key refund terms are in our Terms and Conditions while the full policy is finalised.">
    <div className="notice">
      <span className="tag tag-orange">Coming soon</span>
      <h2>Full policy</h2>
      <p>
        Our detailed Refund Policy is being finalised and will be published here shortly. In the meantime, the key refund terms are set out in our{' '}
        <Link className="text-link" to="/terms">Terms and Conditions</Link> (Section 06: Cancellation, Refund Policy, and Termination).
      </p>
      <p>
        For refund enquiries, email us at <a className="text-link" href="mailto:tltadmin@thelightutors.com">tltadmin@thelightutors.com</a>.
      </p>
    </div>
  </LegalPage>
)

export default Refund
