import React from "react";
import Navbar from "./Navbar";
import "../css/Portfolio.css";
import Footer from "./Footer";
import PortfolioItem from "./PortfolioItem";
import { SiGithub } from "react-icons/si";
import { ImLink } from "react-icons/im";
import myTest from "../img/iphone.png";

function Portfolio({ isClose, onClick }) {
   return (
      <>
         <Navbar onClick={onClick} isClose={isClose} />
         <div className='portfolio-container '>
            <PortfolioItem
               title='iPhone Timewatch'
               descripction='The app written in Vanilla JS'
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={myTest}
            />
         </div>
         <Footer />
      </>
   );
}

export default Portfolio;
