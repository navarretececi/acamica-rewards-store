import React, { useState } from "react";
import { usePagination } from "../utils/pagination";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([])
  const [reedemStatus, setReedemStatus] = useState({})
 


  const paginationList = usePagination(products, 16)

  let totalProducts = products.length

  const handlerAddPoint =()=>{
    let newUser = {...user}
    newUser.points = user.points + 1000
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
                                paginationList}}>
        {children}
    </AppContext.Provider>
  );
}