import ChooseBox from "../../widgets/ChooseBox/ChooseBox"
import ExpTut from '../../../assets/images/Icons/teacher.png'
import FlexLearn from '../../../assets/images/Icons/clock.png'
import GreatValue from '../../../assets/images/Icons/badge.png'
import OneOnOne from '../../../assets/images/Icons/oneonone.png'
import chooseBg from '../../../assets/images/tltBg.jpg'
import { motion } from 'framer-motion';

const WhyChooseUs = () => {

    const chooseData = [
        {title:'Experienced Tutors', text:`Our team consists of highly qualified tutors with years of experience in helping students succeed academically.`, icon: ExpTut},
        {title:'One-on-One Classes', text:`We offer personalized, one-on-one tutoring sessions that cater to your child's unique learning needs.`, icon: OneOnOne},
        {title:'Flexible Learning', text:`Our schedules are designed to fit into your busy life, allowing your child to learn at their own pace.`, icon: FlexLearn},
        {title:'Great Value', text:`We deliver exceptional tutoring services at a price that reflects the quality and care your child deserves.`, icon: GreatValue},
    ]

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
        //   y: 50,  // Starts slightly off-screen (below)
        },
        show: {
          opacity: 1,
        //   y: 0,   // Moves to its final position
          transition: {
            duration: 3,  // You can tweak the timing her
            delay: 0.5,
          },
        },
      };

  return (
    <div className=" flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20 my-20 ">

        <div className=" w-full mb-10 md:mb-0 lg:w-2/5 flex flex-col gap-6">
        <h1 className="capitalize text-3xl font-bold">This is why we are <span className="text-tltorange">different</span> from others</h1>
        <p className="text-gray-400 text-sm">At The Light Tutors, we stand out because of our commitment to quality, personalized learning, and results-driven education. Our team of experienced tutors is dedicated to helping your child succeed through flexible, one-on-one classes designed around their unique needs. Whether you’re seeking a tutor for primary school or advanced subjects, we ensure that every student receives top-tier instruction with excellent value for your investment.</p>
        <img src={ chooseBg} alt=""  className="hidden lg:block rounded-lg w-4/5"/>
        </div>

        <motion.div 
        className="  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6 w-full px-0 md:px-0 lg:w-1/2 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"> {/* Adjust styling as needed */}
            {chooseData.map((item, index) => (
                <motion.div
                key={index}
                variants={cardVariants}>
                    <ChooseBox
                    key={index}
                    title={item.title}
                    text={item.text}
                    icon={item.icon}
                />
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default WhyChooseUs
