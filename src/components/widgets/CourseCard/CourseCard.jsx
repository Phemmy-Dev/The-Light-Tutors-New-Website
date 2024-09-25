import { motion } from 'framer-motion';
import proptypes from 'prop-types';

const CourseCard = ({ imageSrc, courseName }) => {
  return (
    <div>
        <motion.div
        className="flex flex-row items-center justify-center bg-white shadow-lg  py-2 rounded-lg gap-2 md:gap-10 "
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        >
            {/* Course Icon Image */}
           <div className=' w-1/5 md:w-4/12 flex items-center  justify-center'>
           <img 
                src={imageSrc} 
                alt={courseName} 
                className="w-6 h-6 md:w-10 md:h-10 object-contain "  
            />
           </div>
           <div className='w-1/2'>
            {/* Course Name */}
            <h3 className=" text-xs md:text-xl font-bold ">{courseName}</h3>
           </div>
           
        </motion.div>
    </div>
  )
}

CourseCard.propTypes = {
    imageSrc: proptypes.node,
    courseName: proptypes.string
}

export default CourseCard
