import "./App.css";
import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Nav } from "./components/nav/Nav";
import { Header } from "./components/header/Header";
import { Result } from "./components/result/Result";
import { Footer } from "./components/footer/Footer";
import { getUser } from "./services/users";
import { getProducts } from "./services/products";
import { Filter } from "./components/filter/Filter";
import { Notification } from "./components/notification/Notification";

function App() {
  const { setUser, setProducts } = useContext(AppContext);

  useEffect (()=>{
      getUser()
        .then ((user) =>{
          setUser(user)
        })
  } , [setUser])

  useEffect (()=>{
    getProducts()
    .then ((prod) => {
      setProducts(prod)
      })
} , [setProducts])


  return (
    <div>
      <Notification />
      <Nav />
      <Header/>
      <section className="section">
        <Filter />
        <Result />
        <Footer />
      </section>
    </div>
  );
}

export default App;
