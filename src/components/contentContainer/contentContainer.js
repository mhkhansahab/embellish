import Carousel from "./../UI/carousel";
import Divider from "./../../atoms/divider/divider";
import Card from "./../../atoms/card/card";
import ProductCard from "./../../atoms/productCard/productCard";
import "./content.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ContentContainer() {
  const products = useSelector((state) => state.productReducer.latestArrivals);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const banners = useSelector((state) => state.bannerReducer.banners);

  return (
    <div>
      <Carousel banners={banners} type="home"></Carousel>

      <Divider title="Categories"></Divider>
      <div className="product-cards">
        {!categories || categories.length <= 1
        ?
        <div>No Category Available</div>
        :
        categories.map((category) => {
          return (
            <Link to={"/productlist?category=" + category.value} key={category._id}>
              <Card
                title={category.name}
                image={category.img}
              ></Card>
            </Link>
          );
        })
        }
      </div>

      <Divider title="New Arrival"></Divider>
      <div className="product-cards">
        {!products || products.length <= 1 ? (
          <div>No Product Available</div>
        ) : (
          products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                url={product.image}
                title={product.name}
                price={product.price}
                id={product._id}
              ></ProductCard>
            );
          })
        )}
      </div>
      <Link 
          style ={{textDecoration:"none"}}
          to={"/productlist?category=all-products"}>
            <div className="more-btn">
              More<div className="transition-div">More</div>
            </div>
          </Link>
    </div>
  );
}

export default ContentContainer;
