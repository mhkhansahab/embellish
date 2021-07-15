import React, { useEffect } from "react";
import "./productList.css";
import ProductCard from "./../../atoms/productCard/productCard";
import Divider from "./../../atoms/divider/divider";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../../store/services/products";

function ProductList({ location }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const categoryProducts = useSelector(
    (state) => state.productReducer.categoryProducts
  );
  let index = 0;

  const getPageName = () => {
    
    const searchParam = location.search.split("=")[1];
    const category = categories
      .map((category) => {
        if (category.value === searchParam) {
          return category.name;
        }
      })
      .filter(Boolean);
    return category;
  };

  const pageName = getPageName();
  if(!pageName.length>0){
    index++;
  }

  useEffect(() => {
    dispatch(getCategoryProducts(pageName[0]));
  }, [index]);

  return (
    <div className="product-list-page-container">
      <Divider title={getPageName()}></Divider>
      <div className="product-cards">
        {categoryProducts ? categoryProducts.products.length > 0 
          ? categoryProducts.products.map((product) => {
              return (
                <ProductCard
                  url={product.image}
                  title={product.name}
                  price={product.price_pkr}
                  key={product._id}
                ></ProductCard>
              );
            })
          : <div>No Product Available</div>
        : <div>No Product Available</div>
        }
      </div>
      <div className="more-btn">
        More<div className="transition-div ">More</div>
      </div>
    </div>
  );
}

export default withRouter(ProductList);
