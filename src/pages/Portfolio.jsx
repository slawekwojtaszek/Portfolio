import React from "react";
import Navbar from "./Navbar";
import "../css/Portfolio.css";
import QuickAccessBox from "./QuickAccessBox";

function Portfolio({ isClose, onClick }) {
   return (
      <>
         <div className='portfolio-container'>
            <Navbar onClick={onClick} isClose={isClose} />
         </div>
      </>
   );
}

export default Portfolio;
