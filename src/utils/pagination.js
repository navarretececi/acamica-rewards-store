import {useState} from "react";

export const usePagination =(data, itemsPerPage)=>{
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil (data.length / itemsPerPage)

    const next =()=>{
        setCurrentPage((currentPage) => Math.min(currentPage + 1 , maxPage))
    }
    
    const prev =()=>{
        setCurrentPage((currentPage) => Math.max(currentPage - 1 , 1))
    }

    const currentData =()=>{
        const begin = (currentPage -1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin,end)
    }
    return {next, prev, currentData, currentPage, maxPage}
}