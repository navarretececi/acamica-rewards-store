import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [user, setUser] = useState({})
  const [points, setPoints] = useState(0)
  const [products, setProducts] = useState([])

  let totalProducts = products.length

  const handlerAddPoint =()=>{
    let newUser = {...user}
    newUser.points = user.points + 1000
    setUser(newUser)
}

  return (
    <AppContext.Provider value={{user, setUser, handlerAddPoint, points, setPoints, products, setProducts, totalProducts}}>
        {children}
    </AppContext.Provider>
  );
}