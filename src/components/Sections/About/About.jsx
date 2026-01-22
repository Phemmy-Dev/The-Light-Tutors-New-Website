import AboutProp from "./AboutProp"
import AboutSectionImg from '../../../assets/images/aboutSectionImg.jpg'
const About = () => {
  return (
    <div>
      <AboutProp about_preheading="About Us" about_heading="From Frustration to Confidence: Your Partner in Your Child's Learning Journey" about_text="We know how it feels to see your child struggle. The frustration. The worry that they might fall behind. The Light Tutors was founded by educators who believed there was a better way. We don't just teach subjects; we rebuild confidence and reignite the joy of learning through patient, one-on-one support. Our mission is to be your guide, turning anxiety into achievement and confusion into clarity." about_img={AboutSectionImg} contCname="about_cont" about_btn="Learn More About Us"/>
    </div>
  )
}

export default About
