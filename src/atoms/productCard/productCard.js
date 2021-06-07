import "./productCard.css";

const productCard = (props) => {
  return (
    <div className="product-card-container">
      <div className="product-image-container flex center-1 center-2">
        <img src={props.url} alt="" className="product-image"></img>
      </div>
      <div className="product-card-text flex center-2">
        <div>
          <div className="card-text">{props.title}</div>
          <div className="card-text">Rs.3000</div>
        </div>
        <div className="product-card-btn">Add to Cart</div>
      </div>
    </div>
  );
};

export default productCard;
