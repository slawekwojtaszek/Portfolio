import React from "react";
import "../css/Button.css";

function Button({ onClick, content, className, isActive }) {
   return (
      <>
         <div className={className} onClick={onClick}>
            {content}
         </div>
      </>
   );
}

export default Button;
