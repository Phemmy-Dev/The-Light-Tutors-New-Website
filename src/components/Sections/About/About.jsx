import AboutProp from "./AboutProp"
import AboutSectionImg from '../../../assets/images/aboutSectionImg.jpg'
const About = () => {
  return (
    <div>
      <AboutProp about_preheading="About Us" about_heading="Learn more about our efficient and highly qualified academy" about_text="The Light Tutors is a tutoring academy founded during the pandemic with a vision of giving bridging the gap in education, and overcoming the challenges posed by distance and timing." about_img={AboutSectionImg} contCname="about_cont" about_btn="Learn More"/>
    </div>
  )
}

export default About
