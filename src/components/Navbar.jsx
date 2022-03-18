import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import MobileMenu from "./MobileMenu";

function Navbar({ isClose, onClick, newButton }) {
   return (
      <>
         <nav>
            <div className='top-container'>
               <Link to='/' onClick={!isClose ? onClick : null}>
                  <div className='logo'>
                     <h1>voytashek.</h1>
                  </div>
               </Link>
               <div className='icon-container'>
                  <div
                     className={isClose ? "menu-btn" : "menu-btn open"}
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
