import React from "react";
import Carousel from "./../UI/carousel";
import ProductDetail from "./../../atoms/productDetail/productDetail";
import "./productPage.css";
import ProductCard from "./../../atoms/productCard/productCard";
import Divider from "./../../atoms/divider/divider";

function productPage() {
  return (
    <div className="product-page-container flex">
      <div className="carousel-container">
        <Carousel
          firstImage="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/861-6719-c_2400x.jpg?v=1583388935s"
          secondImage="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/861-6719-a_2400x.jpg?v=1583388935"
          thirdImage="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/861-6719-d_2400x.jpg?v=1583388912"
        ></Carousel>
      </div>
      <div className="product-container">
          <ProductDetail></ProductDetail>
      </div>
      <Divider title="Similar Products"></Divider>
      <div className="landing-card-container flex product-cards">
          <ProductCard
            url="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/172999486_120933150091787_9017708873618743525_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHkRn6wu2CwPHrV9irmz3WDoTRi7rpAdg-hNGLuukB2D1zsBnV14gJenprulek1JCaoro6fGeA8ZpCBFB40CMzW&_nc_ohc=lV3Np_2u7HUAX_hwvvI&_nc_ht=scontent.fkhi17-1.fna&oh=71996ab531356c17fb61d5d45c074478&oe=60E28130"
            title="Poshak"
          ></ProductCard>
          <ProductCard
            url="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/172999486_120933150091787_9017708873618743525_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHkRn6wu2CwPHrV9irmz3WDoTRi7rpAdg-hNGLuukB2D1zsBnV14gJenprulek1JCaoro6fGeA8ZpCBFB40CMzW&_nc_ohc=lV3Np_2u7HUAX_hwvvI&_nc_ht=scontent.fkhi17-1.fna&oh=71996ab531356c17fb61d5d45c074478&oe=60E28130"
            title="Poshak"
          ></ProductCard>
          <ProductCard
            url="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/172999486_120933150091787_9017708873618743525_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHkRn6wu2CwPHrV9irmz3WDoTRi7rpAdg-hNGLuukB2D1zsBnV14gJenprulek1JCaoro6fGeA8ZpCBFB40CMzW&_nc_ohc=lV3Np_2u7HUAX_hwvvI&_nc_ht=scontent.fkhi17-1.fna&oh=71996ab531356c17fb61d5d45c074478&oe=60E28130"
            title="Poshak"
          ></ProductCard>
          <ProductCard
            url="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/172999486_120933150091787_9017708873618743525_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHkRn6wu2CwPHrV9irmz3WDoTRi7rpAdg-hNGLuukB2D1zsBnV14gJenprulek1JCaoro6fGeA8ZpCBFB40CMzW&_nc_ohc=lV3Np_2u7HUAX_hwvvI&_nc_ht=scontent.fkhi17-1.fna&oh=71996ab531356c17fb61d5d45c074478&oe=60E28130"
            title="Poshak"
          ></ProductCard>
          <ProductCard
            url="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/172999486_120933150091787_9017708873618743525_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHkRn6wu2CwPHrV9irmz3WDoTRi7rpAdg-hNGLuukB2D1zsBnV14gJenprulek1JCaoro6fGeA8ZpCBFB40CMzW&_nc_ohc=lV3Np_2u7HUAX_hwvvI&_nc_ht=scontent.fkhi17-1.fna&oh=71996ab531356c17fb61d5d45c074478&oe=60E28130"
            title="Poshak"
          ></ProductCard>
          <ProductCard
            url="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/172999486_120933150091787_9017708873618743525_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHkRn6wu2CwPHrV9irmz3WDoTRi7rpAdg-hNGLuukB2D1zsBnV14gJenprulek1JCaoro6fGeA8ZpCBFB40CMzW&_nc_ohc=lV3Np_2u7HUAX_hwvvI&_nc_ht=scontent.fkhi17-1.fna&oh=71996ab531356c17fb61d5d45c074478&oe=60E28130"
            title="Poshak"
          ></ProductCard>
        </div>
        <div className="more-btn">More<div className="transition-div ">More</div></div>
    </div>
  );
}

export default productPage;
