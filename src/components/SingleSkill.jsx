import React from "react";
import "../css/Skills.css";

function SingleSkill({
   icon,
   name,
   className,
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
         {" "}
         <div className={`item ${className}`}>
            <div className='top-item'>
               <div className='logo'>{icon}</div>
               <div className='name'>{name}</div>
            </div>
            <div className='bottom-item'>
               <h2>What have I learnt so far?</h2>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list1}</p>
               </div>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list2}</p>
               </div>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list3}</p>
               </div>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list4}</p>
               </div>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list5}</p>
               </div>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list6}</p>
               </div>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list7}</p>
               </div>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list8}</p>
               </div>
               <div className='list-element'>
                  <div className='dot'></div>
                  <p>{list9}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SingleSkill;
