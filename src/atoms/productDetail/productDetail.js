import React from "react";
import "./productDetail.css";

function productDetail({ product }) {
    const currency = window.localStorage.getItem("country");

  return (
    <div className="detail-container">
      <div className="title">{product.name}</div>
      <div className="price">
        {currency === "AED"
          ? product.price_uae + " " + currency
          : currency === "IND"
          ? product.price_ind + " " + currency
          : product.price_pkr + " " + currency}
      </div>
      <div className="sizes">
        <div className="box-title">Sizes</div>
        <div className="box-container flex center-2">
          {product.sizes.map((size, index) => {
            return (
              <div key={index} className="box flex center-1 center-2">
                {size}
              </div>
            );
          })}
        </div>
        <div className="box-title">Colors</div>
        <div className="box-container flex center-2">
          {product.colors.map((color, index) => {
            return (
              <div key={index} className="color-box flex center-1 center-2">
                {color}
              </div>
            );
          })}
        </div>
      </div>
      <div className="add-btn">Add to Cart</div>
    </div>
  );
}

export default productDetail;
