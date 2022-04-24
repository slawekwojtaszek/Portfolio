import React from "react";
import "../css/Portfolio.css";
import Footer from "./Footer";
import PortfolioItem from "./PortfolioItem";
import { SiGithub } from "react-icons/si";
import { ImLink } from "react-icons/im";
// import dailyplannerPhoto from "../img/dailyplanner.png";
// import iphoneStopwatchPhoto from "../img/iphonestopwatch.png";
import broccoliPhoto from "../img/broccoli.png";
import galleryPhoto from "../img/gallery.png";
import dailyPlannerPhoto from "../img/planner.png";
import stopwatchPhoto from "../img/stopwatch.png";
import portfolioPhoto from "../img/portfolio.png";
import flashcardsPhoto from "../img/flashcards.png";
import moonsPhoto from "../img/moons.png";
// import flashCardsPhoto from "../img/flashcards.png";
import QuickAccessBox from "./QuickAccessBox";

import File from "../img/file.svg";
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
import Breadcrumps from "./Breadcrumps";

function Portfolio({ isClose, onClick }) {
   return (
      <>
         <div className='portfolio-container '>
            <PortfolioItem
               title='Moonies'
               icon3={<SiReact />}
               live={"/"}
               github={"https://github.com/slawekwojtaszek/Buttons"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={moonsPhoto}
               summary={"Explore new language possibilites"}
               descripction={`This is a React app that allowes you to convert any words to something that I called ''moonies'' which are colourful shapes. The idea is based on basic 7 colours definded by Isaac Newton. It is easier to learn that than you think. Just try it out and see how your name looks in colours!`}
            />
            <PortfolioItem
               title='Flashcards'
               icon3={<SiReact />}
               live={"https://flashcards.voytashek.com/"}
               github={"https://github.com/slawekwojtaszek/Flashcards"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={flashcardsPhoto}
               summary={"Hola, ¿Qué pasa?"}
               descripction={`The app written in React JS that is going to help you learn new spanish words. You can swap words in both languages or even add your own words! If a word is too hard you can always use hint button or just skip it. Ah, and you can scroll the boards with numbers to see all correct, wrong or skipped words! Isn't it just fantastic? `}
            />
            <PortfolioItem
               title='Personal Gallery'
               icon3={<SiReact />}
               live={"https://gallery.voytashek.com/"}
               github={"https://github.com/slawekwojtaszek/Art"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={galleryPhoto}
               summary={"My Photos & Arts"}
               descripction={`This is a simple portfolio written in React presenting my works from the last few years. You can filter all the items by category and load more items to improve intial render. No plugins, no libraries.`}
            />
            <PortfolioItem
               title='iPhone Timewatch'
               icon3={<SiJavascript />}
               live={"https://stopwatch.voytashek.com/"}
               github={"https://github.com/slawekwojtaszek/iPhoneStopwatch"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={stopwatchPhoto}
               summary={"Ready, set, go!"}
               descripction={`This is a clone of native Apple's Timewatch app on the iPhones.
               The app allowes you to record multiple laps as well as start,
               pause, stop and clear time.`}
            />
            <PortfolioItem
               title='Broccoli'
               icon3={<SiCss3 />}
               live={"https://broccoli.voytashek.com/"}
               github={"https://github.com/slawekwojtaszek/Broccoli"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={broccoliPhoto}
               summary={"My name is colli, Broccoli."}
               descripction={`The idea behind this project was to create a clean, modern website presenting the benefits of Broccoli in a funny way`}
            />
            <PortfolioItem
               title='Daily Planner'
               icon3={<SiJavascript />}
               live={"https://dailytasks.voytashek.com/"}
               github={"https://github.com/slawekwojtaszek/DailyTaskTracker"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={dailyPlannerPhoto}
               summary={"Remember to take cold shower today!"}
               descripction={`The app is a simply daily planner where you can add tasks, mark them as completed, delete them and search for them. Also, you can change the main theme coolour using sliders. All wrritten in Vanilla Javascript`}
            />
            <PortfolioItem
               title='Portfolio'
               icon3={<SiReact />}
               live={"https://voytashek.com/"}
               github={"https://github.com/slawekwojtaszek/Portfolio"}
               icon1={<SiGithub />}
               icon2={<ImLink />}
               bgphoto={portfolioPhoto}
               summary={"Website in website = webception?"}
               descripction={`This is the webiste you are currently on which I also build it from scratch in React. This site contains all my projcects, information about me, etc. There is dark and light mode available and user friendly contact form.`}
            />
         </div>
         <QuickAccessBox />
         <Footer />
      </>
   );
}

export default Portfolio;
