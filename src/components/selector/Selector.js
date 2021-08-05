import "./Selector.css";

export const Selector =(props)=>{
    return(
        <div className="container-selector flex-row center">
            <input name="radio" className="radio" type="radio" />
            <h3 className="normal-text">{props.description}</h3>  
        </div>
    )
}