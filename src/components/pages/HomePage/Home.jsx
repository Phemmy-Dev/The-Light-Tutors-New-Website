import './Home.css'
import bgImg3 from '../../../assets/images/heroBg3.jpg'
import Navbar from '../../Sections/NavBar/Navbar'
import Hero from '../../Sections/Hero/Hero'
import Counter from '../../widgets/Counter/Counter'
import About from '../../Sections/About/About'
import CourseSection from '../../Sections/Courses/Courses'
import WhyChooseUs from '../../Sections/WhyChooseUs/WhyChooseUs'
import Testimonial from '../../Sections/Testimonial/Testimonial'
import Cta from '../../Sections/CTA/Cta'
import Footer from '../../Sections/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero title='Quality tutoring through 1-on-1 Online Classes' text='Get one of our skilled and highly qualified tutors.' herobtn='Sign Up' contCname='hero_cont' sectionCname='hero_text' heroImg={bgImg3} />
      <Counter/>
      {/* <div className=" py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-tltgreen text-white text-center py-4">
          <h2 className="text-2xl font-bold">🎄 Holiday Closure Notice 🎄</h2>
        </div>
        <div className="p-6 sm:p-10 text-center">
          <p className="text-gray-700 text-lg">
            As the festive season approaches, we want to take a moment to thank you for being an integral part of our year.
            We would also like to inform you that
            <strong className="text-tltorange"> The Light Tutors Ltd. </strong>
            will be closed for the holidays from
          </p>
          <div className="my-6 flex justify-center flex-col gap-6 md:flex-row">
            <div className="bg-green-50 border border-green-300 p-4 rounded-lg">
              <h3 className="text-tltgreen text-lg font-semibold">
                Last Working Day
              </h3>
              <p className="text-orange-500 text-lg font-bold">
                Saturday, 21st December 2024
              </p>
            </div>
            <div className="bg-green-50 border border-green-300 p-4 rounded-lg">
              <h3 className="text-tltgreen text-lg font-semibold">
                Resumption of Activities
              </h3>
              <p className="text-orange-500 text-lg font-bold">
                Monday, 6th January 2025
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-lg">
          We deeply appreciate your support and hard work throughout the year and wish you a joyful and restful holiday season. Here`s to a wonderful and successful new year ahead!
          </p>
          <p className="mt-4 font-bold text-gray-800">Warm regards,</p>
          <p className="text-gray-800">The Light Tutors Ltd.</p>
        </div>
      </div>
    </div> */}
      <About/>
      <CourseSection/>
      <WhyChooseUs/>
      <Testimonial/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home
