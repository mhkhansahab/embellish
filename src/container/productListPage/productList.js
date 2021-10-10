import React, { useEffect } from "react";
import "./productList.css";
import ProductCard from "./../../atoms/productCard/productCard";
import Divider from "./../../atoms/divider/divider";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../../store/services/products";
import Splash from "../../atoms/splash/splash";

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
        } else if (searchParam === "all_products") {
          return searchParam;
        }
      })
      .filter(Boolean);
    return category;
  };

  const pageName = getPageName();
  if (!pageName.length > 0) {
    index++;
  }

  useEffect(() => {
    dispatch(getCategoryProducts(pageName[0]));
  }, [index, location]);

  if (categories.length === 0) {
    return <Splash />;
  } else {
    return (
      <div className="product-list-page-container">
        <Divider title={pageName[0].replace("_", " ")}></Divider>
        <div className="product-cards">
          {categoryProducts ? (
            categoryProducts.products.length > 0 ? (
              categoryProducts.products.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    key={product._id}
                  ></ProductCard>
                );
              })
            ) : (
              <div>No Product Available</div>
            )
          ) : (
            <div>No Product Available</div>
          )}
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* <div className="more-btn">
          More<div className="transition-div ">More</div>
        </div> */}
      </div>
    );
  }
}

export default withRouter(ProductList);
