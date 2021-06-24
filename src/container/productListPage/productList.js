import React from 'react';
import "./productList.css";
import ProductCard from "./../../atoms/productCard/productCard";
import Divider from "./../../atoms/divider/divider";
import card1 from "./../../assets/product/products/navy-purse.jpg";

function ProductList(props) {
    return (
        <div className="product-list-page-container">
            <Divider title={props.title}></Divider>
            <div className="product-cards">
                <ProductCard
                url={card1}
                title="Poshak"
                ></ProductCard>
                <ProductCard
                url={card1}
                title="Poshak"
                ></ProductCard>
                <ProductCard
                url={card1}
                title="Poshak"
                ></ProductCard>
                <ProductCard
                url={card1}
                title="Poshak"
                ></ProductCard>
                <ProductCard
                url={card1}
                title="Poshak"
                ></ProductCard>
                <ProductCard
                url={card1}
                title="Poshak"
                ></ProductCard>
                <ProductCard
                url={card1}
                title="Poshak"
                ></ProductCard>
            </div>
            <div className="more-btn">
                More<div className="transition-div ">More</div>
            </div>
        </div>
    );
}

export default ProductList;
