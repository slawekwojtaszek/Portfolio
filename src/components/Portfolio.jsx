import React from "react";
import Navbar from "./Navbar";
import "../css/Portfolio.css";
import Footer from "./Footer";
import PortfolioItem from "./PortfolioItem";
import { SiGithub } from "react-icons/si";
import { ImLink } from "react-icons/im";
import myTest from "../img/iphone.png";
import myTest2 from "../img/bgsmall.jpg";
import QuickAccessBox from "./QuickAccessBox";
import {
   SiReact,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiTypescript,
   SiFigma,
   SiAdobephotoshop,
   SiAdobeillustrator,
   SiAdobexd,
} from "react-icons/si";

function Portfolio({ isClose, onClick }) {
   return (
      <>
         <Navbar onClick={onClick} isClose={isClose} />
         <div className='portfolio-container '>
            <PortfolioItem
               title='iPhone Timewatch'
               icon3={<SiJavascript className='ijs' />}
               live={"/"}
               github={"https://github.com/slawekwojtaszek"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={myTest}
               descri={`This is a clone of native Apple's Timewatch app on the iPhones.
               The app allowes you to record multiple laps as well as start,
               pause, stop and clear time.`}
            />
            <PortfolioItem
               title='Daily Planner'
               icon3={<SiJavascript className='ijs' />}
               live={"/"}
               github={"https://github.com/slawekwojtaszek"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={myTest2}
               descri={`The app is a simply daily planner where you can add some tasks, mark them as completed, delete them and search`}
            />
            <QuickAccessBox className='stick' />
         </div>

         <Footer />
      </>
   );
}

export default Portfolio;
