import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
 
  const[mobileMenu, setMobileMenu] = useState(false)
   
  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)

  }
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><ScrollLink to="home" smooth={true}offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="program" smooth={true} offset={-260}duration={500}>Program</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true}offset={-150} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to="campus" smooth={true}offset={-260} duration={500}>Campus</ScrollLink></li>
        <li><ScrollLink to="testimonials" smooth={true} offset={-260}duration={500}>Testimonials</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} offset={-260}duration={500} className="btn">Contact Us</ScrollLink></li>
      </ul>
      <img src={menu_icon}className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
