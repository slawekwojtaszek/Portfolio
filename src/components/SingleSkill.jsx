import React from "react";
import "../css/Skills.css";

function SingleSkill({
   icon,
   name,
   className,
   skillType,
   list1,
   list2,
   list3,
   list4,
   list5,
   list6,
   list7,
   list8,
   list9,
   list10,
}) {
   return (
      <div>
         <div className={`item ${className}`}>
            <div className='top-item'>
               <div className='logo'>{icon}</div>
               <div className='name'>{name}</div>
            </div>
            <div className='bottom-item'>
               {/* <h2>What have I learnt so far?</h2> */}

               {list1 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list1}</p>
                  </div>
               ) : null}
               {list2 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list2}</p>
                  </div>
               ) : null}
               {list3 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list3}</p>
                  </div>
               ) : null}
               {list4 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list4}</p>
                  </div>
               ) : null}
               {list5 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list5}</p>
                  </div>
               ) : null}
               {list6 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list6}</p>
                  </div>
               ) : null}
               {list7 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list7}</p>
                  </div>
               ) : null}
               {list8 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list8}</p>
                  </div>
               ) : null}
               {list9 ? (
                  <div className='list-element'>
                     <div className='dot'></div>
                     <p>{list9}</p>
                  </div>
               ) : null}
               <div className='skill-type'>
                  <p>{skillType}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SingleSkill;
