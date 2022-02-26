import React from "react";

import { Link } from "react-router-dom";
import "../css/Header.css";
import { FaEye } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

function Header() {
   return (
      <>
         <header>
            <div className='container'>
               <h1>Welcome to where Web is another form of art. </h1>
            </div>
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
         </header>
      </>
   );
}

export default Header;
