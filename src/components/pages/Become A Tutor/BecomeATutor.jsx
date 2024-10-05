import Navbar from "../../Sections/NavBar/Navbar"
import Hero from "../../Sections/Hero/Hero"
import teamImg from '../../../assets/images/teamimg.jpg'
import Footer from "../../Sections/Footer/Footer"
const BecomeATutor = () => {
  return (
    <div>
        <Navbar />
        <Hero title='Join The Light Tutors Team' text='We are delighted you are considering applying for the tutor role at The Light Tutors Ltd. ' contCname='hero_cont' sectionCname='hero_text' heroImg={teamImg} />
        <Footer />  
    </div>
  )
}

export default BecomeATutor
