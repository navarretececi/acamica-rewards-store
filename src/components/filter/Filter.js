import "./Filter.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnText} from "../button/BtnText";
import { Pagination } from "../pagination/Pagination";

export const Filter =()=>{
    const { totalProducts } = useContext(AppContext);

    return (
        <aside className="filter flex-row">
            <div className="container-page center">
                <h3 className="normal-text">XX of {totalProducts} products</h3>
            </div>
            <Pagination />
            <div className="container-filter flex-row">
                <div className="container-sort">
                    <h3 className="normal-text">Sort by:</h3>
                </div>
                <div className="container-btn flex-row">
                    <BtnText text={"Most recent"} />
                    <BtnText text={"Lowest price"} />
                    <BtnText text={"Highest price"} />
                </div>
            </div>
        </aside>
    )
}