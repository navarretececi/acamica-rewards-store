import "./Product.css";

export const Product =(props)=>{

    return (
        <div className="product flex-column center">
            <div className="product-container">
                <img className="photo" src={props.url} alt="producto" />
            </div>
            <div className="container-description flex-column">
                <h4 className="product-name">{props.name}</h4>
                <h4 className="product-category">{props.category}</h4>
            </div>
            
        </div>
    )
}