import "./Filter.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnFilter} from "../button/BtnFilter";
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
                    <BtnFilter text={"Most recent"} />
                    <BtnFilter text={"Lowest price"} />
                    <BtnFilter text={"Highest price"} />
                </div>
            </div>
        </aside>
    )
}