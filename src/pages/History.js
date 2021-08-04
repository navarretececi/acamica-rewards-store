import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { FooterPagination } from "../components/footer/FooterPagination";
import { getHistory } from "../services/history";
import { SmallProductCard } from "../components/product/SmallProductCard";

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
              <h3 className="normal-text">Historial de cambios</h3>  
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