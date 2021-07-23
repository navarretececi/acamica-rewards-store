import "./Pagination.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Pagination =()=>{
    const { } = useContext(AppContext);

    return (
        <div className="flex-row btn-arrow center">
             <button className="container-arrow">
                <img src="./images/arrow-left.svg" alt="flecha"/>
            </button>
            <button className="container-arrow">
                <img src="./images/arrow-right.svg" alt="flecha"/>
            </button>
        </div>
    )
}