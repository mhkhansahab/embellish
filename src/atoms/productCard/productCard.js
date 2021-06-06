import "./productCard.css";

const productCard = (props)=>{
    return(
        <div className="product-card-container">
            <div className="product-image-container flex center-1 center-2">
                <img src={props.url} alt="" className="image"></img>
            </div>
            <div className="card-detail product-text-container">
                <div className="text product-card-text">{props.title}</div>
                <div className="card-btn">Quick View</div> 
            </div>
        </div>
    );
}

export default productCard;