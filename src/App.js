import "./App.css";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App(props) {
   const [isClose, setisClose] = useState(true);

   const newButton = () => {
      setisClose((isClose) => !isClose);
      console.log(isClose);
   };
   return (
      <>
         <div className='wrapper'>
            <Navbar onClick={newButton} isClose={isClose} />
            <Router>
               <Routes>
                  <Route
                     exact
                     path='/'
                     element={
                        <>
                           <Header />
                        </>
                     }></Route>

                  <Route path='/portfolio' element={<Portfolio />} />
               </Routes>
            </Router>
         </div>
      </>
   );
}

export default App;
