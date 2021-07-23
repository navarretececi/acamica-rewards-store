import "./BtnFilter.css";

export const BtnFilter =(props)=>{
    return (
        <button className="btn-filter flex-row center" onClick={props.handlerOnClick}>
            <h5 className="normal-text center">{props.text}</h5>
        </button>
    )
}