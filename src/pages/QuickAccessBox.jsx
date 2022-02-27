import React from "react";
import "../css/QuickAccessBox.css";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

function QuickAccessBox() {
   return (
      <>
         <div className='box'>
            <Link to='/portfolio'>
               <div className='portfolio'>
                  <div className='icon'>
                     <FaEye />
                  </div>
                  <div className='des'>Portfolio</div>
               </div>
            </Link>
            <div className='skills'>
               <div className='icon'>
                  <FaListUl />
               </div>
               <div className='des'>Skills</div>
            </div>
            <div className='me'>
               <div className='icon'>
                  <GoPerson />
               </div>
               <div className='des'>Myself</div>
            </div>
         </div>
      </>
   );
}

export default QuickAccessBox;
