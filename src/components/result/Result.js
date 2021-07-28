import "./Result.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Product } from "../product/Product";
import { usePagination } from "../../utils/pagination";

export const Result =()=>{
    const { products } = useContext(AppContext);
    const p_paginados = usePagination(products, 2)
    
    return(
        <main className="result flex-row">
            {
               p_paginados.currentData().length > 0 ? p_paginados.currentData().map((producto) => 
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