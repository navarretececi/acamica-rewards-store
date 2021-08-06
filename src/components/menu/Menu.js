import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

export const Menu =()=>{
   return(
       <ul className="menu center flex-row">
            <li className="pink-line"><Link className="normal-text" to="/">Home</Link></li>
            <li className="pink-line"><Link className="normal-text" to="/points">Add points</Link></li>
            <li className="pink-line"><Link className="normal-text" to="/history">History</Link></li>
         </ul>
   )
}

