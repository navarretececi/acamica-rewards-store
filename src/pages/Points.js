import React from "react";
import { Title } from "../components/title/Title";
import { Selector } from "../components/selector/Selector";

export const Points =()=>{
    return (
        <section className="section">
            <Title title={"Add points to your user"}/>
            <div className="center flex-column">
                <Selector description={"add 1000 points"} value={1000} />
                <Selector description={"add 5000 points"} value={5000} />
                <Selector description={"add 7500 points"} value={7500} />
            </div>
        </section>
    )
}