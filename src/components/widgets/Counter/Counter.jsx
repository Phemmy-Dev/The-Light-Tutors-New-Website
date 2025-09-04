import CountUp from 'react-countup';
import { FaUsers } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";


const Counter = () => {
  return (
    <div className='flex gap-1 items-center justify-around text-black mx-3 text-xs md:text-2xl bg-tltwhite shadow-2xl h-28 mt-5 md:mt-10 md:mx-10 rounded-full '>
        <div className="students_count border-r-2 gap-4 border-gray-400 w-1/3  flex h-20 items-center justify-center font-semibold">
        <FaUsers className='w-16 h-16 bg-slate-50 px-2 text-tltorange rounded-lg shadow-inner hidden lg:block'/>
        <div>
        <CountUp start={0} end={100} duration={5} delay={3} suffix="+"/>
        <p className='text-sm text-tltorange'>Students</p>
        </div>
        </div>

        <div className="tutors_count border-r-2 border-gray-400 w-1/3 flex gap-4 h-20 items-center justify-center font-semibold">
        <GiTeacher className='w-16 h-16 bg-slate-50 px-2 text-tltorange rounded-lg shadow-inner hidden lg:block'/>
        <div>
        <CountUp start={0} end={30} duration={5} delay={3} suffix="+"/>
        <p className='text-sm text-tltorange'>Tutors</p>
        </div>
        </div>

        <div className="countries_count w-1/3  flex gap-4 h-20 items-center justify-center font-semibold">
        <GiWorld className='w-16 h-16 bg-slate-50 px-2 text-tltorange rounded-lg shadow-inner hidden lg:block'/>
        <div>
        <CountUp start={0} end={5} duration={5} delay={3} suffix="+"/>
        <p className='text-sm text-tltorange'>Countries</p>
        </div>
        </div>
    </div>
  )
}

export default Counter
