import "./Result.css";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Product } from "../product/Product";

export const Result =()=>{
  const { paginationList, products } = useContext(AppContext);

    return(
        <main className="result flex-row">
            {
                paginationList.currentData().length > 0 ?
                paginationList.currentData().map((producto) => 

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