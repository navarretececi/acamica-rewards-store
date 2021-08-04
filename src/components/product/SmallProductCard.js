import "./Product.css";

export const SmallProductCard =(props)=>{
    return(
        <div className="flex-row small-container">
            <div className="container-imgHistory">
                <img className="h100" src={props.url} alt="producto"/>
            </div>
            <div>
                <h3 className="small-text">Category: {props.category}</h3>
                <h3 className="small-text">Cost: {props.cost}</h3>
                <h3 className="small-text">Date: {props.date}</h3>
            </div>  
        </div>
    )
}