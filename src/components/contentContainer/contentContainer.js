import Carousel from "./../UI/carousel";
import Divider from "./../../atoms/divider/divider";
import Card from "./../../atoms/card/card";
import ProductCard from "./../../atoms/productCard/productCard";
import "./content.css";
import bannerOne from "./../../assets/banners/banner4.jpg";
import bannerTwo from "./../../assets/banners/banner2.jpg";
import bannerThree from "./../../assets/banners/banner3.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ContentContainer() {
  const products = useSelector((state) => state.productReducer.latestArrivals);
  const categories = useSelector((state) => state.categoryReducer.categories);

  return (
    <div>
      <Carousel
        firstImage={bannerOne}
        secondImage={bannerTwo}
        thirdImage={bannerThree}
      ></Carousel>

      <Divider title="Categories"></Divider>
      <div className="product-cards">
        {categories.map((category) => {
          return (
            <Link to={"/productlist?category=" + category.value}>
              <Card
                title={category.title}
                image={
                  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
              ></Card>
            </Link>
          );
        })}
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
      <div className="more-btn">
        More<div className="transition-div ">More</div>
      </div>
    </div>
  );
}

export default ContentContainer;
