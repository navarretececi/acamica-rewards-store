import "./Pagination.css";
import { usePagination } from "../../utils/pagination";
import { useState } from "react";

export const Pagination =()=>{
    const [page, setPage] = useState(1)

    const handlerNexPage =()=>{
       setPage (page+1)
    }

    const handlerPrevPage =()=>{
        setPage (page-1)
    }
        
    return (
        <div className="flex-row btn-arrow center">
             <button onClick={handlerNexPage} className="container-arrow">
                <img src="./images/arrow-left.svg" alt="flecha"/>
            </button>
            <button onClick={handlerPrevPage} className="container-arrow">
                <img src="./images/arrow-right.svg" alt="flecha"/>
            </button>
        </div>
    )
}