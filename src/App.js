import './App.css';
import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Nav } from './components/nav/Nav'
import { Header } from './components/header/Header'
import { Result } from './components/result/Result'
import { Footer } from './components/footer/Footer'
import { useEffect } from 'react';
import { getUser } from './services/users'
import { getProducts } from './services/products';

function App() {
  const { setUser, setProducts } = useContext(AppContext);

  useEffect (()=>{
      getUser()
        .then ((user) =>setUser(user))
  } , [])

  useEffect (()=>{
    getProducts()
      .then ((products) => setProducts(products))
} , [])

  return (
    <div>
      <Nav />
      <Header/>
      <Result />
      <section className="section">
        <Footer />
      </section>
      
    </div>
  );
}

export default App;
