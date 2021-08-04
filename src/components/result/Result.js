import "./Result.css";
import React, { useContext} from "react";
import { AppContext } from "../../context/AppContext";
import { ProductCard } from "../product/ProductCard";

export const Result =()=>{
  const { paginationList } = useContext(AppContext);

    return(
        <main className="result flex-row">
            {
                paginationList.currentData().length > 0 ?
                paginationList.currentData().map((producto, index) => 

               <ProductCard 
                    key={index}
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