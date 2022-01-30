import React from "react";
import { useState } from "react";
import "./Navbar.css";
import {
   SiReact,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiTypescript,
} from "react-icons/si";

function Navbar() {
   const [isClose, setisClose] = useState(true);

   const newButton = () => {
      setisClose((isClose) => !isClose);
   };

   return (
      <>
         <nav className='nav-container'>
            <div className='top-container'>
               <div className='logo'>
                  <h1>voytashek.</h1>
               </div>
               <div className='icon-container'>
                  <div
                     className={isClose ? "menu-btn" : "menu-btn open"}
                     onClick={newButton}>
                     <div className='menu-btn__burger'></div>
                  </div>
               </div>
            </div>

            <div className='mobile-container'>
               <div className={isClose ? "sidemenu onOff " : "sidemenu"}>
                  <ul className='menu-mobile'>
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
                     <div className='cont'>
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
