import React, { useState } from "react";
import { usePagination } from "../utils/pagination";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([])
  const [reedemStatus, setReedemStatus] = useState({})
  const [points, setPoints] = useState(0)
  const [history, setHistory] = useState([])


  const paginationList = usePagination(products, 16)
  const paginationHistoryList = usePagination(history, 16)

  let totalProducts = products.length

  const handlerAddPoint =(value)=>{
    let newUser = {...user}
    newUser.points = user.points + value
    setUser(newUser)
  }

  const handlerSubtractPoint =(points)=>{
    let newUser = {...user}
    newUser.points = user.points - points
    setUser(newUser)
  }

  return (
    <AppContext.Provider value={{user, 
                                setUser, 
                                handlerAddPoint, 
                                handlerSubtractPoint, 
                                products, 
                                setProducts, 
                                totalProducts, 
                                reedemStatus, 
                                setReedemStatus, 
                                paginationList,
                                points,
                                setPoints,
                                history,
                                setHistory, 
                                paginationHistoryList}}>
        {children}
    </AppContext.Provider>
  );
}