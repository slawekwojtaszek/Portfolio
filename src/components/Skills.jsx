import React from "react";
import { useState } from "react";
import QuickAccessBox from "./QuickAccessBox";
import "../css/Skills.css";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import Button from "./Button";
import Breadcrumps from "./Breadcrumps";

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
         {/* <Breadcrumps link={"/"} name={"Home"} current={"Skills"} /> */}
         <div className='skills-container '>
            <div className='buttons'>
               {isHard && !isSoft ? (
                  <Button
                     onClick={showHard}
                     content={"Hard Skills"}
                     className={"btn-normal hard-btn active"}
                  />
               ) : (
                  <Button
                     onClick={showHard}
                     content={"Hard Skills"}
                     className={"btn-normal hard-btn"}
                  />
               )}
               {!isHard && isSoft ? (
                  <Button
                     onClick={showSoft}
                     content={"Soft Skills"}
                     className={"btn-normal soft-btn active"}
                  />
               ) : (
                  <Button
                     onClick={showSoft}
                     content={"Soft Skills"}
                     className={"btn-normal soft-btn"}
                  />
               )}

               {isHard && isSoft ? (
                  <Button
                     onClick={showAll}
                     content={"Show All"}
                     className={"btn-normal all-btn active"}
                  />
               ) : (
                  <Button
                     onClick={showAll}
                     content={"Show All"}
                     className={"btn-normal all-btn"}
                  />
               )}
            </div>
            {isHard ? <HardSkills /> : null}
            {isSoft ? <SoftSkills /> : null}
         </div>

         <QuickAccessBox />
      </>
   );
}

export default Skills;
