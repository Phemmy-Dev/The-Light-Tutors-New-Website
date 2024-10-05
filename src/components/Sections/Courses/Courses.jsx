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
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react'


const Courses = () => {

  const courses = [
    { name: 'Mathematics', imageSrc: Maths },
    { name: 'English', imageSrc: English },
    { name: 'Physics', imageSrc: Physics },
    { name: 'Chemistry', imageSrc: Chemistry },
    { name: 'Biology', imageSrc: Biology },
    { name: 'Programming', imageSrc: Coding },
    { name: 'Music', imageSrc: Music },
    { name: 'Languages', imageSrc: Languages },
    { name: '11+ NVR/VR', imageSrc: Nvr },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,  // Delay between the appearance of each child (course card)
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
      transition: {
        duration: 0.5,  // You can tweak the timing here
      },
    },
  };

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // Animation will trigger once when in view

  return (
    <section ref={ref} className='course_cont bg-tltgreen py-10'>
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-tltorange text-center font-semibold text-xl">Our Courses</h2>
        <p className="text-white text-center text-lg capitalize font-semibold px-6">Our tutors provide quality teaching in the following Subjects:</p>
      </div>
      
      {/* Courses Grid */}
      <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20"
      variants={containerVariants}
      initial="hidden"
      animate="show">
        {courses.map((course, index) => (
          <motion.div
          key={index} 
          variants={cardVariants}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.4, duration: 0.5 }}>
            <CourseCard 
            key={index}
            imageSrc={course.imageSrc}
            courseName={course.name}
          />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Courses
