import "./BtnCoin.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { addPoints } from "../../services/points";
import { getProducts } from "../../services/products"

export const BtnCoin =()=>{
    const { handlerAddPoint, setProducts } = useContext(AppContext);
   
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

    return (
        <button onClick={handlePoint} className="container-btn-coin center">
            <img className="center btn-coin" src="./images/addCoin.png" alt="icono" />
        </button>
    )
}