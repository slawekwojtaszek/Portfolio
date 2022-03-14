import React from "react";
import "../css/Skills.css";
import Navbar from "./Navbar";
import QuickAccessBox from "./QuickAccessBox";

function Skills({ onClick, isClose }) {
   return (
      <>
         <Navbar onClick={onClick} isClose={isClose} />

         <div className='skills-container slide-in-right'>
            <div className='top-section'>
               <div className='container1'>
                  {" "}
                  <div className='section1'>
                     I am Slawek Wojtaszek, I'm passionate about design and web
                     development
                  </div>
               </div>
               <div className='container2'>
                  <div className='photo'>PHOTO</div>
                  <div className='desc'>
                     <div className='section2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia quae assumenda explicabo magnam rerum laudantium
                        perferendis itaque porro consequatur voluptates,
                        adipisci repellat nam quisquam possimus, aliquid omnis
                        hic cumque quo?
                     </div>
                     <div className='section3'>
                        <button>button1</button>
                        <button>button2</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className='middle-section'>
               {/* <div className='skills'>
                  <p>Analytical thinking and innovation</p>
                  <p>Resillence, stress tolerance and flexibility</p>
                  <p>Critical thinking and analysis</p>
                  <p>Reasoning, prolem-solving and ideation</p>
               </div> */}
            </div>
            <div className='bottom-section'></div>
         </div>
         <QuickAccessBox />
      </>
   );
}

export default Skills;
