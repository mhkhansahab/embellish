import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const currency = window.localStorage.getItem("country");
  return (
    <Link to={"/product?id=" + props.product._id}>
      <div className="product-card-container">
        <div
          className="product-image"
          style={{ backgroundImage: "url(" + props.product.image + ")" }}
        ></div>
        <div className="product-card-text flex">
          <div className="card-text p-title">{props.product.name}</div>
          <div className="card-text p-price">
            {currency === "AED"
              ? props.product.price_uae + " " + currency
              : currency === "IND"
              ? props.product.price_ind + " " + currency
              : props.product.price_pkr + " " + currency
            }
          </div>
          <div className="product-card-btn">Add to Cart</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
