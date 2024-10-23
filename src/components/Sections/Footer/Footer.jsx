import Logo from '../../../assets/images/logo-wbg.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram , FaXTwitter  } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import data from '../../menuitems.json'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="mt-20 bg-tltgreen py-10 px-8">
        <div className="footer_upper flex flex-col md:flex-row justify-between  gap-10 items-center ">
            {/* Footer Logo */}
            <div className="footer_logo_and_text flex flex-col md:justify-center w-full md:w-1/3 gap-3 ">
                <div className="logo">
                    <img src={Logo} alt="The Light Tutors Logo" className='w-24 rounded-lg text-center' />
                </div>
                <div className="text text-gray-400 w-5/6 text-sm">
                    
                </div>
                <div className="social_links flex gap-3 ">
                <a href="https://x.com/thelightutors"><FaXTwitter className='bg-tltorange px-2 rounded-full text-white font-semibold hover:bg-tltorange hover:text-white transition ease-in duration-300 w-8 h-8 cursor-pointer'/></a>
                <a href="https://www.linkedin.com/company/the-light-tutors/posts/?feedView=all"><FaLinkedinIn className='bg-tltorange px-2 rounded-full  font-semibold hover:bg-tltorange hover:text-white transition ease-in duration-300 text-white w-8 h-8 cursor-pointer'/></a>
                <a href="https://www.instagram.com/thelightutors/"><FaInstagram className='bg-tltorange px-2 rounded-full text-white font-semibold  transition ease-in duration-300  w-8 h-8 cursor-pointer'/></a>

                </div>
            </div>
            {/* Footer Links */}
            <div className="footer_links w-full md:w-1/3 flex flex-col justify-center text-sm">
                <h4 className="text-white font-bold mb-3 text-xl">Quick Links</h4>
                <ul className='text-white flex flex-col gap-1'>
                {data.map((item, index) => (
                            <li key={index} className='font-normal text-sm w-36 pl-2 text-gray-400 hover:translate-x-3 transition-transform duration-300'>
                                <Link to={item.path} className={` ${item.cName} `}>
                                {item.title}</Link>
                            </li>
                        ))}
                </ul>
            </div>
            {/* Contact Info */}
            <div className="contact_info w-full md:w-1/3 justify-center">
            <h4 className='text-white font-bold mb-3 text-xl'>Contact Info</h4>
            {/* Contact Links */}
            <div className='my-4 flex flex-col gap-3'>
                <div className="whatsapp_link flex items-center gap-3">
                    <FaWhatsapp className='text-tltorange w-6 h-6' />
                    <p className='text-white font-bold'>+234-8153418503</p>
                </div>
                <div className="mail_link flex items-center gap-3">
                <MdOutlineMail className='text-tltorange w-6 h-6'/>
                <p className='text-white font- text-sm'>thelightutorsltd@gmail.com</p>
                </div>
            </div>
            </div>
            
        </div>

        {/* Copyright */}
        <div className="copyright border-t-2 mt-3 border-gray-400 pt-2 mx-full md:mx-10 text-white text-center text-xs md:text-base">
            <p>© 2024 Copyright | The Light Tutors Limited. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
