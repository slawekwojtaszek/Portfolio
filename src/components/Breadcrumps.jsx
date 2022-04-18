import React from "react";
import { Link } from "react-router-dom";

function Breadcrumps({ link, name, current }) {
   return (
      <div className='bar'>
         <Link to={link}>{name}</Link> / {current}
      </div>
   );
}

export default Breadcrumps;
