import { motion } from 'framer-motion';
import proptypes from 'prop-types';

const CourseCard = ({ imageSrc, courseName, description }) => {
  return (
    <div className="h-full">
        <motion.div
        className="flex flex-col items-center justify-center bg-white shadow-lg hover:shadow-2xl p-3 sm:p-4 rounded-xl gap-2 sm:gap-3 h-full min-h-[120px] sm:min-h-[140px] transition-all duration-300"
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {/* Course Icon Image */}
           <div className='flex items-center justify-center bg-tltorange/5 p-2 sm:p-3 rounded-full'>
           <img 
                src={imageSrc} 
                alt={courseName} 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"  
            />
           </div>
           
           <div className='text-center flex-1 flex flex-col justify-center'>
            {/* Course Name */}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-tltgreen">{courseName}</h3>
            {/* Description */}
            {description && (
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">{description}</p>
            )}
           </div>
           
        </motion.div>
    </div>
  )
}

CourseCard.propTypes = {
    imageSrc: proptypes.node,
    courseName: proptypes.string,
    description: proptypes.string
}

export default CourseCard
