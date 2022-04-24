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

import { BsFillFileEarmarkCodeFill } from "react-icons/bs";

function HardSkills({ isHard }) {
   return (
      <>
         <div className='hard-skills'>
            <SingleSkill
               className={"react"}
               icon={<SiReact />}
               name={"React"}
               skillType={"Hard Skill"}
               list1={`Understanding JSX`}
               list2={`Good knowledge of States and Props`}
               list3={`Virtual DOM and Event Handlers`}
               list4={`Functional and Class components`}
               list5={`Using React Hooks`}
               list6={`State management using Context and Reducer`}
               list7={`Fetching data using REST API`}
               list8={`Using Routes and React Router DOM`}
               list9={`Understanding of Redux`}
            />
            <SingleSkill
               className={"javascript"}
               icon={<SiJavascript />}
               name={"Javascript"}
               skillType={"Hard Skill"}
               list1={`Data types, variablaes, operators, etc`}
               list2={`DOM Manipulation and event handlers`}
               list3={`Accessing, changing and looping through Arrays`}
               list4={`Use of multiple methods, e.g. Map, Filter, Push, etc`}
               list5={`Understanding IIFE and Callbacks`}
               list6={`Recognizible Object Oriented Programming`}
               list7={`Local and Global Scope consequences`}
               list8={`Familiar Async & Await`}
            />
            <SingleSkill
               className={"css"}
               icon={<SiCss3 />}
               name={"CSS 3"}
               skillType={"Hard Skill"}
               list1={`Understanding the Box Model and its consequence`}
               list2={`Very good knowlegede of Flexbox Layout and Grid`}
               list3={`Media Queries and Responsive Web Design`}
               list4={`Comprehensive knowledge of dozens CSS properties`}
               list5={`Familiar with dozens properties`}
               list6-={`Pre-processor SASS and SCSS`}
               list7={`Aware of conventions like BEM`}
            />
            <SingleSkill
               className={"html"}
               icon={<SiHtml5 />}
               name={"HTML 5"}
               skillType={"Hard Skill"}
               list1={`Understanding the Semantic elements and structure`}
               list2={`Input types, attributes and forms.`}
               list3={`Using Local Storage`}
               list4={`Familiar with dozens atributes`}
               list5={`DOCTYPE Declaration`}
            />
            <SingleSkill
               className={"concepts"}
               icon={<BsFillFileEarmarkCodeFill />}
               name={"Concepts"}
               skillType={"Hard Skill"}
               list1={`Server-Client Communcation, how Web works`}
               list2={`Git Control Version`}
               list3={`Domains and Hosting`}
               list4={`Basic of Object Oriented Programming`}
               list5={`Importance of seperation conerns`}
               list6={`Naming conventions like camelCase or handleClick, etc`}
            />
            <div className='space'></div>
         </div>
      </>
   );
}

export default HardSkills;
