import CourseCard from '../../widgets/CourseCard/CourseCard'
import Maths from '../../../assets/images/Icons/mathss.png'
import English from '../../../assets/images/Icons/eng.png'
import Physics from '../../../assets/images/Icons/relativity.png'
import Chemistry from '../../../assets/images/Icons/chemistry.png'
import Biology from '../../../assets/images/Icons/dna.png'
import Coding from '../../../assets/images/Icons/coding.png'
import Music from '../../../assets/images/Icons/music.png'
import Languages from '../../../assets/images/Icons/planet-earth.png'
import Nvr from '../../../assets/images/Icons/puzzle.png'
import { motion } from 'framer-motion'

const Courses = () => {

  const courses = [
    { name: 'Mathematics', imageSrc: Maths },
    { name: 'English', imageSrc: English },
    { name: 'Physics', imageSrc: Physics },
    { name: 'Chemistry', imageSrc: Chemistry },
    { name: 'Biology', imageSrc: Biology },
    { name: 'Coding', imageSrc: Coding },
    { name: 'Music', imageSrc: Music },
    { name: 'Languages', imageSrc: Languages },
    { name: '11+ Preparation', imageSrc: Nvr },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,  // Delay between the appearance of each child (course card)
        // ease: easeOut,          // Animation effect
      },
    },
  };
  
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,  // Starts slightly off-screen (below)
    },
    show: {
      opacity: 1,
      y: 0,   // Moves to its final position
    },
  };

  return (
    <section id="subjects" className='course_cont bg-tltgreen py-12 md:py-16 lg:py-20'>
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-white text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">Find Your Child's Confidence in Any Subject</h2>
        {/* <p className="text-tltorange text-center text-base md:text-lg lg:text-sm font-semibold px-2 mb-3 md:mb-4">We specialize in turning problem subjects into proud strengths. Where does your child need a breakthrough?</p> */}
        <p className="text-white text-center text-xs sm:text-sm md:text-base px-2 max-w-3xl mx-auto italic">Not sure which subject is the problem? 9 out of 10 parents we talk to have a clear idea. Let's match your child with the perfect tutor for their needs.</p>
      </div>
      
      {/* Courses Grid */}
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} // Ensures the animation only triggers once
      >
        {courses.map((course, index) => (
          <motion.div
            key={index} 
            variants={cardVariants}
          >
            <CourseCard 
              imageSrc={course.imageSrc}
              courseName={course.name}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <div className="text-center mt-8 md:mt-12 px-4">
        <a 
          href="https://api.whatsapp.com/send?phone=2348153418503"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-tltorange text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-tltgreen transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get a Personalized Learning Plan
          </button>
        </a>
      </div>
    </section>
  )
}

export default Courses