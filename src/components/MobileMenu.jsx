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
} from "react-icons/si";

function MobileMenu({ isClose, onClick }) {
   const [isNight, setisNight] = useState(false);

   const nightMode = () => {
      if (!isNight) {
         setisNight((isNight) => isNight);
         document.body.classList.toggle("night-mode");
      }
   };

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
               </div>
               <div className='js'>
                  <SiJavascript />
               </div>
               <div className='html'>
                  <SiHtml5 />
               </div>
               <div className='css'>
                  <SiCss3 />
               </div>
               <div className='type-script'>
                  <SiTypescript />
               </div>
               <div className='figma'>
                  <SiFigma />
               </div>
            </div>
         </div>
      </div>
   );
}

export default MobileMenu;
