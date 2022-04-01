import React from "react";
import SingleSkill from "../components/SingleSkill";
import {
   SiReact,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiTypescript,
   SiFigma,
   SiWechat,
} from "react-icons/si";

function HardSkills({ isHard }) {
   return (
      <>
         <div className='hard-skills'>
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
            <div className='space'></div>
         </div>
      </>
   );
}

export default HardSkills;
