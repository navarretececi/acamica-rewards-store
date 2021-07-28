import "./Notification.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Notification =()=>{
    const { reedemStatus, setReedemStatus } = useContext(AppContext);
        
    if(reedemStatus.msg){
        return (      
            <div className="modal center">
                <div className={`container-msj flex-column ${reedemStatus.status ? "success" : "error"}`}>
                    <div>
                        <img className="image-ok-error"  alt="close" 
                        src={reedemStatus.status ? "./images/success.svg" : "./images/error.png"}/>
                    </div>
                    <h4 className="text10">{reedemStatus.msg}</h4>
                    <button className="button-ok-error" onClick={()=>setReedemStatus({})}>
                        {reedemStatus.status ? "continue" : "try again"}
                    </button>
                </div>
            </div>    
        ) 
    } else return <> </>
}




