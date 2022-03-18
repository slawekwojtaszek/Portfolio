import React from "react";
import Navbar from "./Navbar";
import QuickAccessBox from "./QuickAccessBox";
import "../css/Skills.css";
import {
   SiReact,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiTypescript,
   SiFigma,
} from "react-icons/si";

function Skills({ onClick, isClose }) {
   return (
      <>
         <Navbar onClick={onClick} isClose={isClose} />
         <div className='skills-container slide-in-right'>
            <div className='top'>
               <div className='hard-skills'>
                  <ul>
                     <div className='item react'>
                        <div className='top-item'>
                           <div className='logo'>
                              <SiReact />
                           </div>
                           <div className='name'>React</div>
                        </div>

                        <div className='bottom-item'>
                           <h2>What do I know so far?</h2>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>
                                 Fundamentals like JSX, Virtual DOM, Components,
                                 State, Props, Events.
                              </p>
                           </div>

                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Importance of seperation the concerns</p>
                           </div>

                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>
                                 Functional and Class components, understanding{" "}
                                 <span className='mark'>this</span> problem
                              </p>
                           </div>

                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Use of React Hooks</p>
                           </div>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Fetch data from REST API</p>
                           </div>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>State management wiht Props and Context</p>
                           </div>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Use of Routes and React Router DOM</p>
                           </div>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Understanding of Redux</p>
                           </div>

                           <div className='list-element'>
                              <div className='dot'></div>{" "}
                              <p>Basic knowledge od GraphQL</p>
                           </div>
                        </div>
                     </div>
                     <div className='item javascript'>
                        <div className='top-item'>
                           <div className='logo'>
                              <SiJavascript />
                           </div>
                           <div className='name'>Javascript</div>
                        </div>

                        <div className='bottom-item'>
                           <h2>What do I know so far?</h2>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>
                                 Fundamentals like JSX, Virtual DOM, Components,
                                 State, Props, Events.
                              </p>
                           </div>

                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Importance of seperation the concerns</p>
                           </div>

                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>
                                 Functional and Class components, understanding{" "}
                                 <span className='mark'>this</span> problem
                              </p>
                           </div>

                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Use of React Hooks</p>
                           </div>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Fetch data from REST API</p>
                           </div>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>State management wiht Props and Context</p>
                           </div>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Use of Routes and React Router DOM</p>
                           </div>
                           <div className='list-element'>
                              <div className='dot'></div>
                              <p>Understanding of Redux</p>
                           </div>

                           <div className='list-element'>
                              <div className='dot'></div>{" "}
                              <p>Basic knowledge od GraphQL</p>
                           </div>
                        </div>
                     </div>
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
