import "./BtnCoin.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { addPoints } from '../../services/points';

export const BtnCoin =()=>{
    const { handlerAddPoint } = useContext(AppContext);
   
    const handlePoint =()=>{
        addPoints()
            .then ((data) => {
                handlerAddPoint()
                alert(data.message)
            })
        }

    return (
        <button onClick={handlePoint} className="container-btn-coin center">
            <img className="center btn-coin" src="./images/addCoin.svg" alt="icono" />
        </button>
    )
}