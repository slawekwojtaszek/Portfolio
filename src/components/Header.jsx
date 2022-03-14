import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../css/Header.css";
import { Link } from "react-router-dom";
import QuickAccessBox from "./QuickAccessBox";

function Header() {
   return (
      <>
         <header>
            <div className='header-container scale-up-center'>
               <h1>I believe that Web is just another form of art.</h1>
               <h2>Pursuing Front End Developer / UX Designer path</h2>
            </div>
            <div className='container'>
               <div className='boxes'>
                  <div className='box1 scrolls'>BOX1</div>
               </div>
            </div>

            <QuickAccessBox />
         </header>
      </>
   );
}

export default Header;
