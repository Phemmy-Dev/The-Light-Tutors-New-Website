// import teamImg from '../../../assets/images/teamimg.jpg'
import CountUp from 'react-countup';
import Navbar from "../../Sections/NavBar/Navbar"
import Vbox from '../../widgets/Vision Box/Vbox';
import Footer from '../../Sections/Footer/Footer';
import operatePic from '../../../assets/images/operatepic.png'

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <section className="about_hero_cont h-screen my-32 md:pt-48 w-full">
        <div className="about_inner_cont flex flex-col md:flex-row justify-center items-center md:h-4/5 px-0 md:px-8 gap-10 mx-6">
          {/* Left section */}
          <div className=" flex items-center justify-center h-full w-full md:w-1/2">
            <div className="flex flex-col gap-10 px-5 py-10 w-full md:w-9/12 bg-tltwhite shadow-2xl rounded-3xl">
              <p className="text-tltorange font-medium">How It Started</p>
              <h2 className="text-4xl font-bold">Our Dream is to teach children to be <span className="text-tltorange">creative</span></h2>
              <p className="text-xs">The Light Tutors is a tutoring academy founded during the pandemic in a bid to make education accessible despite the challenges of social distancing and timing. We work towards bridging the gap in education, and are constantly looking for ways to make learning as easy and seamless as possible. TLT offers personalised tutoring sessions in Mathematics, English, and Sciences to Students in KS2 up to GCSE level, elementary (Grades K–5), middle (Grades 6–8) and high (Grades 9–12). We also offer bespoke content for languages such as Yoruba and French for beginners and intermediate Students.
              </p>
            </div>
          </div>

          {/* Right section */}
          <div className=" h-full w-full md:w-1/2 flex flex-col justify-center items-center gap-1">
            {/* right upper section */}
            <div className="w-full md:w-9/12">
              {/* <img src={teamImg} alt="" className='rounded-xl' /> */}
            </div>

            {/* right lower section */}
            <div className="shadow-2xl bg-tltwhite w-full md:w-9/12 p-4 my-2 rounded-xl">
            {/* Box Cont */}
            <div className="box_cont grid grid-cols-2 gap-4">
              {/* Boxes */}

              <div className="box1 bg-slate-100  rounded-lg px-3 py-3 flex flex-col justify-center ">
              <CountUp start={0} end={45} duration={5} suffix="+" className='text-2xl font-semibold'/>
              <p>Students</p>
              </div>

              <div className="box2 bg-slate-100 rounded-lg px-3 py-3 flex flex-col justify-center ">
              <CountUp start={0} end={30} duration={5} suffix="+" className='text-2xl font-semibold'/>
              <p className='text-xs'>Tutors</p>
              </div>

              <div className="box3 bg-slate-100  rounded-lg px-3 py-3 flex flex-col justify-center ">
              <CountUp start={0} end={5} duration={5} suffix="+" className='text-2xl font-semibold'/>
              <p className='text-xs'>Countries</p>
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className='flex flex-col md:flex-row gap-10 mx-6 md:mx-24 pt-48 md:pt-0' >
      <Vbox title={"Our Vision"} text={"To become the leading online tutoring company, known for our dedication to personalized education, fostering student success in global communities, and prioritizing the growth and well-being of our staff."} />

      <Vbox title={"Our Mission"} text={"To become the leading online tutoring company, known for our dedication to personalized education, fostering student success in global communities, and prioritizing the growth and well-being of our staff."} />
      </section>


      {/* How we operate */}
      <section className=' mx-6 md:mx-24 bg-slate-100 shadow-2xl rounded-2xl flex flex-col-reverse md:flex-row gap-10 py-8 px-6 pt-32'>
        {/* Left section */}
        <div className=' w-full md:w-1/2'>
          <p className='text-tltorange font-medium mb-4'>How We Operate</p>
          <p className='text-xs md:text-sm mb-4 text-justify'>Majority of our tutors are based in Africa and our Students are based in different countries, hence our services are provided remotely.
          </p>
          <p className='text-xs md:text-sm mb-4 text-justify'>
          We make use of online/remote teaching and learning. The minimum requirements for Students to be admitted is to have access to a computer, good internet, and the desire to achieve in a non-traditional classroom. Online teaching offers an ideal way of course delivery that is not constrained by time or geography, allowing Students to access education at any time and from any location. Learners say that the online environment makes it easier to incorporate education into their hectic schedules.
          </p>
          <p className='text-xs md:text-sm text-justify'>
          For many of today's Students, the opportunity to access a course from any computer with internet connectivity, 24 hours a day, seven days a week, is a huge plus.
          </p>
        </div>

        {/* Right section */}
        <div className=' w-full md:w-1/2'>
          <img src={operatePic} alt="" />
        </div>
      </section>

      {/* options */}
      <section className='flex '>
        
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage
