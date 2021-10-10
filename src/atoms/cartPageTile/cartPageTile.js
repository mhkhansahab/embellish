import React, { useEffect } from "react";
import "./cartPageTile.css";

function CartPageTile({ order, incQuantity, decQuantity, delOrder, currency }) {
  useEffect(() => {}, [order]);

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
          <div>
            Price:{" "}
            <b>
              {(currency === "AED"
                ? order.price_uae
                : currency === "IND"
                ? order.price_ind
                : currency === "PKR"
                ? order.price_pkr
                : "---") +
                " " +
                currency}
            </b>
          </div>
          <div
            className="tile-icon-container pointer"
            onClick={() => delOrder(order)}
          >
            <i className="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div className="cart-page-tile-btns">
        <div className="quantity-container">
          <div className="pointer" onClick={() => decQuantity(order)}>
            <i className="fas fa-minus"></i>
          </div>
          <div>{order.quantity}</div>
          <div className="pointer" onClick={() => incQuantity(order)}>
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="price-container">
          {(currency === "AED"
            ? order.price_uae * order.quantity
            : currency === "IND"
            ? order.price_ind * order.quantity
            : currency === "PKR"
            ? order.price_pkr * order.quantity
            : "---") +
            " " +
            currency}
        </div>
      </div>
    </div>
  );
}

export default CartPageTile;
