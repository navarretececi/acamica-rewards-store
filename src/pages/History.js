import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { FooterPagination } from "../components/footer/FooterPagination";
import { SmallProductCard } from "../components/product/SmallProductCard";
import { Title } from "../components/title/Title";
import { getHistory } from "../services/history";

export const History=()=>{
    const { paginationList, setProducts } = useContext(AppContext);
  
    useEffect (()=>{
      getHistory()
      .then ((prod) => {
        setProducts(prod)
        })
  } , [setProducts])

    return (
        <section className="section">
            <Title title={"Historial de cambios"}/>
            {
                paginationList.currentData().map((producto)=>{
                    return(
                        <SmallProductCard
                            key={producto.createDate}
                            url={producto.img.url}
                            category= {producto.category}
                            cost= {producto.cost}
                            date= {producto.createDate}
                        />
                    )
                })
            }
            <FooterPagination />
        </section>
    )
}