import Navbar from "../../Sections/NavBar/Navbar"
import BecomeATutorWidget from "../../widgets/BecomeATutor/BecomeATutorWidget"
import teamImg2 from '../../../assets/images/teamimg.jpg'

const Becomeatutor = () => {
  return (
    <div>
        <Navbar />
        <BecomeATutorWidget  title='Join The Light Tutors Team' subtext='Thank you for your interest in joining The Light Tutors Ltd. as a tutor. While we truly appreciate your enthusiasm, we are not accepting applications for this position at the moment. ' subsubtext="We encourage you to check back in the future for any new opportunities, and we wish you the best of luck in your endeavors." batImg={teamImg2} />
        {/* <Footer /> */}
    </div>
  )
}

export default Becomeatutor
