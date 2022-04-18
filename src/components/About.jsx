import React from "react";
import Navbar from "./Navbar";
import QuickAccessBox from "./QuickAccessBox";
import Accordion from "./Accordion";
import Breadcrumps from "./Breadcrumps";
import "../css/About.css";

import Photo from "../img/sla.png";

function About({ onClick, isClose }) {
   const data = [
      {
         question: "Why Tech World?",
         answer:
            "We live in the Fourth Industrial Revolution and I want to be a part of it. The World is changing rapidly and I don't want to lose the momentum",
         id: 0,
      },
      {
         question: "Why UI/UX and Frontend?",
         answer:
            "Everything started during my hitchhiking trip around the Europe. After seeing countless logo types and brand identification in over 15 countries, I understood that I really like it. When I returned home I started to work more with design. I think I have a good visual taste and I am hungry for getting more skills.",
         id: 1,
      },
      {
         question: "What is my main passion?",
         answer:
            "Sound. I explore difrent music teritories using my hardware instruments that consists of synthesizers, samplers, drum machines and many more!",
         id: 2,
      },
      {
         question: "Ok, so what music do you like?",
         answer:
            "We live too short to fully discover music out there. I try to widen my horizons everyday and I like anything that is good from Philip Glass to Ryoji Ikeda",
         id: 3,
      },
      {
         question: "Do you have more question?",
         answer: "Just click the button below and let me know!",
         id: 4,
      },
   ];
   return (
      <>
         <Breadcrumps link={"/"} name={"Home"} current={"About"} />
         <div className='about-container slide-in-right '>
            <div className='top-section'>
               {/* <div className='bar'>
                  <h1>About</h1>
               </div> */}
               <div className='title'>
                  <h1>Hello, I am Slawek</h1>
                  <h2>and I love pushing the buttons!</h2>
               </div>
               <div className='photo'>
                  {" "}
                  <img src={Photo} alt='' />
               </div>
            </div>

            <div className='middle-section'></div>

            <div className='bottom-section'>
               {data.map(({ question, answer, id }) => (
                  <Accordion key={id} title={question} content={answer} />
               ))}
            </div>
            {/* <div className='bottom-section'></div> */}
         </div>
         <QuickAccessBox />
      </>
   );
}

export default About;
