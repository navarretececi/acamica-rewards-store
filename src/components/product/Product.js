import "./Product.css";
import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnTextImg } from "../button/BtnTextImg";
import { SelectedProduct } from "./SelectedProduct";

export const Product =(props)=>{
    const { user } = useContext(AppContext);
    const [hover, setHover] = useState(false);
    
    const handleHover =()=>{setHover(!hover)}

    let neededPoints = props.points - user.points
    
    console.log("puntos del usuario", user.points)
    console.log("puntos del producto", props.points)
    console.log("puntos faltantes", neededPoints)
    return (
        <div className="product flex-column center" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className="container-position">    
                <div className="product-container">
                    <img className="photo" src={props.url} alt="producto" />
                    {
                        user.points < props.points ? <BtnTextImg 
                                                    classContainer={`btn-neededPoints top-icono center`} 
                                                    classText={`text-neededPoints`} 
                                                    text={`You need ${neededPoints}`}/> : 
                                                    <div className="top-icono blue-bag">
                                                        <img src="./images/buy-blue.svg" alt="bag" />
                                                    </div>
                    }
                </div>
                <div className="container-description flex-column">
                    <h4 className="product-name">{props.name}</h4>
                    <h4 className="product-category">{props.category}</h4>
                </div>
            </div>
            {(user.points > props.points) && hover ? <SelectedProduct points={props.points} id={props.id}/> : null}
        </div>
    )
}