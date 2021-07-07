import "./productCard.css";

const productCard = (props) => {
  return (
    <div className="product-card-container">
      <div className="product-image" style={{backgroundImage:"url("+ props.url +")"}}></div>
      <div className="product-card-text flex">
          <div className="card-text p-title">{props.title}</div>
          <div className="card-text p-price">{props.price} PKR</div>
          <div className="product-card-btn">Add to Cart</div>
      </div>
    </div>
  );
};

export default productCard;
