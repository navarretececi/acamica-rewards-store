import "./Selector.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { addPoints } from "../../services/points";
import { getProducts } from "../../services/products"

export const Selector =(props)=>{
    const { points, handlerAddPoint, setProducts} = useContext(AppContext);

    const handlePoint =(value)=>{
        addPoints(value)
            .then ((data) => {
                handlerAddPoint(value)
                alert(data.message)
            })
            getProducts()
            .then ((prod) => {
              setProducts(prod)
              })
        }

    return(
        <div className="container-selector flex-row center">
            <button value={points} onClick={()=>handlePoint(props.value)} className="selector normal-text">{props.description}</button>  
        </div>
    )
}