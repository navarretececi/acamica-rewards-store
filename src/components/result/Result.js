import "./Result.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Product } from "../product/Product";

export const Result =()=>{
    const { products } = useContext(AppContext);
console.log(products)
    return(
        <section className="result flex-row">
            {
               products.length > 0 ? products.map((producto) => 
                <Product 
                    key={producto._id}
                    url={producto.img.hdUrl}
                    name={producto.name}
                    category={producto.category}
                />) : null 
            }
        </section>
    )
}