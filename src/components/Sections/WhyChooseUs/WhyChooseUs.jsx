import ChooseBox from "../../widgets/ChooseBox/ChooseBox"
import ExpTut from '../../../assets/images/Icons/teacher.png'
import FlexLearn from '../../../assets/images/Icons/clock.png'
import GreatValue from '../../../assets/images/Icons/badge.png'
import OneOnOne from '../../../assets/images/Icons/oneonone.png'
import whychooseusbg from '../../../assets/images/whychooseusbg.jpg'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {

    const chooseData = [
        { title: 'Experienced Tutors', text: `Our team consists of highly qualified tutors with years of experience in helping students succeed academically.`, icon: ExpTut },
        { title: 'One-on-One Classes', text: `We offer personalized, one-on-one tutoring sessions that cater to your child's unique learning needs.`, icon: OneOnOne },
        { title: 'Flexible Learning', text: `Our schedules are designed to fit into your busy life, allowing your child to learn at their own pace.`, icon: FlexLearn },
        { title: 'Great Value', text: `We deliver exceptional tutoring services at a price that reflects the quality and care your child deserves.`, icon: GreatValue },
    ]

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger the appearance of each child
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8, // Start smaller
            rotate: -10, // Slight rotation
        },
        show: {
            opacity: 1,
            scale: 1, // Scale up to normal size
            rotate: 0, // Rotate back to 0
            transition: {
                type: "spring", // Spring animation for bouncy effect
                stiffness: 100, // Adjust stiffness for springiness
                damping: 10, // Adjust damping for smoothness
                duration: 0.5, // Duration of the animation
            },
        },
        hover: {
            scale: 1.05, // Slightly scale up on hover
            rotate: 5, // Slight rotation on hover
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
            },
        },
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 my-20">

            {/* Left Section */}
            <div className="w-full mb-10 md:mb-0 lg:w-2/5 flex flex-col gap-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl font-bold"
                >
                    This is Why We are <span className="text-tltorange">different</span> from Others
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-gray-400 text-sm"
                >
                    At The Light Tutors, we stand out because of our commitment to quality, personalized learning, and results-driven education. Our team of experienced tutors is dedicated to helping your child succeed through flexible, one-on-one classes designed around their unique needs. <br /><br />Whether you’re seeking a tutor for primary school or advanced subjects, we ensure that every student receives top-tier instruction with excellent value for your investment.
                </motion.p>
                <motion.img
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                    src={whychooseusbg}
                    alt=""
                    className="hidden lg:block rounded-lg w-4/5"
                />
            </div>

            {/* Right Section - Grid of ChooseBoxes */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6 w-full px-0 md:px-0 lg:w-1/2 place-items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }} // Ensures animation only triggers once
            >
                {chooseData.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover="hover" // Add hover animation
                    >
                        <ChooseBox
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