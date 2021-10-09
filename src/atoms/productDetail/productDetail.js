import React from "react";
import "./productDetail.css";

function productDetail({
  product,
  orderProduct,
  decQuantity,
  incQuantity,
  sizeSelector,
  colorSelector,
  addToCart
}) {
  const currency = window.localStorage.getItem("country");

  return (
    <div className="detail-container">
      <div className="title">{product.name}</div>
      <div className="price">
        {currency === "AED"
          ? product.price_uae + " " + currency
          : product.price_ind + " " + currency
          // : currency === "IND"
          // ? product.price_ind + " " + currency
          // : product.price_pkr + " " + currency
        }
      </div>
      <div className="sizes">
        <div className="box-title">Sizes</div>
        <div className="box-container flex center-2">
          {product.sizes.map((size, index) => {
            if (orderProduct.size === size) {
              return (
                <div
                  key={index}
                  className="box flex center-1 center-2 hover"
                  onClick={() => sizeSelector(size)}
                >
                  {size}
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="box flex center-1 center-2"
                  onClick={() => sizeSelector(size)}
                >
                  {size}
                </div>
              );
            }
          })}
        </div>
        <div className="box-title">Colors</div>
        <div className="box-container flex center-2">
          {product.colors.map((color, index) => {
            if (orderProduct.color === color) {
              return (
                <div
                  key={index}
                  className="color-box flex center-1 center-2 hover"
                  onClick={() => colorSelector(color)}
                >
                  {color}
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="color-box flex center-1 center-2"
                  onClick={() => colorSelector(color)}
                >
                  {color}
                </div>
              );
            }
          })}
        </div>
        <div className="box-title">Quantity</div>
        <div className="quantity-container pp-quantity">
          <div onClick={() => decQuantity()} className="pointer">
            <i className="fas fa-minus"></i>
          </div>
          <div>{orderProduct.quantity}</div>
          <div onClick={() => incQuantity()} className="pointer">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>

      <div className="add-btn" onClick={()=>addToCart()}>Add to Cart</div>
    </div>
  );
}

export default productDetail;
