import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import MobileMenu from "./MobileMenu";
import sun from "../img/sun.png";
import moon from "../img/moon.png";
import { getValue } from "@testing-library/user-event/dist/utils";

function Navbar({ isClose, onClick, newButton }) {
   // Dark Mode and Toggle

   let darkMode = localStorage.getItem("darkMode");
   let checked = localStorage.getItem("checked");

   const enableDarkMode = () => {
      document.body.classList.add("light-mode");
      localStorage.setItem("darkMode", "enabled");
   };
   const disableDarkMode = () => {
      document.body.classList.remove("light-mode");
      localStorage.setItem("darkMode", null);
   };

   const darkModeToggle = (e) => {
      let darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
         enableDarkMode();
         localStorage.setItem("checked", true);
      } else {
         disableDarkMode();
         localStorage.setItem("checked", false);
      }
   };

   if (darkMode === "enabled") {
      enableDarkMode();
   }

   useEffect(() => {
      const check = document.querySelector(".checkbox");
      if (checked === "true") {
         check.checked = true;
      } else if (checked === "false") {
         check.checked = false;
      }
   });

   // Show Hide the Top Bar Message

   let getMessage = localStorage.getItem("message");

   useEffect(() => {
      if (getMessage === "hide") {
         const bar = document.querySelector(".top-bar");
         bar.classList.add("hide");
      }
   });

   const disableMessage = () => {
      document.querySelector(".top-bar").classList.add("hide");
      console.log("jestem disable i mam message hide");
      localStorage.setItem("message", "hide");
   };
   const messageToggle = (e) => {
      if (getMessage !== "hide") {
         disableMessage();
      }
   };

   // localStorage.clear();

   return (
      <>
         <nav>
            <div className='top-bar'>
               <div className='message'>I hope you are having a great day!</div>
               <div className='x' onClick={messageToggle}>
                  X
               </div>
            </div>
            <div className='box8'></div>
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
