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
          // let item={

          //     product_id :'asdasdasd',
          //     qty : 3,
          //     color : 'Blue',
          //     size : 'Large',
          //     img : 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
          //     name : 'Kurta',
          //     price_pp : 300
          // }

          this.state.items = result.order.items;
          this.state.currency = result.order.currency;
          this.setState({});
        }
      })
      .catch((error) => {});
  }

  get_tiles() {
    return this.state.items.map((item, index) => {
      {
        console.log(item);
      }

      return (
        <CartPageTile
          key={index}
          img={item.img}
          size={item.size}
          color={item.color}
          qty={item.qty}
          price={item.price_pp}
          currency={this.state.currency}
          name={item.name}
        ></CartPageTile>
      );
    });
  }

  render() {
    console.log(this.state.items.length);

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
        </div>
      );
    }
  }
}

export default OrderDetails;
