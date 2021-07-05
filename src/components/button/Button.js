import './Button.css';

export const Button =(props)=>{
    return (
        <div className="button flex-row">
            <h5 className="normal-text">{props.text}</h5>
            <img src={props.image} alt="icono" />
        </div>
    )
}