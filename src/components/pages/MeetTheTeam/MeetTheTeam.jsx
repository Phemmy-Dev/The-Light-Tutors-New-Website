import Navbar from "../../Sections/NavBar/Navbar"
import EmployeeOfTheMonth from '../../../assets/images/August.png'
import TeamBox from "../../widgets/TeamBox/TeamBox"
import Footer from "../../Sections/Footer/Footer"
// import teamImg from '../../../assets/images/teamimg.jpg'


// TutorImgs
import Tutorpic1 from '../../../assets/images/tutors/1.jpg'
import Tutorpic2 from '../../../assets/images/tutors/2.jpg'
import Tutorpic4 from '../../../assets/images/tutors/4.jpg'
import Tutorpic5 from '../../../assets/images/tutors/5.jpg'
import Tutorpic6 from '../../../assets/images/tutors/6.jpg'
import Tutorpic7 from '../../../assets/images/tutors/7.jpg'
import Tutorpic11 from '../../../assets/images/tutors/11.png'
import Tutorpic14 from '../../../assets/images/tutors/14.jpg'
import Tutorpic15 from '../../../assets/images/tutors/15.jpg'
import Tutorpic16 from '../../../assets/images/tutors/16.jpg'
import Tutorpic17 from '../../../assets/images/tutors/17.jpg'
import Tutorpic19 from '../../../assets/images/tutors/19.jpg'
import Tutorpic23 from '../../../assets/images/tutors/23.jpg'
import Tutorpic25 from '../../../assets/images/tutors/25.jpg'
import Tutorpic26 from '../../../assets/images/tutors/26.jpg'
import Tutorpic27 from '../../../assets/images/tutors/27.jpg'
import Tutorpic28 from '../../../assets/images/tutors/28.jpg'
import Tutorpic29 from '../../../assets/images/tutors/29.jpg'
import Tutorpic30 from '../../../assets/images/tutors/30.jpg'
import Tutorpic32 from '../../../assets/images/tutors/32.jpg'
import Tutorpic33 from '../../../assets/images/tutors/33.jpg'
import Tutorpic35 from '../../../assets/images/tutors/35.jpg'
import Tutorpic36 from '../../../assets/images/tutors/36.jpg'
import Tutorpic37 from '../../../assets/images/tutors/37.jpg'
import Tutorpic38 from '../../../assets/images/tutors/38.jpg'
import Tutorpic39 from '../../../assets/images/tutors/39.jpg'

const MeetTheTeam = () => {


    const teamMembers = [
        { name: "Joshua Oroge", title: "CEO/Founder", img: Tutorpic36 },
        { name: "Rose Oroge", title: "Chief Operating Officer", img: Tutorpic5 },
        { name: "Aaliyah Zemaiye", title: "Chief Operating Officer", img: Tutorpic17 },
        { name: "Olamiji Onanuga", title: "Admin Assistant", img: Tutorpic28 },
        { name: "Erioluwa Oladeji", title: "HR Manager", img: Tutorpic7 },
        { name: "Busayo Amadi", title: "Supervisor", img: Tutorpic6 },
        { name: "Gideon Akintade", title: "Supervisor", img: Tutorpic23 },
        { name: "Dr. Joba Oroge", title: "Medical Consultant", img: Tutorpic29 },
        { name: "Ese Emielu", title: "Social Media Admin", img: Tutorpic30 },
        { name: "Oluwafemi Akinruntan", title: "Technical Manager", img: Tutorpic26 },
        { name: "Dolapo Obasa", title: "Tutor", img: Tutorpic2 },
        { name: "Emmanuel Oziegbe", title: "Tutor", img: Tutorpic4 },
        { name: "Priscilla Lasisi", title: "Tutor", img: Tutorpic27 },
        { name: "Mercy Adams", title: "Tutor", img: Tutorpic15 },
        {name: "James Opara", title: "Tutor", img: Tutorpic25},
        {name: "Toyin Salami", title: "Tutor", img: Tutorpic19 },
        {name: "Abisola Adefila", title: "Tutor", img: Tutorpic16 },
        {name: "Ayodeji Akinsanya", title: "Tutor", img: Tutorpic11 },
        {name: "Blossom Adeyemi", title: "Tutor", img: Tutorpic1 },
        {name: "Shaddai Adeniran", title: "Tutor", img: Tutorpic14 },
        {name: "Opemipo Ojeleye", title: "Tutor", img: Tutorpic39 },
        {name: "Kemisola David", title: "Tutor", img: Tutorpic37 },
        {name: "Olumide Adisa", title: "Tutor", img: Tutorpic38 },
        {name: "Iseoluwa Akinduko", title: "Tutor", img: Tutorpic35 },
        {name: "Seyi Afolayan", title: "Tutor", img: Tutorpic32 },
        {name: "Faith Jimoh", title: "Tutor", img: Tutorpic33 },
        ];
  return (
    <div>
        <Navbar />
        <div className="meet_the_team_cont h-screen ">

            {/* Meet The Team Header */}
            <div className="meet_team_header pt-56 py-20 flex flex-col justify-center items-center mb-16">
            <h1 className="text-4xl px-4 md:px-0 w-full md:w-1/2 text-tltwhite text-center font-bold ">We bring a <span className="text-tltorange">wealth</span> of experience from a wide range <span className="text-tltorange">background</span>.</h1>
            <p className="text-center w-full px-4 text-sm md:text-base md:w-2/5 text-tltwhite">
            We are a group of passionate individuals working together to achieve a common goal. Get to know the faces behind out success.
            </p>
            </div>

            {/* Employee Of The Month */}
            <div className="employee_of_the_month_img flex justify-center items-center mb-16">
                <img src={EmployeeOfTheMonth} alt="Employee Of The Month" className="w-11/12 rounded-xl" />
            </div>

            {/* The Team */}
            <div className=" px-0 md:px-12">
                <h2 className="font-semibold text-3xl text-center md:text-left text-tltorange mb-5">
                    Our Team
                </h2>
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
