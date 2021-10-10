import React, { useEffect, useState } from "react";
import Carousel from "./../UI/carousel";
import ProductDetail from "./../../atoms/productDetail/productDetail";
import "./productPage.css";
import ProductCard from "./../../atoms/productCard/productCard";
import Divider from "./../../atoms/divider/divider";
import ReviewCard from "../../atoms/reviewCard/reviewCard";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getCategoryProducts,
  getProductDetails,
} from "../../store/services/products";
import { Link } from "react-router-dom";
import Splash from "../../atoms/splash/splash";
import Swal from "sweetalert2";

function ProductPage({ location }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.productDetails);
  const products = useSelector(
    (state) => state.productReducer.categoryProducts
  );
  const searchParam = location.search.split("=")[1];
  const currency = window.localStorage.getItem("country");

  const [orderProduct, setOrderProduct] = useState({
    id: "",
    name: "",
    quantity: 1,
    size: "",
    color: "",
    image: "",
    price_pkr: "",
    price_uae: "",
    price_ind: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(getProductDetails(searchParam)).then((data) => {
      dispatch(getCategoryProducts(data.category));
    });
    if (product) {
      setOrderProduct({
        ...orderProduct,
      });
    }
  }, [location, currency]);

  const incQuantity = () => {
    setOrderProduct({
      ...orderProduct,
      quantity: orderProduct.quantity + 1,
    });
  };
  const decQuantity = () => {
    if (orderProduct.quantity > 1) {
      setOrderProduct({
        ...orderProduct,
        quantity: orderProduct.quantity - 1,
      });
    }
  };

  const colorSelector = (color) => {
    const price = currency === "AED" ? product.price_uae : product.price_ind;
    setOrderProduct({
      ...orderProduct,
      color: color,
      name: product.name,
      id: product._id,
      image: product.image,
      price: price,
    });
  };
  const sizeSelector = (size) => {
    const price = currency === "AED" ? product.price_uae : product.price_ind;
    setOrderProduct({
      ...orderProduct,
      size: size,
      name: product.name,
      id: product._id,
      image: product.image,
      price: price,
    });
  };

  const addToCart = () => {
    if (
      orderProduct.name !== "" &&
      orderProduct.id !== "" &&
      orderProduct.size !== "" &&
      orderProduct.color !== ""
    ) {
      const order = window.localStorage.getItem("order");
      if (order) {
        let arr = JSON.parse(order);
        let flag = false;
        arr.forEach((element) => {
          if (
            element.id === orderProduct.id &&
            element.size === orderProduct.size &&
            element.color === orderProduct.color
          ) {
            element.quantity += orderProduct.quantity;
            flag = true;
          }
        });
        if (flag) {
          window.localStorage.setItem("order", JSON.stringify(arr));
        } else {
          orderProduct.price_pkr = product.price_pkr;
          orderProduct.price_uae = product.price_uae;
          orderProduct.price_ind = product.price_ind;

          arr = arr.concat(orderProduct);
          window.localStorage.setItem("order", JSON.stringify(arr));
        }
      } else {
        const arr = [];
        arr.push(orderProduct);
        window.localStorage.setItem("order", JSON.stringify(arr));
      }
      setOrderProduct({
        id: "",
        name: "",
        price: "",
        quantity: 1,
        size: "",
        color: "",
        image: "",
      });
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: "Product Added To Cart.",
        iconColor: "#000",
        confirmButtonColor : "#000"
      })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Information Required!',
        text: 'Please Select Size, Color and Quantity.',
        iconColor: "#000",
        confirmButtonColor : "#000"
      })
    }
  };

  if (product === null) {
    return <Splash />;
  } else {
    return (
      <>
        <div className="product-page-container flex">
          <div className="carousel-container">
            {product ? (
              <Carousel
                banners={product.more_images}
                type="product-page"
                style={{ height: "500px" }}
              ></Carousel>
            ) : null}
          </div>
          <div className="product-container flex center-2">
            {product ? (
              <ProductDetail
                product={product}
                orderProduct={orderProduct}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
                sizeSelector={sizeSelector}
                colorSelector={colorSelector}
                addToCart={addToCart}
              ></ProductDetail>
            ) : null}
          </div>
          <div className="empty-container"></div>
          <Divider title="Description"></Divider>
          {product ? (
            <div className="product-description">{product.description}</div>
          ) : null}
        </div>

        <Divider title="Reviews"></Divider>
        <div className="review-card-container flex">
          {product.reviews !== null ? (
            product.reviews.map((review, index) => {
              return (
                <ReviewCard
                  details={JSON.parse(review)}
                  key={index}
                ></ReviewCard>
              );
            })
          ) : (
            <h3>No Reviews</h3>
          )}
        </div>

        <Divider title="Similar Products"></Divider>
        <div className="products-card-container">
          <div className="product-cards">
            {products
              ? products.products.map((product) => {
                  return (
                    <ProductCard
                      product={product}
                      key={product._id}
                    ></ProductCard>
                  );
                })
              : null}
          </div>
          {product ? (
            <Link
              style={{ textDecoration: "none" }}
              to={"/productlist?category=" + product.category}
            >
              <div className="more-btn">
                More<div className="transition-div">More</div>
              </div>
            </Link>
          ) : null}
        </div>
      </>
    );
  }
}

export default withRouter(ProductPage);
