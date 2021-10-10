import "./../cartPageTile/cartPageTile.css";
import CartPageTile from "./../cartPageTile/cartPageTileNoEdit";
import Divider from "./../divider/divider";
import React, { Component } from "react";

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order_id: window.location.search
        .substring(1)
        .split("=")
        .slice(1)
        .toString(),
      currency: "",
      total: "",
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "https://embellish.herokuapp.com/product/show_order/" +
        this.state.order_id,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.order.items) {
          this.setState({
            ...this.state,
            items: JSON.parse(result.order.items),
            currency: result.order.currency,
            total: result.order.total,
          });
        }
      })
      .catch((error) => {});
  }

  get_tiles() {
    return this.state.items.map((item, index) => {
      return (
        <CartPageTile
          key={index}
          img={item.img}
          size={item.size}
          color={item.color}
          qty={item.qty}
          price_pkr={item.price_pkr}
          price_ind={item.price_ind}
          price_uae={item.price_uae}
          currency={this.state.currency}
          name={item.name}
        ></CartPageTile>
      );
    });
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <div className="cart-page-container">
          <Divider title="Your Order"></Divider>

          <div>No Items</div>
        </div>
      );
    } else {
      return (
        <div className="cart-page-container">
          <Divider title="Your Order"></Divider>

          {this.get_tiles()}

          <Divider
            title={"Total : " + this.state.total + " " + this.state.currency}
          ></Divider>
        </div>
      );
    }
  }
}

export default OrderDetails;
