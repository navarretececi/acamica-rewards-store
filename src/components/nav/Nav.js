import './Nav.css';
import { Button } from '../button/Button'
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Nav=()=>{
    const { user } = useContext(AppContext);

    return(
        <nav className="nav flex-row">
            <div className="center">
                <img src="./images/aerolab-logo.svg" alt="logo" />
            </div>
            <div className="container-user flex-row">
                <h3 className="normal-text center">{user.name}</h3>
                <Button />
            </div>
        </nav>
    )
}