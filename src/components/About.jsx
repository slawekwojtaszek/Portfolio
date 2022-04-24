import React, { useState, useEffect } from "react";
import QuickAccessBox from "./QuickAccessBox";
import Accordion from "./Accordion";
import Breadcrumps from "./Breadcrumps";
import "../css/About.css";

import Photo from "../img/sla.png";

import Cheese from "../img/cheese.png";

function About({ onClick, isClose }) {
   const likes = [
      {
         title: " pushing the buttons",
         icon: "elo",
         id: 0,
      },
      {
         title: " cheese",
         icon: Cheese,
         id: 1,
      },
      {
         title: " siemka",
         icon: "elo",
         id: 2,
      },
      {
         title: " siemka",
         icon: "elo",
         id: 3,
      },
      {
         title: " siemka",
         icon: "elo",
         id: 4,
      },
      {
         title: " siemka",
         icon: "elo",
         id: 5,
      },
      {
         title: " siemka",
         icon: "elo",
         id: 6,
      },
      {
         title: " siemka",
         icon: "elo",
         id: 7,
      },
   ];

   const [counter, setCounter] = useState(0);

   let interval;
   const changeNumber = () => {
      interval = setInterval(() => {
         setCounter((counter) => counter + 1);
      }, 2000);
   };

   useEffect(() => {
      changeNumber();
   }, []);

   setTimeout(() => {
      clearInterval(interval);
   }, 8000);

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
         {/* <Breadcrumps link={"/"} name={"Home"} current={"About"} /> */}
         <div className='about-container '>
            <div className='top-section'>
               <div className='title'>
                  <h1>Hello, I am Slawek</h1>
                  <div className='whatlove'>
                     <h2>
                        and I love
                        <span className='slide-in-bck-center'>
                           {likes[counter].title}
                        </span>
                     </h2>
                     <span>
                        <img src={likes[counter].icon} alt='' />
                     </span>
                  </div>
               </div>
               <div className='photo'>{/* <img src='' alt='' /> */}</div>
            </div>

            <div className='middle-section'></div>

            <div className='bottom-section'>
               <div className='info'>
                  <h1>You've got questions?</h1>
                  <h2>I've got answers</h2>
               </div>

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
