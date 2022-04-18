import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../css/Header.css";
import { Link } from "react-router-dom";
import QuickAccessBox from "./QuickAccessBox";
import Graphic from "./Graphic";

function Header() {
   return (
      <>
         <header>
            <div className='header-container scale-up-center'>
               <div className='info'>
                  <h1>
                     I create rich online experience focusing on UX and UI.
                  </h1>
                  <h2>Entry-Level Front End Developer</h2>
               </div>

               <div className='graphic'>
                  <Graphic />
               </div>
            </div>

            <div className='container'>
               <div className='descripction'>The newest project</div>
               <div className='thumb'></div>
            </div>

            <QuickAccessBox />
         </header>
      </>
   );
}

export default Header;
