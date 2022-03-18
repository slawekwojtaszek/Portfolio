import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import QuickAccessBox from "./components/QuickAccessBox";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

function App(props) {
   const [isClose, setisClose] = useState(true);

   const newButton = () => {
      if (isClose) {
         document.body.style.overflowY = "hidden";
         document.body.style.overflowX = "hidden";
      } else if (!isClose) {
         document.body.style.overflowY = "auto";
         document.body.style.overflowX = "hidden";
      }
      setisClose((isClose) => !isClose);
   };

   return (
      <>
         <div className='wrapper '>
            <Router>
               <Routes>
                  <Route
                     path='/'
                     element={<Navbar onClick={newButton} isClose={isClose} />}
                  />
                  <Route path='/' element={<Header />} />
                  <Route
                     path='/portfolio'
                     element={
                        <Portfolio onClick={newButton} isClose={isClose} />
                     }
                  />
                  <Route
                     path='/skills'
                     element={<Skills onClick={newButton} isClose={isClose} />}
                  />
                  <Route
                     path='/about'
                     element={<About onClick={newButton} isClose={isClose} />}
                  />
               </Routes>
               <Routes>
                  <Route path='/' element={<Header />} />
               </Routes>
            </Router>
         </div>
      </>
   );
}

export default App;
