import "./Footer.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Pagination } from "../pagination/Pagination";

export const Footer =()=>{
    const { totalProducts } = useContext(AppContext);

    return(
        <footer className="footer flex-row">
            <h3 className="normal-text">xx of {totalProducts} products</h3>
            <Pagination />
        </footer>
    )
}