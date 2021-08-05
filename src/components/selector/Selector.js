import "./Selector.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { addPoints } from "../../services/points";
import { getProducts } from "../../services/products"

export const Selector =(props)=>{
    const { points, setPoints, handlerAddPoint, setProducts} = useContext(AppContext);

    const handlePoint =()=>{
        addPoints()
            .then ((data) => {
                handlerAddPoint()
                alert(data.message)
            })
            getProducts()
            .then ((prod) => {
              setProducts(prod)
              })
        }

    return(
        <div className="container-selector flex-row center">
            <button value={points} onClick={handlePoint} className="normal-text">{props.description}</button>  
        </div>
    )
}