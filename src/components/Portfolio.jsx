import React from "react";
import Navbar from "./Navbar";
import "../css/Portfolio.css";
import Footer from "./Footer";
import PortfolioItem from "./PortfolioItem";
import { SiGithub } from "react-icons/si";
import { ImLink } from "react-icons/im";
import dailyplannerPhoto from "../img/dailyplanner.png";
import iphoneStopwatchPhoto from "../img/iphonestopwatch.png";
import broccoliPhoto from "../img/broccoli.png";
import flashCardsPhoto from "../img/flashcards.png";
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
         <div className='portfolio-container '>
            <PortfolioItem
               title='Flashcards'
               icon3={<SiReact />}
               live={"/"}
               github={"https://github.com/slawekwojtaszek"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={flashCardsPhoto}
               summary={"Hola, ¿Qué pasa?"}
               descripction={`This is a React app which is going to help learn some new spanish words! You can change word from Spanish to English or English to Spanish, and you can even add your own word. If the wors is too hard and you are not sure, you can always skip it. Ah, and I almost forgot, you can scroll the boards with numbers to see all your good, bad or skipped words!`}
            />
            <PortfolioItem
               title='iPhone Timewatch'
               icon3={<SiJavascript />}
               live={"/"}
               github={"https://github.com/slawekwojtaszek"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={iphoneStopwatchPhoto}
               summary={"Ready, set, go!"}
               descripction={`This is a clone of native Apple's Timewatch app on the iPhones.
               The app allowes you to record multiple laps as well as start,
               pause, stop and clear time.`}
            />
            <PortfolioItem
               title='Broccoli'
               icon3={<SiCss3 />}
               live={"/"}
               github={"https://github.com/slawekwojtaszek"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={broccoliPhoto}
               summary={"My name is colli, Broccoli."}
               descripction={`The idea behind this project was to create a clean, modern website presenting the benefits of Broccoli in a funny way`}
            />
            <PortfolioItem
               title='Daily Planner'
               icon3={<SiJavascript />}
               live={"/"}
               github={"https://github.com/slawekwojtaszek"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={dailyplannerPhoto}
               summary={"Remember to take cold shower today!"}
               descripction={`The app is a simply daily planner where you can add tasks, mark them as completed, delete them and search for them. Also, you can change the main theme coolour using sliders. All wrritten in Vanilla Javascript`}
            />
         </div>
         <QuickAccessBox className='stick' />
         <Footer />
      </>
   );
}

export default Portfolio;
