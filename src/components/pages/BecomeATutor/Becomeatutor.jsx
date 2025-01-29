import Navbar from "../../Sections/NavBar/Navbar"
import Footer from "../../Sections/Footer/Footer"
import BecomeATutorWidget from "../../widgets/BecomeATutor/BecomeATutorWidget"
import teamImg2 from '../../../assets/images/teamimg.jpg'
import { FaWallet } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { motion } from "framer-motion";



const Becomeatutor = () => {
  // const steps = [
  //   { title: "Step 1", description: "Fill out the application form." },
  //   { title: "Step 2", description: "Submit your resume and credentials." },
  //   { title: "Step 3", description: "Attend an interview session." },
  //   { title: "Step 4", description: "Complete the onboarding process." },
  // ];

  const steps = [
    {
      title: "Fill Application",
      description: "Complete the online application form on this page in its entirety.",
    },
    {
      title: "Upload Documents",
      description: "Upload all required documents, which include: Resume/CV, Cover letter, Contact information for professional references.",
    },
    {
      title: "Review Application",
      description: "Review your application to ensure all information is accurate and up-to-date.",
    },
    {
      title: "Submit Application",
      description: "Submit your application by clicking the 'Submit' button at the end of the registration form.",
    },
  ];


  return (
    <div>
        <Navbar />
        <BecomeATutorWidget  title='Join The Light Tutors Team' subtext='Thank you for your interest in joining The Light Tutors Ltd. as a tutor. While we truly appreciate your enthusiasm, we are not accepting applications for this position at the moment. ' subsubtext="In the meantime, we encourage you to explore our benefits, requirements, and application process outlined below. This will help you better prepare for when the opportunity to apply becomes available." subsubsubtext="We appreciate your understanding and encourage you to check back in the future for any new opportunities. Wishing you the best of luck in your endeavors!" batImg={teamImg2} />

        
    <div>
      {/* Benefits Section */}
      <motion.div
        className="benefits px-10 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="text-3xl text-center font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Benefits of being a Tutor
        </motion.h1>
        <motion.div
          className="benefits__box__cont flex flex-col justify-between gap-10 my-10 md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.2 },
            },
          }}
        >
          {[
            {
              icon: <FaWallet />,
              title: "Competitive Pay",
              description: "Prompt and adequate compensation for your time and effort.",
            },
            {
              icon: <FaCalendarAlt />,
              title: "Convenient Schedule",
              description: "Your own personalized work calendar that can be easily customized and planned around your day.",
            },
            {
              icon: <IoIosHome />,
              title: "Remote",
              description: "Work from anywhere in the world, with little to no requirements for physical presence.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit__box flex flex-col justify-center items-center py-5 px-5 rounded-lg md:w-1/3 shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover effect
            >
              <div className="icon text-5xl text-tltgreen">{benefit.icon}</div>
              <h2 className="font-semibold text-2xl my-2">{benefit.title}</h2>
              <p className="text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Requirements Section */}
      <motion.div
        className="bg-gradient-to-r from-tltgreen to-teal-600 text-white p-8 rounded-lg shadow-lg mx-10 mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Requirements To Become A Tutor
        </motion.h1>
        <motion.ul
          className="list-none pl-0 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.4 },
            },
          }}
        >
          {[
            "Educational background in the subject or any other related field.",
            "Prior experience in teaching is advantageous.",
            "Access to a stable internet connection.",
            "Good communication and interpersonal skills.",
            "Proficiency in virtual platforms (e.g., Zoom, Google Docs).",
            "Comprehensive knowledge of the subject area.",
            "Fluency in English.",
          ].map((requirement, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="text-teal-300 mr-3">✔</span>
              <p>{requirement}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* How To Apply Section */}
      <motion.div
        className="bg-gray-900 text-white py-16 px-4 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How To Apply
        </motion.h1>
        <motion.div
          className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.4 },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-transparent border border-white p-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover effect
            >
              <h2 className="text-4xl font-semibold mb-4">{step.title}</h2>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>

        <Footer />
    </div>
  )
}

export default Becomeatutor
