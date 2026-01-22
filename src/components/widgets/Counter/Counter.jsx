import CountUp from 'react-countup';
import { FaUsers, FaStar } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";


const Counter = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      {/* Headline */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-tltgreen mb-8 md:mb-12 px-4">
        Join Thousands of Parents Who've Found Their Solution
      </h2>
      
      {/* Stats Container - Mobile: Stack vertically, Tablet+: Horizontal */}
      <div className='flex flex-col md:flex-row gap-6 md:gap-1 items-center justify-center md:justify-around text-black mx-4 max-w-6xl lg:mx-auto'>
        
        {/* Stat 1 */}
        <div className="students_count w-full md:w-1/3 md:border-r-2 md:border-gray-400 flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center p-6 md:p-4 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-lg md:shadow-none">
          <FaUsers className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-tltorange/10 p-3 text-tltorange rounded-xl'/>
          <div className='text-center md:text-left'>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-tltgreen">
              <CountUp start={0} end={300} duration={3} delay={0.5} suffix="+"/>
            </div>
            <p className='text-xs sm:text-sm md:text-base text-gray-600 mt-1 max-w-[200px]'>Students who've boosted their confidence</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="tutors_count w-full md:w-1/3 md:border-r-2 md:border-gray-400 flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center p-6 md:p-4 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-lg md:shadow-none">
          <FaStar className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-tltorange/10 p-3 text-tltorange rounded-xl'/>
          <div className='text-center md:text-left'>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-tltgreen flex items-center justify-center md:justify-start gap-1">
              <CountUp start={0} end={4.9} duration={3} delay={0.5} decimals={1}/>
              <span className="text-2xl md:text-3xl">/5</span>
            </div>
            <p className='text-xs sm:text-sm md:text-base text-gray-600 mt-1 max-w-[200px]'>Rated by parents for patience & expertise</p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="countries_count w-full md:w-1/3 flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center p-6 md:p-4 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-lg md:shadow-none">
          <BsGraphUpArrow className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-tltorange/10 p-3 text-tltorange rounded-xl'/>
          <div className='text-center md:text-left'>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-tltgreen">
              <CountUp start={0} end={96} duration={3} delay={0.5} suffix="%"/>
            </div>
            <p className='text-xs sm:text-sm md:text-base text-gray-600 mt-1 max-w-[200px]'>Of parents see progress in their first month</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
