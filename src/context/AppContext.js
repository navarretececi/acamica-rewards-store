import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([])

  let totalProducts = products.length

  const handlerAddPoint =()=>{
    let newUser = {...user}
    /* newUser.points = user.points + 1000 */
    newUser.points = user.points - 526000
    setUser(newUser)
}

  return (
    <AppContext.Provider value={{user, setUser, handlerAddPoint, products, setProducts, totalProducts}}>
        {children}
    </AppContext.Provider>
  );
}