import PropTypes from 'prop-types';
import {motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay of 0.3s between child animations
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

const AboutProp = (props) => {
    return (
        <>
        <div className={`${props.contCname} flex flex-col-reverse h-full lg:flex-row-reverse lg:justify-between lg:items-center lg:px-10 gap-10 mx-5 xs:my-10 my-16 mb-10 md:mt-24 overflow-hidden`}>
            <motion.div 
            className="desc_content lg:w-2/5" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible">
                <motion.h3 className='text-xl text-tltorange font-bold mb-2' 
                variants={itemVariants}>{props.about_preheading}</motion.h3>
                <motion.h3 className='text-4xl font-semibold mb-5'
                variants={itemVariants}>{props.about_heading}</motion.h3>
                <motion.p className='text-gray-400 mb-5'
                variants={itemVariants}>{props.about_text}</motion.p>
                <Link to="/about">
                    <button 
                    className='bg-tltorange text-tltwhite hover:bg-transparent hover:text-black font-bold border-2 border-tltorange transition ease-in-out duration-300 px-5 py-3 rounded-full '>
                        {props.about_btn}
                    </button>
                </Link>
            </motion.div>

            <motion.div className="about_img lg:w-1/2 "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
                <img src={props.about_img} alt="About Img"  />
            </motion.div>
        </div>
        </>
)
}

AboutProp.propTypes = {
    about_preheading: PropTypes.string.isRequired, 
    about_heading: PropTypes.string.isRequired, 
    about_text: PropTypes.string.isRequired, 
    about_img: PropTypes.string.isRequired, 
    contCname: PropTypes.string.isRequired,
    about_btn: PropTypes.string.isRequired
}
export default AboutProp
