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
               <h1>Blah blah blah blaah blablablaaah</h1>
               <h2>Pursuing Front End Developer / UX Designer path</h2>
               <div className='graphic'></div>
            </div>

            {/* <div className='container'>
               <div className='descripction'>The newest project</div>
               <div className='thumb'></div>
            </div> */}

            <QuickAccessBox />
         </header>
      </>
   );
}

export default Header;
