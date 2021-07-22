import "./Filter.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnPoint } from "../button/BtnPoint";

export const Filter =()=>{
    const { totalProducts } = useContext(AppContext);

    return (
        <aside className="filter flex-row">
            <div className="container-page center">
                <h3 className="normal-text">XX of {totalProducts} products</h3>
            </div>
            <button className="btn-arrow center">
                <img src="./images/arrow-right.svg" alt="flecha"/>
            </button>
            <div className="container-filter flex-row">
                <h3 className="normal-text">Sort by:</h3>
                <BtnPoint />
                <BtnPoint />
                <BtnPoint />
            </div>
        </aside>
    )
}