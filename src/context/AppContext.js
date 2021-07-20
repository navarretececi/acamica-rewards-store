import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([])

  return (
    <AppContext.Provider value={{user, setUser, products, setProducts}}>
        {children}
    </AppContext.Provider>
  );
}