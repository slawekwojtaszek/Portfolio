import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import MobileMenu from "./MobileMenu";

function Navbar({ isClose, onClick, newButton }) {
   let darkMode = localStorage.getItem("darkMode");

   const enableDarkMode = () => {
      document.body.classList.add("light-mode");
      localStorage.setItem("darkMode", "enabled");
   };

   const disableDarkMode = () => {
      document.body.classList.remove("light-mode");
      localStorage.setItem("darkMode", null);
   };

   if (darkMode === "enabled") {
      enableDarkMode();
   }
   const darkModeToggle = () => {
      let darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
         enableDarkMode();
      } else {
         disableDarkMode();
      }
   };
   return (
      <>
         <nav>
            <div className='night' onClick={darkModeToggle}></div>
            <div className='top-container'>
               <Link to='/' onClick={!isClose ? onClick : null}>
                  <div className='logo'>
                     <h1>voytashek.</h1>
                  </div>
               </Link>
               <div className='icon-container'>
                  <div
                     className={isClose ? "menu-btn " : "menu-btn open"}
                     onClick={onClick}>
                     <div className='menu-btn__burger'></div>
                  </div>
               </div>
            </div>
         </nav>
         <MobileMenu
            isClose={isClose}
            onClick={onClick}
            newButton={newButton}
         />
      </>
   );
}

export default Navbar;
