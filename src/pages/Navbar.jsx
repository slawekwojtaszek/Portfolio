import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import {
   SiReact,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiTypescript,
   SiFigma,
} from "react-icons/si";

function Navbar({ isClose, onClick, myKlasa }) {
   return (
      <>
         <nav className='nav-container'>
            <div className='top-container'>
               <Link to='/'>
                  <div className='logo'>
                     <h1>voytashek.</h1>
                  </div>{" "}
               </Link>

               <div className='icon-container'>
                  <div
                     className={isClose ? "menu-btn" : "menu-btn open"}
                     onClick={onClick}>
                     <div className='menu-btn__burger'></div>
                  </div>
               </div>
            </div>

            <div
               className={
                  isClose ? "bottom-container onOff " : "bottom-container"
               }>
               <ul className='list'>
                  <li>
                     {" "}
                     <a href='#'>Home</a>
                  </li>
                  <li>
                     {" "}
                     <a href=''>Projects</a>
                  </li>
                  <li>
                     {" "}
                     <a href='#'>CV</a>
                  </li>
                  <li>
                     {" "}
                     <a href='#'>About</a>
                  </li>
                  <li>
                     {" "}
                     <a href='#'>Contact</a>
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

            {/* <div className='menu'>
                  <ul>
                     <li>
                        {" "}
                        <a href='#'>Stasdsrt</a>
                     </li>
                     <li>
                        {" "}
                        <a href='#'>About</a>
                     </li>
                     <li>
                        {" "}
                        <a href='#'>Contact</a>
                     </li>
                     <li>
                        {" "}
                        <a href='#'>Why</a>
                     </li>
                     <li>
                        {" "}
                        <a href='#'>Test</a>
                     </li>
                  </ul>
               </div> */}
         </nav>
      </>
   );
}

export default Navbar;
