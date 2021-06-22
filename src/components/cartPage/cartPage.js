import React from "react";
import "./cartPage.css";
import CartPageTile from "../../atoms/cartPageTile/cartPageTile";
import Divider from "../../atoms/divider/divider";

function cartPage() {
  return (
    <div className="cart-page-container">
      {/* <div className="cart-page-header flex center-1 center-2">
        Shopping Cart
      </div> */}
      <Divider title = "Shopping Cart"></Divider>
      <CartPageTile></CartPageTile>
      <CartPageTile></CartPageTile>
      <CartPageTile></CartPageTile>
      <CartPageTile></CartPageTile>
      <div className="more-btn checkout-btn">
        Proceed to Checkout<div className="transition-div checkout-transition-div">Proceed to Checkout</div>
      </div>
    </div>
  );
}

export default cartPage;
