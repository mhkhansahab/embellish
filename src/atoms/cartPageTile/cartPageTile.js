import React from "react";
import "./cartPageTile.css";
import image from "./../../assets/tile-images/1.jpg";

function cartPageTile() {
  return (
    <div className="tile-container">
      <div className="cart-page-tile">
        <div
          className="cart-page-tile-img"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>
        <div className="cart-page-tile-detail">
          <div>Aurel</div>
          <div>
            Type: <b>Slim Fit</b>
          </div>
          <div>
            Size: <b>S</b>
          </div>
          <div className="tile-icon-container">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div className="cart-page-tile-btns">
        <div className="quantity-container">
            <div><i class="fas fa-minus"></i></div>
            <div>4</div>
            <div><i class="fas fa-plus"></i></div>
        </div>
        <div className="price-container">Rs. 2990.00</div>
      </div>
    </div>
  );
}

export default cartPageTile;
