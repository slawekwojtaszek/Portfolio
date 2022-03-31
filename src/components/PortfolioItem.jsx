import React from "react";
import "../css/Portfolio.css";
import { Link } from "react-router-dom";

function PortfolioItem({
   title,
   icon3,
   descripction,
   live,
   github,
   icon1,
   icon2,
   bgphoto,
   summary,
}) {
   return (
      <section className='single-item slide-in-right '>
         <div className='single-item-header'>
            {" "}
            <div className='single-item-header-text'>
               <div className='container'>
                  <h1>{title}</h1>
                  <h2 className='icon'>{icon3}</h2>
               </div>
               <div className='single-item-links'>
                  <Link to={live}>
                     <div className='live'>
                        <div className='single-item-icon'>{icon2}</div>
                        <p>See Live</p>
                     </div>
                  </Link>
                  <a target='_blank' href={github}>
                     <div className='git'>
                        <div className='single-item-icon'>{icon1}</div>
                        <p>Github</p>
                     </div>
                  </a>
               </div>
            </div>
         </div>
         <div className='single-item-photo'>
            <img src={bgphoto} alt='' />
         </div>
         <div className='single-item-info'>
            <h1>{summary}</h1>
            <p>{descripction}</p>
         </div>
      </section>
   );
}

export default PortfolioItem;
