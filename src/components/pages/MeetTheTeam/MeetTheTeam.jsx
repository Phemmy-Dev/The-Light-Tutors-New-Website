import Navbar from "../../Sections/NavBar/Navbar"
import EmployeeOfTheMonth from '../../../assets/images/employeeM.png'
import TeamBox from "../../widgets/TeamBox/TeamBox"
import Footer from "../../Sections/Footer/Footer"
import teamImg from '../../../assets/images/teamimg.JPG'
import { motion } from 'framer-motion'


// TutorImgs
import Tutorpic1 from '../../../assets/images/tutors/1.jpg'
import Tutorpic2 from '../../../assets/images/tutors/2.jpg'
import Tutorpic4 from '../../../assets/images/tutors/4.jpg'
import Tutorpic5 from '../../../assets/images/tutors/5.jpg'
import Tutorpic6 from '../../../assets/images/tutors/6.jpg'
import Tutorpic8 from '../../../assets/images/tutors/8.jpg'
import Tutorpic9 from '../../../assets/images/tutors/9.jpeg'
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
import Tutorpic33 from '../../../assets/images/tutors/33.jpg'
import Tutorpic34 from '../../../assets/images/tutors/34.jpg'
import Tutorpic35 from '../../../assets/images/tutors/35.jpg'
import Tutorpic36 from '../../../assets/images/tutors/36.jpg'
import Tutorpic37 from '../../../assets/images/tutors/37.jpg'
import Tutorpic38 from '../../../assets/images/tutors/38.jpg'
import Tutorpic3 from '../../../assets/images/tutors/3.jpg'
import PlaceholderPic from '../../../assets/images/tutors/---.jpg'
import PreciousMomohPic from '../../../assets/images/tutors/precious-momoh.png'
import MorenikejPic from '../../../assets/images/tutors/morenikeji.jpeg'
import BilalPic from '../../../assets/images/tutors/bilal.jpg'
import VictoriaOyebodePic from '../../../assets/images/tutors/victoria-oyebode.jpg'
import UkojieAdanaikePic from '../../../assets/images/tutors/ukojie-adenaike.jpg'
import ImmanuelAdesokanPic from '../../../assets/images/tutors/immanuel-adesokan.jpg'
import TofunmiOyeniranPic from '../../../assets/images/tutors/tofunmi-oyeniran.jpeg'
import AyobamiAladePic from '../../../assets/images/tutors/ayobami-alade.jpeg'
import FavourOladapoPic from '../../../assets/images/tutors/favour-oladapo.jpeg'
import TobaPic from '../../../assets/images/tutors/tovas-toba.jpg'
import SharonDavidPic from '../../../assets/images/tutors/sharon-david.jpg'
import BukunmiOlaopaPic from '../../../assets/images/tutors/oluwbukunmi-olaopa.jpeg'
import MaryAdenijiPic from '../../../assets/images/tutors/mary-adeniji.jpeg'

const MeetTheTeam = () => {


    const teamMembers = [
        { id: 1, name: "Joshua Oroge", title: "CEO/Founder", img: Tutorpic36 },
        { id: 2, name: "Rose Oroge", title: "Chief Operating Officer", img: Tutorpic5 },
        { id: 39, name: "Oyeniran Tofunmi Elizabeth", title: "Customer Care Lead", img: TofunmiOyeniranPic },
        { id: 3, name: "Aaliyah Zemaiye", title: "Chief Marketing Officer", img: Tutorpic17 },
        { id: 14, name: "Priscilla Lasisi", title: "HR Assistant & Tutor", img: Tutorpic27 },
        { id: 5, name: "Olamiji Onanuga", title: "HR & Admin Assistant", img: Tutorpic28 },
        { id: 6, name: "Busayo Amadi", title: "Supervisor Lead", img: Tutorpic6 },
        { id: 7, name: "Gideon Akintade", title: "Supervisor", img: Tutorpic23 },
        { id: 20, name: "Blossom Adeyemi", title: "Supervisor", img: Tutorpic1 },
        { id: 9, name: "Oluwafemi Akinruntan", title: "Technical Manager & Supervisor", img: Tutorpic26 },
        { id: 29, name: "Afolayan Opeyemi", title: "Supervisor", img: Tutorpic18 },
        { id: 18, name: "Abisola Adefila", title: "Supervisor", img: Tutorpic16 },
        { id: 10, name: "Iseoluwa Akinduko", title: "Counselor", img: Tutorpic35 },
        { id: 44, name: "Oluwabukunmi Olaopa", title: "Programs and Partnerships Lead", img: BukunmiOlaopaPic },
        // { id: 11, name: "Rasheed Adeoti", title: "Tutor", img: Tutorpic3 },
        // { id: 12, name: "Dolapo Obasa", title: "Tutor", img: Tutorpic2 },
        { id: 13, name: "Emmanuel Oziegbe", title: "Tutor", img: Tutorpic4 },
        { id: 15, name: "Mercy Adams", title: "Tutor", img: Tutorpic15 },
        { id: 16, name: "James Opara", title: "Tutor", img: Tutorpic25 },
        { id: 17, name: "Toyin Salami", title: "Coding Tutor", img: Tutorpic19 },
        // { id: 19, name: "Ayodeji Akinsanya", title: "Tutor", img: Tutorpic11 },
        { id: 22, name: "Praise Aderinola", title: "Tutor", img: Tutorpic34 },
        { id: 23, name: "Kemisola David", title: "Tutor", img: Tutorpic37 },
        { id: 24, name: "Olumide Adisa", title: "Tutor", img: Tutorpic38 },
        { id: 26, name: "Faith Jimoh", title: "Tutor", img: Tutorpic33 },
        { id: 27, name: "Adeleke Owoade", title: "Yoruba Tutor", img: Tutorpic9 },
        { id: 28, name: "Dongmo Bilson", title: "French Tutor", img: Tutorpic8 },
        { id: 30, name: "Daniel Babalola", title: "Tutor", img: Tutorpic21 },
        { id: 32, name: "Noah Ige", title: "Tutor", img: Tutorpic31 },
        { id: 33, name: "Precious Momoh", title: "Tutor", img: PreciousMomohPic },
        { id: 34, name: "Adeogun Morenikeji Samson", title: "Tutor", img: MorenikejPic },
        { id: 35, name: "Bilal", title: "Emotional Response Marketing Strategist", img: BilalPic },
        { id: 36, name: "Oyebode Victoria", title: "English Tutor", img: VictoriaOyebodePic },
        { id: 37, name: "Ukoje Onohije Adenaike", title: "Tutor", img: UkojieAdanaikePic },
        { id: 38, name: "Adesokan Immanuel Oluwanifise", title: "Tutor", img: ImmanuelAdesokanPic },

        { id: 40, name: "Alade Ganiyu Ayobami", title: "Tutor", img: AyobamiAladePic },
        { id: 41, name: "Oladapo Favour", title: "Tutor", img: FavourOladapoPic },
        { id: 42, name: "Toba Adigun", title: "Tutor", img: TobaPic },
        { id: 43, name: "David Sharon", title: "Tutor", img: SharonDavidPic },

        { id: 45, name: "Mary Adeniji", title: "Tutor", img: MaryAdenijiPic },
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
                        {teamMembers.map((member, index) => (
                            <TeamBox
                                key={member.id}
                                id={member.id}
                                img={member.img}
                                name={member.name}
                                title={member.title}
                                index={index}
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
