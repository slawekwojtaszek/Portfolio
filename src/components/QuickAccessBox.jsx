import React from "react";
import "../css/QuickAccessBox.css";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoDocument } from "react-icons/io5";

import Pdf from "../../src/test.pdf";

function QuickAccessBox() {
   return (
      <>
         <div className='box-container stick'>
            <div className='box'>
               <Link to='/portfolio'>
                  <div className='portfolio'>
                     <div className='icon'>
                        <FaEye />
                     </div>
                     <div className='des'>Portfolio</div>
                  </div>
               </Link>

               <Link to='/skills'>
                  <div className='skills'>
                     <div className='icon'>
                        <FaListUl />
                     </div>
                     <div className='des'>Skills</div>
                  </div>
               </Link>
               <a href={Pdf} target='blank'>
                  <div className='me'>
                     <div className='icon'>
                        <IoDocument />
                     </div>
                     <div className='des'>Download CV</div>
                  </div>
               </a>
            </div>
         </div>
      </>
   );
}

export default QuickAccessBox;
