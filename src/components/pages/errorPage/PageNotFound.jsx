import Navbar from "../../Sections/NavBar/Navbar"
import Footer from "../../Sections/Footer/Footer"
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import { FiArrowLeft, FiHome, FiUsers, FiBookOpen, FiHelpCircle, FiInfo, FiArrowUpRight } from "react-icons/fi";

const revisionLinks = [
  { title: "Meet Our Tutors", text: "Find the right person to guide your child.", path: "/meet-our-team", icon: FiUsers },
  { title: "About Us", text: "Who we are and how we teach.", path: "/about", icon: FiInfo },
  { title: "Read the Blog", text: "Tips and guides for parents and students.", path: "/blog", icon: FiBookOpen },
  { title: "FAQs", text: "Answers to the questions parents ask most.", path: "/frequently-asked-questions", icon: FiHelpCircle },
]

// The "0" in 404 is a lightbulb that flickers on: we light the way back
const Bulb = () => (
  <motion.svg
    viewBox="0 0 120 170"
    className="h-[0.95em] w-auto overflow-visible"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="bulbGlow" cx="50%" cy="42%" r="50%">
        <stop offset="0%" stopColor="#ffd28a" />
        <stop offset="55%" stopColor="#fc8402" />
        <stop offset="100%" stopColor="#fc8402" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Glow */}
    <motion.circle
      cx="60" cy="62" r="80"
      fill="url(#bulbGlow)"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.6, 0.1, 0.8, 0.3, 0.55, 0.5] }}
      transition={{ duration: 2.4, delay: 0.6, times: [0, 0.15, 0.25, 0.4, 0.5, 0.7, 1] }}
    />

    {/* Glass */}
    <motion.path
      d="M60 8 C30 8 10 30 10 60 C10 80 22 94 32 106 C38 113 40 120 40 128 L80 128 C80 120 82 113 88 106 C98 94 110 80 110 60 C110 30 90 8 60 8 Z"
      strokeWidth="7"
      strokeLinejoin="round"
      initial={{ fill: "rgba(255,255,255,0)", stroke: "#ffffff" }}
      animate={{ fill: ["rgba(255,255,255,0)", "rgba(255,226,180,0.95)", "rgba(255,255,255,0.05)", "rgba(255,226,180,0.95)", "rgba(255,226,180,0.6)", "rgba(255,226,180,0.9)"], stroke: ["#ffffff", "#fc8402", "#ffffff", "#fc8402", "#fc8402", "#fc8402"] }}
      transition={{ duration: 2.4, delay: 0.6, times: [0, 0.15, 0.25, 0.4, 0.5, 1] }}
    />

    {/* Filament */}
    <path d="M44 128 L44 92 L52 80 L60 92 L68 80 L76 92 L76 128" fill="none" stroke="#0a3d48" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Base */}
    <rect x="38" y="132" width="44" height="10" rx="4" fill="#ffffff" />
    <rect x="40" y="146" width="40" height="10" rx="4" fill="#ffffff" />
    <path d="M48 160 L72 160 L66 168 L54 168 Z" fill="#ffffff" />
  </motion.svg>
)

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />

      <section className="relative overflow-hidden bg-tltgreen pt-36 pb-24 md:pt-44 md:pb-32 px-4 sm:px-6">
        {/* Exercise-book grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Light spill from the bulb */}
        <motion.div
          className="absolute left-1/2 top-24 -translate-x-1/2 w-[640px] h-[640px] max-w-[160vw] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(252,132,2,0.28) 0%, rgba(252,132,2,0) 65%)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-tltorange border border-tltorange/40 rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Error 404 · Off the syllabus
          </motion.p>

          <motion.h1
            className="flex items-center justify-center gap-2 sm:gap-4 text-[7rem] sm:text-[10rem] md:text-[12rem] font-extrabold leading-none text-white select-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            aria-label="404"
          >
            <span aria-hidden="true">4</span>
            <Bulb />
            <span aria-hidden="true">4</span>
          </motion.h1>

          <motion.h2
            className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            This lesson isn&apos;t on the timetable.
          </motion.h2>
          <motion.p
            className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Even the brightest students take a wrong turn now and then. That&apos;s part of learning.
            The page you&apos;re looking for has moved or never existed, so let us light the way back.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-tltorange text-white font-bold border-2 border-tltorange rounded-full px-8 py-3.5 shadow-lg hover:bg-white hover:text-tltgreen hover:border-white transition-colors duration-300"
            >
              <FiHome className="w-5 h-5" />
              Back to Homepage
            </Link>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold border-2 border-white/30 rounded-full px-8 py-3.5 hover:border-white hover:bg-white/10 transition-colors duration-300"
            >
              <FiArrowLeft className="w-5 h-5" />
              Go Back a Page
            </button>
          </motion.div>
        </div>
      </section>

      {/* Revision notes: helpful places to go next */}
      <section className="bg-gray-50 py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-tltorange mb-2">Quick revision</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-tltgreen">Pick up where you left off</h3>
            </div>

            {/* Teacher's note */}
            <motion.div
              className="self-start md:self-auto bg-white border-l-4 border-tltorange rounded-xl shadow-sm px-5 py-4 max-w-sm md:-rotate-2"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-tltorange mb-1">Tutor&apos;s note</p>
              <p className="text-gray-700 italic leading-snug">
                &ldquo;Every wrong answer is one step closer to the right one. Keep going!&rdquo;
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {revisionLinks.map(({ title, text, path, icon: Icon }, index) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={path}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-tltorange/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-tltgreen/5 text-tltgreen group-hover:bg-tltorange group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </span>
                    <FiArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-tltorange transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-tltgreen mb-1">{title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-gray-600">
            Looking for a tutor for your child?{' '}
            <a
              href="https://api.whatsapp.com/send?phone=2348153418503"
              className="font-semibold text-tltorange hover:text-tltgreen underline underline-offset-4 transition-colors"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PageNotFound
