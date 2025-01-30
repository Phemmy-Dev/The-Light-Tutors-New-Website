import Logo from '../../../assets/images/logo-wbg.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram , FaXTwitter  } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import data from '../../menuitems.json'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <div className="mt-20 bg-tltgreen py-10 px-8 ">
        <div className="footer_upper flex flex-col flex-wrap md:flex-nowrap md:flex-row justify-between gap-10 items-center md:mx-12">
        {/* Footer Logo and Social Links */}
        <motion.div
          className="footer_logo_and_text flex flex-col md:justify-center w-full md:w-1/3 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="logo">
            <img src={Logo} alt="The Light Tutors Logo" className="w-24 rounded-lg text-center" />
          </div>
          <div className="text text-gray-400 w-5/6 text-sm"></div>
          <div className="social_links flex gap-3">
            <a href="https://x.com/thelightutors">
              <FaXTwitter className="bg-tltorange px-2 rounded-full text-white font-semibold hover:bg-tltorange hover:text-white transition ease-in duration-300 w-8 h-8 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/the-light-tutors/posts/?feedView=all">
              <FaLinkedinIn className="bg-tltorange px-2 rounded-full font-semibold hover:bg-tltorange hover:text-white transition ease-in duration-300 text-white w-8 h-8 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/thelightutors/">
              <FaInstagram className="bg-tltorange px-2 rounded-full text-white font-semibold transition ease-in duration-300 w-8 h-8 cursor-pointer" />
            </a>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="footer_links w-full md:w-1/3 flex flex-col justify-center text-sm md:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.2 },
            },
          }}
        >
          <motion.h4
            className="text-white font-bold mb-3 text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Quick Links
          </motion.h4>
          <ul className="text-white flex flex-col gap-1">
            {data.map((item, index) => (
              <motion.li
                key={index}
                className="font-normal text-sm w-36 md:pl-6 text-gray-400 hover:translate-x-3 transition-transform duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link to={item.path} className={item.cName}>
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="contact_info w-full md:w-1/3 justify-center md:ml-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.4 },
            },
          }}
        >
          <motion.h4
            className="text-white font-bold mb-3 text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact Info
          </motion.h4>
          <div className="my-4 flex flex-col gap-3">
            <motion.div
              className="whatsapp_link flex items-center gap-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FaWhatsapp className="text-tltorange w-6 h-6" />
              <p className="text-white font-bold">+234-8153418503</p>
            </motion.div>
            <motion.div
              className="mail_link flex items-center gap-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <MdOutlineMail className="text-tltorange w-6 h-6" />
              <p className="text-white font- text-sm">thelightutorsltd@gmail.com</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

        {/* Copyright */}
        <motion.div
        className="copyright border-t-2 mt-3 border-gray-400 pt-2 mx-full md:mx-10 text-white text-center text-xs md:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>© {new Date().getFullYear()} Copyright | The Light Tutors Limited. All rights reserved</p>
      </motion.div>
    </div>
  )
}

export default Footer
