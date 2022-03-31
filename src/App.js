import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import QuickAccessBox from "./components/QuickAccessBox";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App(props) {
   const [isClose, setisClose] = useState(true);
   document.body.style.overflowX = "hidden";
   const newButton = () => {
      setisClose((isClose) => !isClose);
      if (!isClose) {
         document.body.style.overflowY = "auto";
      } else {
         document.body.style.overflowY = "hidden";
      }
   };

   return (
      <>
         <div className='wrapper '>
            <Router>
               <Navbar onClick={newButton} isClose={isClose} />
               <Routes>
                  <Route path='/' element={<Header />} />
                  <Route
                     path='/portfolio'
                     element={
                        <Portfolio onClick={newButton} isClose={isClose} />
                     }
                  />
                  <Route
                     path='/about'
                     element={<About onClick={newButton} isClose={isClose} />}
                  />
                  <Route path='/' element={<Header />} />
                  <Route
                     path='/skills'
                     element={<Skills onClick={newButton} isClose={isClose} />}
                  />
               </Routes>
            </Router>
         </div>
      </>
   );
}

export default App;
