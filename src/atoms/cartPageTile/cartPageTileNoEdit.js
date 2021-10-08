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
      price_pkr: props.price_pkr,
      price_ind: props.price_ind,
      price_uae: props.price_uae,
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
              <div>
                Price: <b>{(this.state.currency==='AED' ? this.state.price_uae : this.state.currency==='INR' ? this.state.price_ind : this.state.currency==='PKR' ? this.state.price_pkr : '---')  + " " + this.state.currency}</b>
                </div>
            </div>
          </div>
          <div className="cart-page-tile-btns">
            <div className="quantity-container">
              <div>{"Qty: " + this.state.qty}</div>
            </div>
            <div className="price-container">
            {(this.state.currency==='AED' ? this.state.price_uae*this.state.qty : this.state.currency==='INR' ? this.state.price_ind*this.state.qty : this.state.currency==='PKR' ? this.state.price_pkr*this.state.qty : '---')  + " " + this.state.currency}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPageTileNoEdit;
