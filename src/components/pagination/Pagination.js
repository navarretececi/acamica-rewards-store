import "./Pagination.css";
import React, { useContext} from "react";
import { AppContext } from "../../context/AppContext";

export const Pagination =()=>{
    const { paginationList} = useContext(AppContext);

    return (
        <div className="flex-row btn-arrow center">
            {
                paginationList.currentPage > 1 ?
                    <button onClick={()=>paginationList.prev()} className="container-arrow">
                        <img src="./images/arrow-left.svg" alt="flecha"/>
                    </button> : null
            }
            {
               paginationList.currentPage !== paginationList.maxPage ?
                    <button onClick={()=>paginationList.next()} className="container-arrow">
                        <img src="./images/arrow-right.svg" alt="flecha"/>
                    </button>: null
            } 
        </div>
    )
}