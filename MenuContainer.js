 import React from "react"
 
 function MenuContainer({ link, icon} ) {
   return  <li>
        <a href={link}>
            <spam className="icon">{icon}</spam>
              
        </a>
    </li>;
   
   
 }
 
 export default MenuContainer
