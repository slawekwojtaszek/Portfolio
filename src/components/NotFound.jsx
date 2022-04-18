import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Penguin from "../img/penguin.png";
import "../css/NotFound.css";

function NotFound() {
   return (
      <div className='not-found'>
         <div className='ops'>
            <h1>Oooops!</h1>
            <h1>It looks like this page does not exist</h1>
         </div>
         <div className='img-container'>
            <img src={Penguin} alt='' />
         </div>

         <Link to='/'>
            <Button content={"Home Page"} className={"btn-normal"} />
         </Link>
      </div>
   );
}

export default NotFound;
