import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Filter } from "../components/filter/Filter"
import { Result } from "../components/result/Result"
import { FooterPagination } from "../components/footer/FooterPagination"
import { getProducts } from "../services/products";

export const Home =()=>{
    const { setProducts } = useContext(AppContext);
 
    useEffect (()=>{
      getProducts()
      .then ((prod) => {
        setProducts(prod)
        })
  } , [setProducts])

    return (
        <section className="section">
            <Filter />
            <Result />
            <FooterPagination />
        </section>
    )
}