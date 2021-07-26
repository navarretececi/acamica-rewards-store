import "./Result.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Product } from "../product/Product";

export const Result =()=>{
    const { products } = useContext(AppContext);

    return(
        <main className="result flex-row">
            {
               products.length > 0 ? products.map((producto) => 
                <Product 
                    key={producto._id}
                    id={producto._id}
                    url={producto.img.hdUrl}
                    name={producto.name}
                    category={producto.category}
                    points={producto.cost}
                />) : null 
            }
        </main>
    )
}