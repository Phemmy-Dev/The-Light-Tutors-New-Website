import Navbar from "../../Sections/NavBar/Navbar"
import Footer from "../../Sections/Footer/Footer"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Refund = () => {
  return (
    <div>
      <Navbar />

      <section className="refund_cont pt-32 pb-20 px-6 md:px-24 lg:px-48 bg-tltwhite text-gray-800 min-h-[60vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-tltgreen mb-4">Refund Policy</h1>
          <div className="inline-block bg-tltorange text-white px-4 py-1 rounded-full text-sm font-semibold mb-8">
            Coming Soon
          </div>

          <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl border border-gray-100 text-left">
            <h2 className="text-2xl font-semibold text-tltgreen mb-4">
              Full Policy
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
              Our detailed Refund Policy is being finalised and will be published here shortly. In the meantime, the key refund terms are outlined in our <Link to="/terms" className="text-tltorange hover:underline font-medium">Terms and Conditions</Link> (Section 06 — Cancellation, Refund Policy, and Termination).
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              For any refund enquiries, please contact us at <a href="mailto:tltadmin@thelightutors.com" className="text-tltorange hover:underline font-medium">tltadmin@thelightutors.com</a>.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default Refund
