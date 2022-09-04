import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import {HiOutlineMenuAlt4} from "react-icons/hi"
import "./navbarStyle.css"
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa"

import logo from "../../assets/imoHolidays_logo.jpg"

function Navbar() {
  
  const [nav, setNev] = useState(false);
  const handleNav = ()=> setNev(!nav)
  
  return (
    <div className={nav ? "navbar navbar-bg": "navbar"}>
        <div className="logo">
            <img src={logo} alt="" />
            {/* <h2>Imo Holidays</h2> */}
        </div>
        <div className="nav-menu">
            <ul>
                <li>Home</li>
                <li>Tour Packages</li>
                <li>Hotel</li>
                <li>Visha</li>
                <li>Medical</li>
                <li>Air Ticket</li>
                <li>Umrah</li>
                <li>Contact Us</li>
            </ul>
        </div>
        {/* <div className="nav-icon">
            <BiSearch className="icon" />
            <BsPerson className="icon" />
        </div> */}

        <div className="hamburger" onClick={handleNav}>
              <HiOutlineMenuAlt4 className="icon" />
        </div>

        <div className={nav ? 'mobile-menu active': 'mobile-menu'} >
              <ul className="mobile-nev">
                  <li>Home</li>
                  <li>Tour Packages</li>
                  <li>Hotel</li>
                  <li>Visha</li>
                  <li>Medical</li>
                  <li>Air Ticket</li>
                  <li>Umrah</li>
                  <li>Contact Us</li>
                </ul>

            <div className="mobile-menu-button">
              <div className="menu-icon">
                  <button>Search</button>
                  <button>Account</button>
              </div>

              <div className="social-icon">
                  <FaFacebook className="icon"/>
                  <FaInstagram className="icon"/>
                  <FaTwitter className="icon"/>
                  <FaPinterest className="icon"/>
                  <FaYoutube className="icon"/>
              </div>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar