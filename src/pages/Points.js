import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Title } from "../components/title/Title";
import { Selector } from "../components/selector/Selector";

export const Points =()=>{
    const { setProducts } = useContext(AppContext);

    return (
        <section className="section">
            <Title title={"Add points to your user"}/>
            <div className="center flex-column">
                <Selector description={"add 1000 points"}/>
                <Selector description={"add 5000 points"}/>
                <Selector description={"add 7500 points"}/>
            </div>
            <button>AGREGAR</button>
        </section>
    )
}