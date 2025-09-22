import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaHandsHelping, FaUsers } from 'react-icons/fa'

const Pillar = () => {
  const pillars = [
    {
      icon: <FaGraduationCap className="text-4xl text-tltorange" />,
      title: "Educational Access & Sponsorships",
      description: "Breaking financial barriers by sponsoring examinations and providing learning support."
    },
    {
      icon: <FaBriefcase className="text-4xl text-tltorange" />,
      title: "Career & Skills Development", 
      description: "Hosting career fairs, webinars, and training sessions to prepare learners for the future of work."
    },
    {
      icon: <FaHandsHelping className="text-4xl text-tltorange" />,
      title: "Community Welfare & Advocacy",
      description: "Partnering with organizations and individuals to provide food, mentorship, and advocacy programs."
    },
    {
      icon: <FaUsers className="text-4xl text-tltorange" />,
      title: "Partnerships & Volunteerism",
      description: "Encouraging staff-led initiatives and collaborations that extend our reach and deepen our impact."
    }
  ];

  return (
    <div id="pillars" className="px-10 py-16 bg-gray-50">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our CSR Pillars
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We focus our efforts on four core areas of impact:
        </p>
      </motion.div>

      {/* Pillars Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-tltorange/10 rounded-full">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-tltgreen mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Pillar