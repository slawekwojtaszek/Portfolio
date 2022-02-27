import React from "react";
import "../css/Portfolio.css";

function PortfolioItem({ title, descripction, icon1, icon2, bgphoto }) {
   return (
      <section className='single-item slide-in-right '>
         <div className='single-item-des'>
            {" "}
            <div className='single-item-des-text'>
               <div className='container'>
                  <h1>{title}</h1>
                  <h2>{descripction}</h2>
               </div>
               <div className='single-item-links'>
                  <div className='live'>
                     <div className='single-item-icon'>{icon1}</div>
                     <div className='des'>See Live</div>
                  </div>
                  <div className='live'>
                     <div className='single-item-icon'>{icon2}</div>
                     <div className='des'>See on Github</div>
                  </div>
               </div>
            </div>
         </div>
         <div className='single-item-photo'>
            <img src={bgphoto} alt='' />
         </div>
      </section>
   );
}

export default PortfolioItem;
