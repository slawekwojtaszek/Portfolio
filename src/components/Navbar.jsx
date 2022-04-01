import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import MobileMenu from "./MobileMenu";
import sun from "../img/sun.png";
import moon from "../img/moon.png";

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
   const darkModeToggle = (e) => {
      console.log(e.target);
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
            <div className='top-container'>
               <Link to='/' onClick={!isClose ? onClick : null}>
                  <div className='logo'>
                     <h1>voytashek.</h1>
                  </div>
               </Link>
               <input type='checkbox' id='checkbox' className='checkbox' />
               <label
                  htmlFor='checkbox'
                  className='label'
                  onClick={darkModeToggle}>
                  <div className='moon'></div>
                  <div className='sun'></div>
                  <div className='toggle'></div>
               </label>
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
