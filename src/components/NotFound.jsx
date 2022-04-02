import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function NotFound() {
   return (
      <div className='not-found'>
         <div className='ops'>
            <h1>Oooops!</h1>
            <h1>It looks like this page does not exist</h1>
         </div>

         <Link to='/'>
            <Button content={"Home Page"} className={"btn-normal"} />
         </Link>
      </div>
   );
}

export default NotFound;
