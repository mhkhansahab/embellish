import React, {useEffect} from "react";
import "./productList.css";
import ProductCard from "./../../atoms/productCard/productCard";
import Divider from "./../../atoms/divider/divider";
import card1 from "./../../assets/product/products/navy-purse.jpg";
import { withRouter } from "react-router";
import {useDispatch} from "react-redux";
import { getCategoryProducts } from "../../store/services/products";

function ProductList({ location }) {
    const dispatch = useDispatch();

    useEffect(() => {
        //const searchParam = location.search.split("=")[1];
        //dispatch(getCategoryProducts(searchParam));
    }, []);


  const getPageName = () => {
    const searchParam = location.search.split("=")[1];
    switch (searchParam) {
      case "poshak":
        return "Lukhnowi Poshak";
      case "indo":
        return "Indo-Western";
      case "traditional":
        return "Traditional-Wears";
      case "formals":
        return "Formals";
      case "beauty":
        return "Beauty";
      case "accessories":
        return "Accessories";
      case "shoes":
        return "Shoes";
      default:
    }
  };
  
  return (
    <div className="product-list-page-container">
      <Divider title={getPageName()}></Divider>
      <div className="product-cards">
        <ProductCard url={card1} title="Poshak"></ProductCard>
      </div>
      <div className="more-btn">
        More<div className="transition-div ">More</div>
      </div>
    </div>
  );
}

export default withRouter(ProductList);
