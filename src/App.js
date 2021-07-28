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
import { usePagination } from "./utils/pagination"
import { Notification } from "./components/notification/Notification";

function App() {
  const { setUser, paginationList, setPaginationList, setProducts, products } = useContext(AppContext);
 /*  const p usePagination(data,8)
  /* const handlerPagination =(data)=>{
    const p = usePagination(data,8)
    setPaginationList(p)
  } */

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


 
  //const a = usePagination(products,2)


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
