import "./Product.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnText } from "../button/BtnText";
import { reedem } from "../../services/reedem"

export const SelectedProduct =(props)=>{
    const { handlerSubtractPoint } = useContext(AppContext);
   
    const handleReedem =()=>{
        reedem(props.id)
            .then ((response) => {
                handlerSubtractPoint(props.points)
                //alert(data.message)
                console.log("codigo:", response.status)
                console.log("soy la data del canje" , response)
                return response.json()
            })
            .then ((data) => {
                console.log("message:", data.message)
            })
            
        }
    
    return (
        <div className="selected-product flex-column center">
            <div>
                <img className="top-icono" src="./images/buy-white.svg" alt="bag" />
            </div>
            <div className="flex-row center">
                <h3 className="text-product-point">{props.points}</h3>
                <img src="./images/coin.svg" alt="coin" />
            </div>
            <BtnText text={"Redeem now"} handlerOnClick={()=>handleReedem()}/>
        </div>
    )
}