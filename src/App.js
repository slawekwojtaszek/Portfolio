import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import QuickAccessBox from "./pages/QuickAccessBox";
import { useState } from "react";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";

function App(props) {
   const [isClose, setisClose] = useState(true);
   const newButton = () => {
      setisClose((isClose) => !isClose);
      console.log(isClose);
   };

   return (
      <>
         <div className='wrapper'>
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
