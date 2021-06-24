import React from "react";
import Carousel from "./../UI/carousel";
import ProductDetail from "./../../atoms/productDetail/productDetail";
import "./productPage.css";
import ProductCard from "./../../atoms/productCard/productCard";
import Divider from "./../../atoms/divider/divider";
import card1 from "./../../assets/product/img1.jpg";
import image1 from "./../../assets/tile-images/1.jpg";
import image2 from "./../../assets/tile-images/2.jpg";
import ReviewCard from "../../atoms/reviewCard/reviewCard";

function productPage() {
  return (
    <>
    <div className="product-page-container flex">
      <div className="carousel-container">
        <Carousel
          firstImage={image1}
          secondImage={image2}
          thirdImage={image1}
        ></Carousel>
      </div>
      <div className="product-container flex center-1 center-2">
        <ProductDetail></ProductDetail>
      </div>
      <div className="empty-container"></div>
      <Divider title="Description"></Divider>
      <div className="product-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
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
          <ProductCard url={card1} title="Poshak"></ProductCard>
          <ProductCard url={card1} title="Poshak"></ProductCard>
          <ProductCard url={card1} title="Poshak"></ProductCard>
          <ProductCard url={card1} title="Poshak"></ProductCard>
          <ProductCard url={card1} title="Poshak"></ProductCard>
          <ProductCard url={card1} title="Poshak"></ProductCard>
        </div>
        <div className="more-btn">
          More<div className="transition-div ">More</div>
        </div>
      </div>
    </>
  );
}

export default productPage;
