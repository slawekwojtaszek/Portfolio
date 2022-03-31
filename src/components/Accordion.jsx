import React from "react";
import { useState, useEffect } from "react";
import "../css/Accordion.css";

function Accordion({ title, content }) {
   const [isActive, setisActive] = useState(null);
   return (
      <div className='accordion'>
         <div
            className='question-cont'
            onClick={() => {
               setisActive(!isActive);
            }}>
            <div className='question '>{title}</div>
            <div className={isActive ? "open rotate-in-center" : "open"}>
               {isActive ? "-" : "+"}
            </div>
         </div>
         {isActive && (
            <div className='answer-cont '>
               <p>{content}</p>
            </div>
         )}
      </div>
   );
}

export default Accordion;
