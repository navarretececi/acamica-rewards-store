import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([])

  let totalProducts = products.length

  return (
    <AppContext.Provider value={{user, setUser, products, setProducts, totalProducts}}>
        {children}
    </AppContext.Provider>
  );
}