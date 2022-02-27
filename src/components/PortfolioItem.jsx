import React from "react";
import "../css/Portfolio.css";
import { Link } from "react-router-dom";

function PortfolioItem({
   title,
   icon3,
   descri,
   live,
   github,
   icon1,
   icon2,
   bgphoto,
}) {
   return (
      <section className='single-item slide-in-right '>
         <div className='single-item-des'>
            {" "}
            <div className='single-item-des-text'>
               <div className='container'>
                  <h1>{title}</h1>
                  <h2 className='ii'>{icon3}</h2>
               </div>
               <div className='single-item-links'>
                  <Link to={live}>
                     <div className='live'>
                        <div className='single-item-icon'>{icon1}</div>
                        <div className='des'>See Live</div>
                     </div>
                  </Link>

                  <a target='_blank' href={github}>
                     {" "}
                     <div className='live'>
                        <div className='single-item-icon'>{icon2}</div>
                        <div className='des'>See on Github</div>
                     </div>{" "}
                  </a>
               </div>
            </div>
         </div>
         <div className='single-item-photo'>
            <img src={bgphoto} alt='' />
         </div>
         <div className='single-item-fe'>
            <h1>Descripction</h1>
            <p>{descri}</p>
         </div>
      </section>
   );
}

export default PortfolioItem;
