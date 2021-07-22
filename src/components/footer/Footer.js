import './Footer.css';
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Footer =()=>{
    const { totalProducts } = useContext(AppContext);

    return(
        <footer className="footer">
            <h3 className="normal-text">xx of {totalProducts} products</h3>
        </footer>
    )
}