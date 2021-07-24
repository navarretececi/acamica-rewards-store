import "./BtnPoint.css";

export const BtnPoint =(props)=>{
    return (
        <div className="btn-point flex-row">
            <h5 className="normal-text center">{props.text}</h5>
            <img className="center" src={props.url} alt="icono" />
        </div>
    )
}