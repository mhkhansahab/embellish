import React, {useEffect} from "react";
import "./cartPage.css";
import CartPageTile from "../../atoms/cartPageTile/cartPageTile";
import Divider from "../../atoms/divider/divider";

function CartPage() {
  const orders = JSON.parse(window.localStorage.getItem("order"));
  useEffect(() => {
    
    }, []);

  return (
    <div className="cart-page-container">
      <Divider title = "Shopping Cart"></Divider>
      {orders && orders.length > 0 
      ?
      orders.map((order, index)=>{
        return <CartPageTile order={order} key={index}></CartPageTile>
      })
      : <div>Your Cart is Empty</div>
    }
      <div className="more-btn checkout-btn">
        Proceed to Checkout<div className="transition-div checkout-transition-div">Proceed to Checkout</div>
      </div>
    </div>
  );
}

export default CartPage;
