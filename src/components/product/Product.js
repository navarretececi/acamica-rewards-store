import "./Product.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnPoint } from "../button/BtnPoint";

export const Product =(props)=>{
    const { user } = useContext(AppContext);

    let neededPoints = props.points - user.points

    console.log("puntos del usuario", user.points)
    console.log("puntos del producto", props.points)
    console.log("puntos faltantes", neededPoints)
    return (
        <div className="product flex-column center">
            <div className="product-container">
                <img className="photo" src={props.url} alt="producto" />
                {
                    user.points < props.points ? <BtnPoint 
                                                classContainer={`btn-neededPoints`} 
                                                classText={`text-neededPoints`} 
                                                text={`You need ${neededPoints}`}/> : null
                }
            </div>
            <div className="container-description flex-column">
                <h4 className="product-name">{props.name}</h4>
                <h4 className="product-category">{props.category}</h4>
            </div>
            
        </div>
    )
}