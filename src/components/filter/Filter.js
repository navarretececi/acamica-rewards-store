import "./Filter.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnText} from "../button/BtnText";
import { Pagination } from "../pagination/Pagination";
import { filterByAvailability, sortByLowestPrice, sortByhighestPrice } from "../../utils/filter";
import { getProducts } from "../../services/products";

export const Filter =()=>{
    const { totalProducts, user, setProducts, paginationList, products } = useContext(AppContext);

    const handleFilterByAvailability =()=>{
        let resultByAvailability = filterByAvailability(products,user)
        setProducts(resultByAvailability)
    }

    const handleSortByLowestPrice =()=>{
        let resultLowestPrice = sortByLowestPrice(products)
        setProducts(resultLowestPrice)
    }

    const handleSortByhighestPrice =()=>{
        let resultHighestPrice = sortByhighestPrice(products)
        setProducts(resultHighestPrice)
    }

    const clearSort =()=>{
        getProducts()
            .then ((prod) => setProducts(prod))
    }

    return (
        <aside className="filter flex-row">
            <div className="container-page center">
                <h3 className="normal-text">{paginationList.currentData().length} of {totalProducts} products</h3>
            </div>
            <Pagination list={paginationList} />
            <div className="container-filter flex-row">
                <div className="container-sort">
                    <h3 className="normal-text">Sort by:</h3>
                </div>
                <div className="container-btn flex-row">
                    <div className="flex-row container-btn-filter">
                        <BtnText text={"Lowest price"} handlerOnClick={handleSortByLowestPrice}/>
                        <BtnText text={"Highest price"} handlerOnClick={handleSortByhighestPrice}/>
                    </div>
                    <div className="flex-row container-btn-filter">
                        <BtnText text={"Availability"} handlerOnClick={handleFilterByAvailability}/>
                        <BtnText text={"Clear sort"} handlerOnClick={clearSort} classbutton={"pink"} classtext={"text-white"} />
                    </div>
                    
                </div>
            </div>
        </aside>
    )
}