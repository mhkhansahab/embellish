import React, { useEffect , useState} from "react";
import "./cartPage.css";
import CartPageTile from "../../atoms/cartPageTile/cartPageTile";
import Divider from "../../atoms/divider/divider";

function CartPage() {
  const orders = JSON.parse(window.localStorage.getItem("order"));
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(()=>{
    setOrderProducts(orders);
  },[])

  const incQuantity = (orderParam) => {
    const myOrders = [...orderProducts];
    myOrders.forEach((order) => {
      if (order.id === orderParam.id && order.color === orderParam.color && order.size === orderParam.size) {
        order.quantity += 1;
        setOrderProducts(myOrders);
        window.localStorage.setItem("order", JSON.stringify(myOrders));
      }
    });
  };
  const decQuantity = (orderParam) => {
    const myOrders = [...orderProducts];
    myOrders.forEach((order) => {
      if (order.id === orderParam.id && order.quantity > 1 && order.color === orderParam.color && order.size === orderParam.size) {
        order.quantity -= 1;
        setOrderProducts(myOrders);
        window.localStorage.setItem("order", JSON.stringify(myOrders));
      }
    });
  };

  const delOrder = (orderParam) => {
    const myOrders = [...orderProducts];
    myOrders.forEach((order, index) => {
      if (order.id === orderParam.id && order.quantity > 1 && order.color === orderParam.color && order.size === orderParam.size) {
        myOrders.splice(index, 1);
        setOrderProducts(myOrders);
        window.localStorage.setItem("order", JSON.stringify(myOrders));
      }
    });
  };

  return (
    <div className="cart-page-container">
      <Divider title="Shopping Cart"></Divider>
      {orderProducts && orderProducts.length > 0 ? (
        orderProducts.map((order, index) => {
          return (
            <CartPageTile
              order={order}
              key={index}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
              delOrder={delOrder}
            ></CartPageTile>
          );
        })
      ) : (
        <div>Your Cart is Empty</div>
      )}
      <div className="more-btn checkout-btn">
        Proceed to Checkout
        <div className="transition-div checkout-transition-div">
          Proceed to Checkout
        </div>
      </div>
    </div>
  );
}

export default CartPage;
