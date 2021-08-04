import "./FooterPagination.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Pagination } from "../pagination/Pagination";

export const FooterPagination =()=>{
    const { totalProducts, paginationList } = useContext(AppContext);

    return(
        <footer className="footer flex-row">
            <h3 className="normal-text">{paginationList.currentData().length} of {totalProducts} products</h3>
            <Pagination />
        </footer>
    )
}