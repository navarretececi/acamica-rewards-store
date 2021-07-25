import "./BtnTextImg.css";

export const BtnTextImg =(props)=>{
    return (
        <div className={`btn-point flex-row ${props.classContainer}`}>
            <h5 className={`normal-text center ${props.classText}`}>{props.text}</h5>
            <img className="center" src="./images/coin.svg" alt="icono" />
        </div>
    )
}