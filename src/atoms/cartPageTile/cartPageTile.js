import React, {useEffect} from "react";
import "./cartPageTile.css";

function CartPageTile({order, incQuantity, decQuantity, delOrder}) {

  useEffect(() => {
    
  }, [order]);

  return (
    <div className="tile-container">
      <div className="cart-page-tile">
        <div
          className="cart-page-tile-img"
          style={{ backgroundImage: "url(" + order.image + ")" }}
        ></div>
        <div className="cart-page-tile-detail">
          <div>{order.name}</div>
          <div>
            Size: <b>{order.size}</b>
          </div>
          <div>
            Color: <b>{order.color}</b>
          </div>
          <div className="tile-icon-container pointer" onClick={()=>delOrder(order)}>
            <i class="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div className="cart-page-tile-btns">
        <div className="quantity-container">
            <div className="pointer" onClick={()=>decQuantity(order)}><i class="fas fa-minus"></i></div>
            <div>{order.quantity}</div>
            <div className="pointer" onClick={()=>incQuantity(order)}><i class="fas fa-plus"></i></div>
        </div>
        <div className="price-container">{order.price + " " + order.currency}</div>
      </div>
    </div>
  );
}

export default CartPageTile;
