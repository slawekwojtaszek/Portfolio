import React from "react";
import "../css/Button.css";

function Button({ onClick, content, className, isActive, id }) {
   return (
      <>
         <div className={className} onClick={onClick} key={id}>
            {content}
         </div>
      </>
   );
}

export default Button;
