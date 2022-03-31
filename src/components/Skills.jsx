import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import QuickAccessBox from "./QuickAccessBox";
import "../css/Skills.css";
import SingleSkill from "./SingleSkill";
import {
   SiReact,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiTypescript,
   SiFigma,
   SiWechat,
} from "react-icons/si";
import { TiGroup } from "react-icons/ti";
import { GiScales } from "react-icons/gi";
import Accordion from "./Accordion";
import { FaPuzzlePiece, FaLightbulb, FaBrain } from "react-icons/fa";

function Skills({ onClick, isClose }) {
   const [isHard, setisHard] = useState(true);
   const [isSoft, setisSoft] = useState(true);

   const showHard = () => {
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

   const data = [
      {
         question: "Patience",
         answer:
            "Everything seems to be easier when you are calm, sometimes it just takes time to do it.",
         id: 6,
      },
   ];

   return (
      <>
         <div className='skills-container slide-in-right'>
            <div className='top'>
               <div className='buttons'>
                  <div className='btn hard' onClick={showHard}>
                     Hard Skills
                  </div>
                  <div className='btn soft' onClick={showSoft}>
                     Soft Skills
                  </div>
               </div>

               <div className={isHard ? "hard-skills" : "hard-skills hide"}>
                  <ul>
                     <SingleSkill
                        className={"react"}
                        icon={<SiReact />}
                        name={"React"}
                        list1={`Fundamentals of JSX, Virtual DOM, Components, State, Props, Events.`}
                        list2={`Importance of seperation the concerns`}
                        list3={`  Functional and Class components, understanding
                    this problem`}
                        list4={`Use of React Hooks`}
                        list5={`Fetch data from REST API`}
                        list6={`State management wiht Props and Context`}
                        list7={`Use of Routes and React Router DOM`}
                        list8={`Understanding of Redux`}
                        list9={`Basic knowledge od GraphQL`}
                     />
                     <SingleSkill
                        className={"javascript"}
                        icon={<SiJavascript />}
                        name={"Javascript"}
                        list1={`Data structure, data types, variablaes`}
                        list2={`Multiple methods inlcuding the most essential ones like map(), filter() or `}
                        list3={`flsflsmfl`}
                        list4={`Different type of functions including Arrow Function and Closures`}
                     />
                     <SingleSkill
                        className={"css"}
                        icon={<SiCss3 />}
                        name={"CSS 3"}
                        list1={`Data structure, data types, variablaes`}
                        list2={`Multiple methods inlcuding the most essential ones like map(), filter() or `}
                        list3={`flmsflsmlf`}
                        list4={`Different type of functions including Arrow Function and Closures`}
                     />
                     <SingleSkill
                        className={"html"}
                        icon={<SiHtml5 />}
                        name={"HTML 5"}
                        list1={`Data structure, data types, variablaes`}
                        list2={`Multiple methods inlcuding the most essential ones like map(), filter() or `}
                        list3={`fsfsmlfml`}
                        list4={`Different type of functions including Arrow Function and Closures`}
                     />
                  </ul>
               </div>
            </div>
            <div className='bottom'>
               <div className={isSoft ? "soft-skills" : "soft-skills hide"}>
                  <SingleSkill
                     className={"soft"}
                     icon={<SiWechat />}
                     name={"Communication"}
                     list1={`This is always the key.`}
                     list2={`Multiple methods inlcuding the most essential ones like map(), filter() or `}
                  />
                  <SingleSkill
                     className={"soft"}
                     icon={<TiGroup />}
                     name={"Leadership"}
                     list1={`I have a experience in managing a team of 30+ people.`}
                     list2={`I do understand how difrent we all are and that everyone requires difrent approach`}
                  />
                  <SingleSkill
                     className={"soft"}
                     icon={<FaPuzzlePiece />}
                     name={"Adaptability"}
                     list1={`Working in a Start-Up tought me how to adapt quickly and efficently. Everythign can change just in a day and you have to be ready for that`}
                  />
                  <SingleSkill
                     className={"soft"}
                     icon={<FaBrain />}
                     name={"Complex problem-solving"}
                     list1={`I have 5+ years of experience in Operations where I challenged
                  many difrent unexpected problems and had to resolve them
                  quickly`}
                  />
                  <SingleSkill
                     className={"soft"}
                     icon={<FaLightbulb />}
                     name={"Creatiity and innitiative"}
                     list1={`elo`}
                  />
                  <SingleSkill
                     className={"soft"}
                     icon={<GiScales />}
                     name={"Work Ethic"}
                     list1={`I strongly believe that we should do our 100% everywhere, all the time. It does not matter if this is our personal or professional life.`}
                  />
               </div>
            </div>
         </div>

         <QuickAccessBox />
      </>
   );
}

export default Skills;
