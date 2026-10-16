import Navbar from "../../Sections/NavBar/Navbar"
import EmployeeOfTheMonth from '../../../assets/images/employeeM.png'
import TeamBox from "../../widgets/TeamBox/TeamBox"
import Footer from "../../Sections/Footer/Footer"
import teamImg from '../../../assets/images/teamimg.JPG'
import { motion } from 'framer-motion'

import team from '../../../data/team'

const MeetTheTeam = () => {


    return (
        <div>
            <Navbar />
            <div className="meet_the_team_cont h-screen ">

                {/* Meet The Team Header */}
                <motion.div
                    className="meet_team_header pt-56 py-20 flex flex-col justify-center items-center mb-16"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${teamImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-2xl md:text-4xl mb-4 px-3 md:px-0 w-full md:w-1/2 text-tltwhite text-center font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        We bring a <span className="text-tltorange">wealth</span> of experience from a wide range <span className="text-tltorange">background</span>.
                    </motion.h1>
                    <motion.p
                        className="text-xs md:text-base text-center w-11/12 px-8 md:w-2/5 text-tltwhite"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        We are a group of young passionate individuals working together to achieve a common goal. Get to know the faces behind our success.
                    </motion.p>
                </motion.div>

                {/* Employee Of The Month */}
                <motion.div
                    className="employee_of_the_month_img flex justify-center items-center mb-16 mx-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <img src={EmployeeOfTheMonth} alt="Employee Of The Month" className="w-full rounded-xl" />
                </motion.div>

                {/* The Team */}
                <div className=" px-0 md:px-12">
                    <motion.h2
                        className="font-semibold text-3xl text-center md:text-left text-tltorange mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Our Team
                    </motion.h2>

                    {/* Meet the team Boxes */}
                    <div className="box_cont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7 px-3 md:px-0 pb-16">
                        {team.map((member, index) => (
                            <TeamBox
                                key={member.id}
                                id={member.id}
                                img={member.img}
                                name={member.name}
                                title={member.title}
                                index={index}
                                clickable={member.hasProfilePage}
                            />
                        ))}
                    </div>
                </div>


                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default MeetTheTeam
