import React, { useState, useEffect } from 'react'
import defaultHeroImg from '../../../assets/images/csrhero.jpg'
import { motion } from 'framer-motion'

const Hero = ({ heroImg }) => {
  // Simple counter hook for animated numbers
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTime;
      let animationId;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));
        
        if (percentage < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };
      
      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }, [end, duration]);
    
    return count;
  };

  return (
    <div className="hero_cont relative">
      {/* Background Image */}
      <div className="bg_img">
        <img src={heroImg || defaultHeroImg} alt="CSR Hero Background" />
      </div>

      {/* Main Hero Content */}
      <motion.div 
        className="hero_text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className='font-bold'>
          Impacting Education, Empowering Communities
        </h1>
        <p>
          The Light Tutors has supported learners through 
          exam sponsorships, outreach programs, mentorship initiatives, 
          and skill-based training.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <a 
            href="#impact-timeline" 
            className="bg-tltorange text-white px-6 py-3 rounded-full font-bold hover:bg-transparent border-2 border-tltorange hover:text-white transition ease-in-out duration-300"
          >
            View Our Projects
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero


