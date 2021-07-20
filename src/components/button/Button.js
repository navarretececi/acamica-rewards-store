import './Button.css';
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Button =()=>{
    const { user } = useContext(AppContext);

    return (
        <div className="button flex-row">
            <h5 className="normal-text center">{user.points}</h5>
            <img className="center" src="./images/coin.svg" alt="icono" />
        </div>
    )
}