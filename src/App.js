import "./App.css";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
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
            <Header />
         </div>
      </>
   );
}

export default App;
