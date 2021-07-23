import "./cartPageTile.css";
import React, { Component } from "react";

class CartPageTileNoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      size: props.size,
      color: props.color,
      qty: props.qty,
      img: props.img,
      currency: props.currency,
      price: props.price,
    };
  }

  render() {
    return (
      <div>
        <div className="tile-container">
          <div className="cart-page-tile">
            <div
              className="cart-page-tile-img"
              style={{ backgroundImage: "url(" + this.state.img + ")" }}
            ></div>
            <div className="cart-page-tile-detail">
              <div>{this.state.name}</div>
              <div>
                Size: <b>{this.state.size}</b>
              </div>
              <div>
                Color: <b>{this.state.color}</b>
              </div>
            </div>
          </div>
          <div className="cart-page-tile-btns">
            <div className="quantity-container">
              <div>{"Qty: " + this.state.qty}</div>
            </div>
            <div className="price-container">
              {parseInt(this.state.price) * parseInt(this.state.qty) +
                " " +
                this.state.currency}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPageTileNoEdit;
