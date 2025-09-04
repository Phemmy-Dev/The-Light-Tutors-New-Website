import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import data from '../../menuitems.json'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/Logo.png'
const Navbar = () => {  
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }
    return (
    <>
     <nav className='nav_bar flex justify-between items-center py-4 px-5 rounded-xl w-11/12 fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-tltwhite'>
                <div className="logo">
                    <Link to={'/'} className='decoration-none'>
                    <img 
                    src={Logo} 
                    alt="The Light Tutors Logo" 
                    className='w-44 flex' /></Link>
                    
                </div>


                <div className="hamburger" onClick={toggleNavbar}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <div className={`nav-items  ${isOpen ? 'active' : ''}`}>
                    <ul className='flex list-none gap-2 justify-between items-center'>
                        {data.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className={item.cName}>
                                {item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
    </>
    )
}

export default Navbar
