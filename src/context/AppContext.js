import React from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const contextoData = {
    kappa: "K",
    
  };
  return (
    <AppContext.Provider value={contextoData}>
        {children}
    </AppContext.Provider>
  );
}