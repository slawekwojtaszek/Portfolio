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
} from "react-icons/si";
import Accordion from "./Accordion";

function Skills({ onClick, isClose }) {
   const data = [
      {
         question: "How can I help your team?",
         answer: "odpowiedz1",
         id: 0,
      },
      {
         question: "pytanie2",
         answer: "odpowiedz2",
         id: 1,
      },
      {
         question: "pytanie3",
         answer: "odpowiedz3",
         id: 2,
      },
      {
         question: "pytanie3",
         answer: "odpowiedz3",
         id: 2,
      },
   ];
   return (
      <>
         {data.map(({ question, answer, id }) => (
            <Accordion key={id} title={question} content={answer} />
         ))}

         <div className='skills-container slide-in-right'>
            <div className='top'>
               <div className='hard-skills'>
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
                        list3={``}
                        list4={`Different type of functions including Arrow Function and Closures`}
                        list5={`Understanding scope`}
                        list6={``}
                        list7={``}
                        list8={``}
                        list9={``}
                     />
                     <SingleSkill
                        className={"css"}
                        icon={<SiCss3 />}
                        name={"CSS 3"}
                        list1={`Data structure, data types, variablaes`}
                        list2={`Multiple methods inlcuding the most essential ones like map(), filter() or `}
                        list3={``}
                        list4={`Different type of functions including Arrow Function and Closures`}
                        list5={`Understanding scope`}
                        list6={``}
                        list7={``}
                        list8={``}
                        list9={``}
                     />
                     <SingleSkill
                        className={"html"}
                        icon={<SiHtml5 />}
                        name={"HTML 5"}
                        list1={`Data structure, data types, variablaes`}
                        list2={`Multiple methods inlcuding the most essential ones like map(), filter() or `}
                        list3={``}
                        list4={`Different type of functions including Arrow Function and Closures`}
                        list5={`Understanding scope`}
                        list6={``}
                        list7={``}
                        list8={``}
                        list9={``}
                     />
                  </ul>
               </div>
            </div>
            <div className='bottom'>BOTTOM</div>
         </div>

         <QuickAccessBox />
      </>
   );
}

export default Skills;
