import Navbar from "../../Sections/NavBar/Navbar"
import errorPageImg from '../../../assets/images/error page.png'
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import Footer from "../../Sections/Footer/Footer"
const PageNotFound = () => {
  return (
    <div>
      <Navbar />  
      <div className="content flex flex-col justify-center items-center my-32 mx-10 md:flex-row">
        <div className="left_section w-full md:w-1/2">
          <img src={errorPageImg} alt="" className=" w-full md:w-3/5" />
        </div>

        <div className="right_section w-full md:w-1/2">
        <h1 className="text-9xl font-bold text-tltgreen">404</h1>
        <p className="text-3xl font-semibold text-tltgreen">We couldn`t find the page you were looking for</p>
        <div className="flex items-center gap-2 my-2">
        <TiArrowBack  className="bg-tltgreen text-tltwhite w-10 h-10 rounded-full cursor-pointer"/>
        <Link to="/">
        <p className="bg-tltgreen text-tltwhite rounded-full px-3 py-2 font-semibold capitalize">Back To Homepage</p>
        </Link>
        </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default PageNotFound
