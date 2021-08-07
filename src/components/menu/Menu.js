import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

export const Menu =()=>{
   return(
       <ul className="menu flex-row">
            <li className="pink-line"><Link className="normal-text" to="/acamica-rewards-store/">Home</Link></li>
            <li className="pink-line"><Link className="normal-text" to="/acamica-rewards-store/points">Add points</Link></li>
            <li className="pink-line"><Link className="normal-text" to="/acamica-rewards-store/history">History</Link></li>
        </ul>
   )
}

