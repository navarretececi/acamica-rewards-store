import "./Filter.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnText} from "../button/BtnText";
import { Pagination } from "../pagination/Pagination";
import { filterByAvailability, lowestPrice, highestPrice } from "../../utils/filter";

export const Filter =()=>{
    const { totalProducts, user, products } = useContext(AppContext);

  

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
                    <div className="flex-row container-btn-filter">
                        <BtnText text={"Most recent"} />
                        <BtnText text={"Lowest price"} handlerOnClick={()=>lowestPrice(products)}/>
                    </div>
                    <div className="flex-row container-btn-filter">
                        <BtnText text={"Highest price"} handlerOnClick={()=>highestPrice(products)}/>
                        <BtnText text={"Availability"} handlerOnClick={()=>filterByAvailability(products,user)}/>
                    </div>
                    
                </div>
            </div>
        </aside>
    )
}