import './App.css';
import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Nav } from './components/nav/Nav'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { useEffect } from 'react';
import { getUser } from './services/users'

function App() {
  const { setUser } = useContext(AppContext);

  useEffect (()=>{
      getUser()
        .then ((user) =>setUser(user))
  } , [])

  return (
    <div>
      <Nav />
      <Header/>
      <section className="section">
        <Footer />
      </section>
      
    </div>
  );
}

export default App;
