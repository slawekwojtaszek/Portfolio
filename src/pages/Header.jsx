import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../css/Header.css";
import { Link } from "react-router-dom";
import QuickAccessBox from "./QuickAccessBox";

function Header() {
   return (
      <>
         <header>
            <div className='container'>
               <h1>Welcome to where Web is another form of art. </h1>
            </div>
            <QuickAccessBox />
         </header>
      </>
   );
}

export default Header;
