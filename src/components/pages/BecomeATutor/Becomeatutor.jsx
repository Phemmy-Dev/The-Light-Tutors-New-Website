import Navbar from "../../Sections/NavBar/Navbar";
import Footer from "../../Sections/Footer/Footer";
import BecomeATutorWidget from "../../widgets/BecomeATutor/BecomeATutorWidget";
import teamImg2 from '../../../assets/images/teamimg.jpg';
import { FaWallet, FaCalendarAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { motion } from "framer-motion";

const Becomeatutor = () => {
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
      <BecomeATutorWidget  title='Join The Light Tutors Team' 
      subtext='Thank you for your interest in joining us. We`re currently not hiring but you can feel free to check back from time to time for future opportunities.'
      subsubtext="" 
      batImg={teamImg2} />

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
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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
              "Educational Background: WASSCE and/or B.Sc. in Education or relevantLanguage or equivalent qualification.",
              "Experience: Prior experience in teaching Language subjects, preferably online.",
              "Technical Skills: Proficiency in using virtual tools and platforms.",
              "Soft Skills: Excellent communication, adaptability, patience, and empathy.",
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
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <h2 className="text-4xl font-semibold mb-4">{step.title}</h2>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> 

        {/*  Tutor Position Details */}
          <motion.div
          className="bg-gradient-to-r from-tltgreen to-teal-600 text-white p-8 rounded-lg shadow-lg mx-10 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            We're Hiring!!
          </motion.h1>
          <motion.p
            className="text-center mb-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            We are looking for skilled and passionate tutors to join our team, conducting live online tutoring sessions for students in the UK Years 3 to 11 and A’levels.
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Job Responsibilities
          </motion.h2>
          <motion.ul
            className="list-none pl-5 space-y-2 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.8 },
              },
            }}
          >
            {[
              "Conduct engaging and interactive live online tutoring sessions.",
              "Utilise online platforms (e.g., Zoom, Google Packages) effectively.",
              "Provide structured lesson plans and comprehensive progress reports for students.",
            ].map((responsibility, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="text-teal-300 mr-3">✔</span>
                {responsibility}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            Subjects
          </motion.h2>
          <motion.div
            className="mb-6 flex flex-wrap gap-2 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 1.0 },
              },
            }}
          >
            {[
              "English", "Mathematics", "Physics", "Verbal & Non-verbal Reasoning",
              "Chemistry", "Biology", "Basic Science", "Spanish", "Coding"
            ].map((subject, index) => (
              <motion.span
                key={index}
                className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                {subject}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            className="text-center mb-6 text-sm italic opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            (Computer Studies & Geography are a plus)
          </motion.p>

          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            Requirements
          </motion.h2>
          <motion.ul
            className="list-none pl-5 space-y-2 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 1.2 },
              },
            }}
          >
            {[
              "Educational Background: WASSCE and/or B.Sc. in Education or relevantLanguage or equivalent qualification.",
              "Experience: Prior experience in teaching Language subjects, preferably online.",
              "Technical Skills: Proficiency in using virtual tools and platforms.",
              "Soft Skills: Excellent communication, adaptability, patience, and empathy.",
              "Fluent in English.",
            ].map((requirement, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="text-teal-300 mr-3">✔</span>
                {requirement}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            Working Conditions
          </motion.h2>
          <motion.ul
            className="list-none pl-5 space-y-2 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 1.6 },
              },
            }}
          >
            {[
              "Remote Work: Must have a quiet, distraction-free workspace.",
              "Flexible Hours: Schedule based on student and tutor availability.",
              // "Technical Setup Required: Stable internet connection, computer webcam, good lighting.",
              "A stable internet connection.",
              "A functional computer with a webcam.",
              "Suitable lighting.",
              "Noise cancellation headset.",
              "MiFi.",
            ].map((condition, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="text-teal-300 mr-3">✔</span>
                {condition}
              </motion.li>
            ))}
          </motion.ul>

          <div
            className="text-center mt-8"
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
          >
            <a
              href="https://www.careers-page.com/thelightutors"
              target="_blank"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-200"
            >
              Apply Now
            </a>
          </div>
        </motion.div> 
      </div>

      <Footer />
    </div>
  );
};

export default Becomeatutor;