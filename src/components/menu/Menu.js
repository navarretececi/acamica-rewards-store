import "./Menu.css";
import React from "react";
import { BrowserRouter , Link } from "react-router-dom";

export const Menu =()=>{
   return(
    <BrowserRouter basename="/acamica-rewards-store">
       <ul className="menu flex-row">
            <li className="pink-line"><Link className="normal-text" to="/">Home</Link></li>
            <li className="pink-line"><Link className="normal-text" to="/points">Add points</Link></li>
            <li className="pink-line"><Link className="normal-text" to="/history">History</Link></li>
        </ul>
    </BrowserRouter>
   )
}

