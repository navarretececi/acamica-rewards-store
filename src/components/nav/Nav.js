import "./Nav.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnTextImg } from "../button/BtnTextImg";
import { Menu } from "../menu/Menu";

export const Nav=()=>{
    const { user } = useContext(AppContext);

    return(
        <nav className="nav flex-row">
            <div className="container-logo">
                <img src="./images/aerolab-logo.svg" alt="logo" />
            </div>
            <Menu />
            <div className="container-points flex-row center">
                <h3 className="normal-text center">{user.name}</h3>
                <BtnTextImg text={user.points} />
            </div>
        </nav>
    )
}