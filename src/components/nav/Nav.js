import "./Nav.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { BtnTextImg } from "../button/BtnTextImg";
import { BtnCoin } from "../button/BtnCoin";
import { BtnText } from "../button/BtnText";

export const Nav=()=>{
    const { user } = useContext(AppContext);

    return(
        <nav className="nav flex-row">
            <div className="container-logo">
                <img src="./images/aerolab-logo.svg" alt="logo" />
            </div>
            <div className="container-points flex-row center">
                <h3 className="normal-text center">{user.name}</h3>
                <BtnTextImg text={user.points} />
                <BtnCoin />
                {
                    window.location.pathname ==="/points" ?     
                        <Link to="/">
                            <BtnText text={"Home"} classbutton={"pink"} classtext={"text-white"} />
                        </Link> :
                                <Link to="/points">
                                    <BtnText text={"Add points"}/> 
                                </Link>
                }
                {
                    window.location.pathname ==="/history" ?
                        <Link to="/">
                            <BtnText text={"Home"} classbutton={"pink"} classtext={"text-white"} />
                        </Link> :
                                <Link to="/history">
                                    <BtnText text={"History"}/> 
                                </Link> 
                } 
            </div>
        </nav>
    )
}