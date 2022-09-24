/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import './Navbar.css'
import Navbars from './Navbars'

/**
* @author
* @function Navbar
**/

const NavbarComp = (props) => {
 
  const [, setNav] = useState(false);
  const [, setNavbar] = useState(false);
 
  const changeNavColor = () => {
    if(window.scrollY >= 100) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  const changeMargin = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavColor);
  window.addEventListener('scroll', changeMargin);

 {/* const FooterIconListItems = [
    ["https://instagram.com/the_miracle_solutions", "fa-facebook-f"], ["https://instagram.com/the_miracle_solutions", "fa-twitter"],
    ["https://instagram.com/the_miracle_solutions", "fa-instagram"], ["https://instagram.com/the_miracle_solutions", "fa-linkedin-in"]
] */}
{/* 
const renderIconListItems = () => {
  return (  FooterIconListItems.map((val, index) => { return <li className="social-media" key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> <i className={`fab ${val[1]} font-icons`} aria-hidden="true"></i> </a> </li> }) )
}
*/}

  return (
    <>
 <Navbars />
    

  
  </>
  )
}


export default NavbarComp