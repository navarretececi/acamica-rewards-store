import "./Product.css";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { BtnText } from "../button/BtnText";
import { reedem } from "../../services/reedem"
import { SuccesError } from "../successError/SuccessError";

export const SelectedProduct =(props)=>{
    const [reedemSuccess, setReedemSuccess] = useState(false)
    const { handlerSubtractPoint } = useContext(AppContext);

    console.log("soy el canje", reedemSuccess)
   
    const handleReedem =()=>{
        reedem(props.id)
            .then ((response) => {
                handlerSubtractPoint(props.points)
                if (!response.ok) throw Error(response.status);
                return response;
            })
            .then((data) =>{
                console.log(data)
                setReedemSuccess(true)})
            .catch(error => console.log(error));
        }
    
    return (
        <div className="selected-product flex-column">
            <div className="top-icono">
                <img src="./images/buy-white.svg" alt="bag" />
            </div>
            <div className="flex-row center">
                <h3 className="text-product-point">{props.points}</h3>
                <img src="./images/coin.svg" alt="coin" />
            </div>
            <BtnText text={"Redeem now"} handlerOnClick={()=>handleReedem()}/>
            { reedemSuccess ? <SuccesError description={"OK"} image={"./images/success.svg"}/> : null}
        </div>
    )
}