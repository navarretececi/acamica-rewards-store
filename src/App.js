import "./App.css";
import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Nav } from "./components/nav/Nav";
import { Header } from "./components/header/Header";
import { Notification } from "./components/notification/Notification";
import { getUser } from "./services/users";
import { Router } from "./routers/Router"

function App() {
  const { setUser } = useContext(AppContext);

  useEffect (()=>{
      getUser()
        .then ((user) =>{
          setUser(user)
        })
  } , [setUser])

  return (
    <>
      <Notification />
      <Nav />
      <Header/>
      <Router />
    </>
  );
}

export default App;
