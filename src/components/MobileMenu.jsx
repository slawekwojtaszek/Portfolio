import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import "../css/MobileMenu.css";
import {
   SiReact,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiTypescript,
   SiFigma,
   SiAdobephotoshop,
   SiAdobeillustrator,
   SiAdobexd,
} from "react-icons/si";

function MobileMenu({ isClose, onClick }) {
   return (
      <div className={isClose ? "bottom-container onOff " : "bottom-container"}>
         <ul className='list'>
            <li>
               <Link to='/' onClick={onClick}>
                  Home
               </Link>
            </li>
            <li>
               <Link to='/portfolio' onClick={onClick}>
                  Portfolio
               </Link>
            </li>
            <li>
               <Link to='/skills' onClick={onClick}>
                  Skills
               </Link>
            </li>
            <li>
               <Link to='/about' onClick={onClick}>
                  About
               </Link>
            </li>
            <li>
               <Link to='/' onClick={onClick}>
                  Contact
               </Link>
            </li>
         </ul>

         <div className='technologies-mobile'>
            <h1>Technologies used</h1>
            <div className='technologies-container'>
               <div className='react'>
                  <SiReact />
                  <p>React JS</p>
               </div>
               <div className='js'>
                  <SiJavascript />
                  <p>JavaScript</p>
               </div>
               <div className='html'>
                  <SiHtml5 />
                  <p>HTML5</p>
               </div>
               <div className='css'>
                  <SiCss3 />
                  <p>CSS 3</p>
               </div>
               <div className='illustrator'>
                  <SiAdobeillustrator />
                  <p>Illustrator</p>
               </div>
               <div className='photoshop'>
                  <SiAdobephotoshop />
                  <p>Photoshop</p>
               </div>
               <div className='xd'>
                  <SiAdobexd />
                  <p>Xd</p>
               </div>
               <div className='figma'>
                  <SiFigma />
                  <p>Figma</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MobileMenu;
