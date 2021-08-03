import "./BtnText.css";

export const BtnText =(props)=>{
    return (
        <button className={`btn-filter flex-row center ${props.classbutton}`} onClick={props.handlerOnClick}>
            <h5 className={`normal-text center text-full ${props.classtext}`}>{props.text}</h5>
        </button>
    )
}