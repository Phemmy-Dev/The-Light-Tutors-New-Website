import teamImg from '../../../assets/images/teamimg.JPG'
import CountUp from 'react-countup';
import Navbar from "../../Sections/NavBar/Navbar"
import Vbox from '../../widgets/Vision Box/Vbox';
import Footer from '../../Sections/Footer/Footer';
import operatePic from '../../../assets/images/operatepic.png'
import { motion } from 'framer-motion';



const AboutPage = () => {
  // Variants for left section (text content)
  const leftVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for right section (image and stats)
  const rightVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for stats boxes
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover effect
  };
  const valueVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover effect
  };

  return (
    <div>
      <Navbar />

      <section className="about_hero_cont h-full md:h-screen my-28 md:pt-28 w-full">
      <div className="about_inner_cont flex flex-col md:flex-row justify-center items-center md:h-4/5 px-0 md:px-8 gap-10 mx-6">
        {/* Left Section */}
        <motion.div
          className="flex items-center justify-center h-full w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={leftVariants}
        >
          <div className="flex flex-col gap-10 px-5 py-10 w-full md:w-9/12 bg-tltwhite shadow-2xl rounded-3xl">
            <motion.p
              className="text-tltorange font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              How It Started
            </motion.p>
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our dream is to teach children to be <span className="text-tltorange">creative</span>
            </motion.h2>
            <motion.p
              className="text-xs text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The Light Tutors (TLT) was founded in response to the challenges brought about by the pandemic. With social distancing making traditional education difficult, we saw an opportunity to bridge the education gap and ensure that learning continued, no matter the circumstances. Our mission from the start has been to make education accessible to students everywhere, despite time zones, restrictions, or challenges. <br /> <br />
              We offer personalized tutoring sessions in Mathematics, English, and Sciences to students from KS2 up to GCSE level, as well as those in elementary (Grades K–5), middle (Grades 6–8), and high school (Grades 9–12). In addition, we provide bespoke language learning for beginners and intermediate learners in Yoruba and French. <br /><br />
              <span className="font-semibold">Our goal is simple: to make learning as easy and seamless as possible, offering support tailored to each student’s unique needs.</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="h-full w-full md:w-1/2 flex flex-col justify-center items-center gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rightVariants}
        >
          {/* Right Upper Section (Image) */}
          <motion.div
            className="w-full md:w-9/12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={teamImg} alt="" className="rounded-xl" />
          </motion.div>

          {/* Right Lower Section (Stats Boxes) */}
          <motion.div
            className="shadow-2xl bg-tltwhite w-full md:w-9/12 p-4 my-2 rounded-xl"
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
            <div className="box_cont grid grid-cols-2 gap-4">
              {/* Box 1 */}
              <motion.div
                className="box1 bg-slate-100 rounded-lg px-3 py-3 flex flex-col justify-center"
                variants={boxVariants}
                whileHover="hover"
              >
                <CountUp start={0} end={45} duration={5} suffix="+" className="text-2xl font-semibold" />
                <p className="text-xs">Students</p>
              </motion.div>

              {/* Box 2 */}
              <motion.div
                className="box2 bg-slate-100 rounded-lg px-3 py-3 flex flex-col justify-center"
                variants={boxVariants}
                whileHover="hover"
              >
                <CountUp start={0} end={30} duration={5} suffix="+" className="text-2xl font-semibold" />
                <p className="text-xs">Tutors</p>
              </motion.div>

              {/* Box 3 */}
              <motion.div
                className="box3 bg-slate-100 rounded-lg px-3 py-3 flex flex-col justify-center"
                variants={boxVariants}
                whileHover="hover"
              >
                <CountUp start={0} end={5} duration={5} suffix="+" className="text-2xl font-semibold" />
                <p className="text-xs">Countries</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Vision and Mission */}
      <section className='flex flex-col md:flex-row justify-center items-center gap-10 pt-48 px-6 md:px-24 md:py-10 bg-tltgreen' >

        {/* Values Section */}
        <motion.div
        className="w-full flex flex-col justify-center md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h3
          className="text-tltorange font-semibold text-3xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Values
        </motion.h3>
        <motion.p
          className="text-tltwhite text-sm mb-5 md:w-11/12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Guided by our core values, we strive to build a nurturing and impactful educational experience. Our commitment to respect, communication, and growth shapes everything we do.
        </motion.p>
        <motion.div
          className="values_list flex flex-row flex-wrap gap-2"
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
            "Servant Leadership",
            "Communication",
            "Celebration",
            "Welfare and Support",
            "Respect",
            "Relationship",
            "Integrity",
            "Growth and Development",
          ].map((value, index) => (
            <motion.div
              key={index}
              className="value bg-tltwhite rounded-lg px-3 py-3 flex flex-col justify-center text-center font-medium"
              variants={valueVariants}
              whileHover="hover"
            >
              {value}
            </motion.div>
          ))}
        </motion.div>
        </motion.div>

        {/* Vision and Mission Section  */}
        <motion.div 
        className='w-full md:w-1/2'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}>
          <Vbox title={"Our Vision"} text={"Our vision is to be the leading online tutoring company, renowned for our commitment to staff growth and welfare, personalized education, and student success across global communities."} /> 

          <Vbox title={"Our Mission"} text={"Our mission is to provide students with a strong foundation and the tools to enjoy learning, to lead impactful programs that foster both academic success and character development, and to embrace individualized learning approaches that enhance efficiency."} />
        </motion.div>
      </section>


      {/* How we operate */}
      <section className="mx-6 md:mx-24 bg-slate-100 shadow-2xl rounded-2xl flex flex-col-reverse md:flex-row gap-10 py-8 px-6 pt-32">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p
          className="text-tltorange font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How We Operate
        </motion.p>
        <motion.p
          className="text-xs md:text-sm mb-4 text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          At The Light Tutors, our highly trained tutors are based in Africa, while our students span across multiple countries — a truly global connection powered by technology. All our lessons are delivered remotely, making world-class education accessible from the comfort of your home.
        </motion.p>
        <motion.p
          className="text-xs md:text-sm mb-4 text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          To get started, all a student needs is a computer, a webcam, a reliable internet connection, and the determination to succeed beyond the limits of a traditional classroom. Parents and learners alike tell us how our flexible online environment allows them to fit quality education seamlessly into their busy lives.
        </motion.p>
        <motion.p
          className="text-xs md:text-sm text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          With 24/7 access from any computer with internet connectivity, learning no longer has to compete with schedules — it becomes part of everyday life. For today’s students, that flexibility isn’t just a convenience; it’s a game-changer.
        </motion.p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <img src={operatePic} alt="" className="rounded-xl" />
      </motion.div>
    </section>

      
      <Footer />
    </div>
  )
}

export default AboutPage
