import Navbar from "../../Sections/NavBar/Navbar"
import EmployeeOfTheMonth from '../../../assets/images/employeeM.png'
import TeamBox from "../../widgets/TeamBox/TeamBox"
import Footer from "../../Sections/Footer/Footer"
import teamImg from '../../../assets/images/teamimg.jpg'
import {motion} from 'framer-motion'


// TutorImgs
import Tutorpic1 from '../../../assets/images/tutors/1.jpg'
import Tutorpic2 from '../../../assets/images/tutors/2.jpg'
import Tutorpic4 from '../../../assets/images/tutors/4.jpg'
import Tutorpic5 from '../../../assets/images/tutors/5.jpg'
import Tutorpic6 from '../../../assets/images/tutors/6.jpg'
import Tutorpic7 from '../../../assets/images/tutors/7.jpg'
import Tutorpic8 from '../../../assets/images/tutors/8.jpg'
import Tutorpic9 from '../../../assets/images/tutors/9.jpg'
import Tutorpic11 from '../../../assets/images/tutors/11.png'
import Tutorpic15 from '../../../assets/images/tutors/15.jpg'
import Tutorpic16 from '../../../assets/images/tutors/16.jpg'
import Tutorpic17 from '../../../assets/images/tutors/17.jpg'
import Tutorpic18 from '../../../assets/images/tutors/18.jpg'
import Tutorpic19 from '../../../assets/images/tutors/19.jpg'
import Tutorpic21 from '../../../assets/images/tutors/21.jpg'
import Tutorpic22 from '../../../assets/images/tutors/22.jpg'
import Tutorpic23 from '../../../assets/images/tutors/23.jpg'
import Tutorpic25 from '../../../assets/images/tutors/25.jpg'
import Tutorpic26 from '../../../assets/images/tutors/26.jpg'
import Tutorpic27 from '../../../assets/images/tutors/27.jpg'
import Tutorpic28 from '../../../assets/images/tutors/28.jpg'
import Tutorpic30 from '../../../assets/images/tutors/30.jpg'
import Tutorpic31 from '../../../assets/images/tutors/31.jpg'
import Tutorpic32 from '../../../assets/images/tutors/32.jpg'
import Tutorpic33 from '../../../assets/images/tutors/33.jpg'
import Tutorpic34 from '../../../assets/images/tutors/34.jpg'
import Tutorpic35 from '../../../assets/images/tutors/35.jpg'
import Tutorpic36 from '../../../assets/images/tutors/36.jpg'
import Tutorpic37 from '../../../assets/images/tutors/37.jpg'
import Tutorpic38 from '../../../assets/images/tutors/38.jpg'
import Tutorpic39 from '../../../assets/images/tutors/39.jpg'
import Tutorpic3 from '../../../assets/images/tutors/3.jpg'

const MeetTheTeam = () => {


    const teamMembers = [
        { name: "Joshua Oroge", title: "CEO/Founder", img: Tutorpic36 },
        { name: "Rose Oroge", title: "Chief Operating Officer", img: Tutorpic5 },
        { name: "Aaliyah Zemaiye", title: "Chief Operating Officer", img: Tutorpic17 },
        { name: "Olamiji Onanuga", title: "HR & Admin Assistant", img: Tutorpic28 },
        { name: "Erioluwa Oladeji", title: "HR Manager", img: Tutorpic7 },
        { name: "Busayo Amadi", title: "Supervisor", img: Tutorpic6 },
        { name: "Gideon Akintade", title: "Supervisor", img: Tutorpic23 },
        { name: "Ese Emielu", title: "Social Media Admin", img: Tutorpic30 },
        { name: "Oluwafemi Akinruntan", title: "Tutor & Technical Manager", img: Tutorpic26 },
        {name: "Rasheed Adeoti", title: "Tutor & Graphics Designer", img: Tutorpic3 },
        {name: "Dolapo Obasa", title: "Tutor", img: Tutorpic2 },
        {name: "Emmanuel Oziegbe", title: "Tutor", img: Tutorpic4 },
        {name: "Priscilla Lasisi", title: "English Tutor", img: Tutorpic27 },
        {name: "Mercy Adams", title: "Tutor", img: Tutorpic15 },
        {name: "James Opara", title: "Tutor", img: Tutorpic25},
        {name: "Toyin Salami", title: "Coding Tutor", img: Tutorpic19 },
        {name: "Abisola Adefila", title: "Science Tutor", img: Tutorpic16 },
        {name: "Ayodeji Akinsanya", title: "Tutor", img: Tutorpic11 },
        {name: "Blossom Adeyemi", title: "Tutor", img: Tutorpic1 },
        {name: "Opemipo Ojeleye", title: "Tutor", img: Tutorpic39 },
        {name: "Praise Aderinola", title: "Tutor", img: Tutorpic34 },
        {name: "Kemisola David", title: "Tutor", img: Tutorpic37 },
        {name: "Olumide Adisa", title: "Tutor", img: Tutorpic38 },
        {name: "Iseoluwa Akinduko", title: "Tutor", img: Tutorpic35 },
        {name: "Seyi Afolayan", title: "Tutor", img: Tutorpic32 },
        {name: "Faith Jimoh", title: "Tutor", img: Tutorpic33 },
        {name: "Adeleke Abidemi", title: "Yoruba Tutor", img: Tutorpic9 },
        {name: "Dongmo Bilson", title: "French Tutor", img: Tutorpic8 },
        {name: "Afolayan Opeyemi", title: "Tutor", img: Tutorpic18 },
        {name: "Daniel Babalola", title: "Tutor", img: Tutorpic21 },
        {name: "Jason Owa", title: "Tutor", img: Tutorpic22 },
        {name: "Noah Ige", title: "Tutor", img: Tutorpic31 },
        ];

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
                We are a group of passionate individuals working together to achieve a common goal. Get to know the faces behind our success.
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
                {/* <p className="w-full text-center md:text-left md:w-2/5 text-gray-400 mb-10">
                    We are a group of passionate individuals working together to achieve a common goal. Get to know the faces behind out success.
                </p> */}

                {/* Meet the team Boxes */}
                <div className="box_cont flex gap-5 flex-wrap justify-center items-center">
                {teamMembers.map((member, index) => (
                    <TeamBox
                        key={index}
                        img={member.img}       // Image for each team member
                        name={member.name}     // Name of the team member
                        title={member.title}   // Title/Role of the team member
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
