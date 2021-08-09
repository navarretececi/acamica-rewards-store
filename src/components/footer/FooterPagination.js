import "./FooterPagination.css";
import React from "react";
import { Pagination } from "../pagination/Pagination";

export const FooterPagination =(props)=>{

    return(
        <footer className="footer flex-row">
            <h3 className="normal-text">{props.list.currentData().length} of {props.totalList} products</h3>
            <Pagination />
        </footer>
    )
}