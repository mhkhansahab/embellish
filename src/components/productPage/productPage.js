import React, { useEffect } from "react";
import Carousel from "./../UI/carousel";
import ProductDetail from "./../../atoms/productDetail/productDetail";
import "./productPage.css";
import ProductCard from "./../../atoms/productCard/productCard";
import Divider from "./../../atoms/divider/divider";
import ReviewCard from "../../atoms/reviewCard/reviewCard";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {getCategoryProducts , getProductDetails} from "../../store/services/products";
import { Link } from "react-router-dom";

function ProductPage({ location }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.productDetails);
  const products = useSelector(
    (state) => state.productReducer.categoryProducts
  );
  const searchParam = location.search.split("=")[1];

  useEffect(async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(getProductDetails(searchParam)).then((data) => {
      dispatch(getCategoryProducts(data.category));
    });
  }, [location]);

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
          {product ? <ProductDetail product={product}></ProductDetail> : null}
        </div>
        <div className="empty-container"></div>
        <Divider title="Description"></Divider>
        {product ? (
          <div className="product-description">{product.description}</div>
        ) : null}
      </div>

      <Divider title="Reviews"></Divider>
      <div className="review-card-container flex">
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
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

export default withRouter(ProductPage);
