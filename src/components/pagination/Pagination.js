import "./Pagination.css";
import React from "react";

export const Pagination =(props)=>{

    return (
        <div className="flex-row btn-arrow center">
            {
                props.list.currentPage > 1 ?
                    <button onClick={()=>props.list.prev()} className="container-arrow">
                        <img src="./images/arrow-left.svg" alt="flecha"/>
                    </button> : null
            }
            {
               props.list.currentPage !== props.list.maxPage ?
                    <button onClick={()=>props.list.next()} className="container-arrow">
                        <img src="./images/arrow-right.svg" alt="flecha"/>
                    </button>: null
            } 
        </div>
    )
}