import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUtensils, FaBriefcase, FaUsers, FaCalendarAlt, FaEye } from 'react-icons/fa'

const ImpactTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const csrActivities = {
    2025: [
      {
        title: "GCSE Boot Camp",
        date: "12th April 2025",
        category: "Educational Access",
        pillarIcon: <FaGraduationCap className="text-tltorange" />,
        summary: "A one-day intensive boot camp preparing students for GCSE exams. 11 registered, 70% attended, boosting confidence and exam readiness.",
        impactHighlights: "11 students reached | 70% attendance",
        status: "completed"
      },
      {
        title: "Feeding Outreach (Ibadan)",
        date: "May 2025",
        category: "Community Welfare",
        pillarIcon: <FaUtensils className="text-tltorange" />,
        summary: "Community feeding program providing nutritious meals to children and families in need across Ibadan communities.",
        impactHighlights: "100+ families served | 300+ meals distributed",
        status: "completed"
      },
      {
        title: "Microsoft Excel Training Webinar",
        date: "July 2025",
        category: "Career & Skills Development",
        pillarIcon: <FaBriefcase className="text-tltorange" />,
        summary: "Virtual training session teaching essential Excel skills for career advancement and workplace productivity.",
        impactHighlights: "45 participants | 85% completion rate",
        status: "completed"
      },
      {
        title: "Boy-Child Advocacy Outreach",
        date: "July 2025",
        category: "Community Welfare",
        pillarIcon: <FaUsers className="text-tltorange" />,
        summary: "Advocacy program focusing on boy-child education, mental health awareness, and positive role modeling.",
        impactHighlights: "60 young men engaged | 12 mentorship matches",
        status: "completed"
      },
      {
        title: "School Infrastructure + Feeding Project",
        date: "Q4 2025",
        category: "Educational Access",
        pillarIcon: <FaGraduationCap className="text-tltorange" />,
        summary: "Comprehensive project combining school infrastructure improvements with sustainable feeding programs.",
        impactHighlights: "Target: 200+ students | 3 schools",
        status: "upcoming"
      },
      {
        title: "HireGround",
        date: "December 2025",
        category: "Career & Skills Development",
        pillarIcon: <FaBriefcase className="text-tltorange" />,
        summary: "A career transformation event, designed to bridge the gap between talent and opportunity. Born from the vision of creating a platform where career dreams become reality, we bring together industry leaders, job seekers, career changers, and entrepreneurs under one roof.",
        impactHighlights: "Target: 1000+ people",
        status: "upcoming"
      }
    ],
    2024: [
      {
        title: "JAMB Sponsorship",
        date: "January 2024",
        category: "Educational Access",
        pillarIcon: <FaGraduationCap className="text-tltorange" />,
        summary: "Sponsoring JAMB registration fees for underprivileged students to ensure access to higher education opportunities.",
        impactHighlights: "50+ students sponsored | 85% university admission rate",
        status: "completed"
      },
      {
        title: "Direct Entry Sponsorship",
        date: "January 2024",
        category: "Educational Access",
        pillarIcon: <FaGraduationCap className="text-tltorange" />,
        summary: "Supporting qualified students through direct entry university admissions process and associated costs.",
        impactHighlights: "25 students supported | 90% success rate",
        status: "completed"
      },
      {
        title: "Virtual Career Fair Conference",
        date: "August 2024",
        category: "Career & Skills Development",
        pillarIcon: <FaBriefcase className="text-tltorange" />,
        summary: "Large-scale virtual career fair connecting students with employers and providing career guidance sessions.",
        impactHighlights: "500+ attendees | 30+ employers | 150+ job matches",
        status: "completed"
      },
      {
        title: "CARE Program Support",
        date: "Late 2024",
        category: "Partnerships & Volunteerism",
        pillarIcon: <FaUsers className="text-tltorange" />,
        summary: "Collaborative program providing comprehensive support for vulnerable community members through partnerships.",
        impactHighlights: "200+ individuals supported | 15 partner organizations",
        status: "completed"
      }
    ]
  };

  const years = Object.keys(csrActivities).sort((a, b) => b - a);

  return (
    <div id="impact-timeline" className="px-10 py-16 bg-white">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our Impact Timeline
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our journey of creating positive change through dedicated CSR initiatives year by year.
        </p>
      </motion.div>

      {/* Year Selector */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex bg-gray-100 rounded-full p-1">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-tltorange text-white shadow-md'
                  : 'text-gray-600 hover:text-tltorange'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Activities Grid */}
      <motion.div
        key={selectedYear}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        }}
      >
        {csrActivities[selectedYear].map((activity, index) => (
          <motion.div
            key={index}
            className={`bg-white border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
              activity.status === 'upcoming' ? 'border-tltorange border-2' : 'border-gray-200'
            }`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Card Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {activity.pillarIcon}
                  <span className="text-sm font-medium text-gray-500">
                    {activity.category}
                  </span>
                </div>
                {activity.status === 'upcoming' && (
                  <span className="bg-tltorange/10 text-tltorange text-xs font-semibold px-2 py-1 rounded-full">
                    Upcoming
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-tltgreen mb-2">
                {activity.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <FaCalendarAlt className="text-xs" />
                <span>{activity.date}</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {activity.summary}
              </p>

              {/* Impact Highlights */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-tltgreen mb-1">
                  Impact Highlights:
                </p>
                <p className="text-sm text-gray-600">
                  {activity.impactHighlights}
                </p>
              </div>

              {/* CTA Button */}
              {/* <button className="w-full bg-tltorange text-white py-2 px-4 rounded-lg font-semibold hover:bg-tltorange/90 transition-colors duration-300 flex items-center justify-center gap-2">
                <FaEye className="text-sm" />
                Read More
              </button> */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-tltgreen/5 rounded-lg p-6 inline-block">
          <p className="text-tltgreen font-semibold text-lg">
            {selectedYear} Impact: {csrActivities[selectedYear].length} major initiatives completed
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Continuing our commitment to positive community change
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ImpactTimeline