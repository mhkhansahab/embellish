import React from "react";
import "./cart.css";

function cart() {
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-header flex center-2">
          <div className="header-title">Shopping Cart</div>
          <div><i className="fas fa-times cancel-icon"></i></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default cart;
