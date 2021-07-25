import "./BtnText.css";

export const BtnText =(props)=>{
    return (
        <button className="btn-filter flex-row center" onClick={props.handlerOnClick}>
            <h5 className="normal-text center">{props.text}</h5>
        </button>
    )
}