import "./SuccessError.css";

export const SuccesError =(props)=>{
    return (
        <div className={`${props.bgClass} container-msj flex-column center`}>
            <div>
                <img className="image-ok-error" src={props.image} alt="close" />
            </div>
            <h4>{props.description}</h4>
            <button className="button-ok-error">{props.button}</button>
        </div>
    )
}