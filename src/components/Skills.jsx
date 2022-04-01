import React from "react";
import { useState } from "react";
import QuickAccessBox from "./QuickAccessBox";
import "../css/Skills.css";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import Button from "./Button";

function Skills({ onClick, isClose }) {
   const [isHard, setisHard] = useState(true);
   const [isSoft, setisSoft] = useState(true);

   //Implement active button feature later on//

   const showHard = (e) => {
      if (!isHard || isHard) {
         setisHard(true);
         setisSoft(false);
      }
   };

   const showSoft = () => {
      if (!isSoft || isSoft) {
         setisHard(false);
         setisSoft(true);
      }
   };

   const showAll = () => {
      if (!isSoft || (isSoft && !isHard) || isHard) {
         setisHard(true);
         setisSoft(true);
      }
   };

   return (
      <>
         <div className='skills-container slide-in-right'>
            <div className='buttons'>
               <Button
                  onClick={showHard}
                  content={"Hard Skills"}
                  className={"btn-normal hard"}
               />
               <Button
                  onClick={showSoft}
                  content={"Soft Skills"}
                  className={"btn-normal soft"}
               />
               <Button
                  onClick={showAll}
                  content={"Show All"}
                  className={"btn-normal all"}
               />
            </div>
            {isHard ? <HardSkills /> : null}
            {isSoft ? <SoftSkills /> : null}
         </div>

         <QuickAccessBox />
      </>
   );
}

export default Skills;
