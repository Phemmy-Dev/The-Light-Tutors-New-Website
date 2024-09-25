import './Home.css'
// import bgImg from '../../assets/images/tltBg.jpg'
import bgImg2 from '../../../assets/images/heroBg2.jpg'
import Navbar from '../../Sections/NavBar/Navbar'
import Hero from '../../Sections/Hero/Hero'
import About from '../../Sections/About/About'
import CourseSection from '../../Sections/Courses/Courses'
import WhyChooseUs from '../../Sections/WhyChooseUs/WhyChooseUs'
import Cta from '../../Sections/CTA/Cta'
const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero title='Get quality tutoring through 1-on-1 Online Classes' text='Get one of our skilled and highly qualified tutors.' herobtn='Sign Up' contCname='hero_cont' sectionCname='hero_text' heroImg={bgImg2} />

      <About/>
      <CourseSection/>
      <WhyChooseUs/>
      <Cta/>
    </div>
  )
}

export default Home
