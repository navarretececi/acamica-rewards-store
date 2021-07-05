import './Button.css';

export const Button =(props)=>{
    return (
        <div className="button flex-row">
            <h5 className="normal-text center">{props.text}</h5>
            <img className="center" src={props.image} alt="icono" />
        </div>
    )
}