import "./Product.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnText } from "../button/BtnText";
import { reedem } from "../../services/reedem"

export const SelectedProduct =(props)=>{
    const { handlerSubtractPoint, reedemStatus, setReedemStatus } = useContext(AppContext);

    console.log("soy el canje", reedemStatus)
   
    const handleReedem =()=>{
        reedem(props.id)
            .then ((response) => {
                handlerSubtractPoint(props.points)
                if (!response.ok) throw Error(response.status);
                return response.json();
            })
            .then((data) =>{ 
                console.log("data" ,data)
                setReedemStatus({status:true, msg: data.message})})
            .catch(error => {
                setReedemStatus({status:false, msg: "ups hubo un error"})
                console.log(error)});
        }
    
    return (
        <div className="selected-product flex-column">
            <div className="top-icono">
                <img src="./images/buy-white.svg" alt="bag" />
            </div>
            <div className="flex-row center">
                <h3 className="text-product-point">{props.points}</h3>
                <img className="white-bag" src="./images/coin.svg" alt="coin" />
            </div>
            <BtnText text={"Redeem now"} handlerOnClick={()=>handleReedem()}/>
        </div>
    )
}