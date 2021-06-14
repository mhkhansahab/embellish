import Carousel from "./../UI/carousel";
import Divider from "./../../atoms/divider/divider";
import Card from "./../../atoms/card/card";
import ProductCard from "./../../atoms/productCard/productCard";
import "./content.css";
import img1 from "./../../assets/categories/poshak.jpg";
import img2 from "./../../assets/categories/indo-western2.jpg";
import img3 from "./../../assets/categories/traditional.jpg";
import img4 from "./../../assets/categories/indo-western.jpg";
import img5 from "./../../assets/categories/jewellary.jpg";
import img6 from "./../../assets/categories/beauty.jpg";
import img7 from "./../../assets/categories/shoes.jpg";
import bannerOne from "./../../assets/banners/banner4.jpg";
import bannerTwo from "./../../assets/banners/banner2.jpg";
import bannerThree from "./../../assets/banners/banner3.jpg";
import card1 from "./../../assets/product/products/navy-purse.jpg";
import card2 from "./../../assets/product/products/chains.jpg";
import card3 from "./../../assets/product/products/grey-elegance.jpg";
import card4 from "./../../assets/product/products/earrings.jpg";
import card5 from "./../../assets/product/products/crystal-glass.jpg";
import card6 from "./../../assets/product/products/sandal.jpg";


function contentContainer() {
  return (
    <div>
      <Carousel
        firstImage={bannerOne}
        secondImage={bannerTwo}
        thirdImage={bannerThree}
      ></Carousel>
      
        <Divider title="Categories"></Divider>
        <div className="product-cards">
          <Card title="Lucknowi Poshak" image={img1}></Card>
          <Card title="Indo-Westernn" image={img2}></Card>
          <Card title="Traditional-Wears" image={img3}></Card>
          <Card title="Formals" image={img4}></Card>
          <Card title="Beauty" image={img5}></Card>
          <Card title="Accessories" image={img6}></Card>
          <Card title="Shoes" image={img7}></Card>
        </div>
  
      <Divider title="New Arrival"></Divider>
      <div className="product-cards">
        <ProductCard
          url={card1}
          title="Poshak"
        ></ProductCard>
        <ProductCard
          url={card2}
          title="Poshak"
        ></ProductCard>
        <ProductCard
          url= {card3}
           title="Poshak"
        ></ProductCard>
        <ProductCard
          url={card4}
          title="Poshak"
        ></ProductCard>
        <ProductCard
          url={card5}
          title="Poshak"
        ></ProductCard>
        <ProductCard
          url={card6}
          title="Poshak"
        ></ProductCard>
      </div>
      <div className="more-btn">
        More<div className="transition-div ">More</div>
      </div>
    </div>
  );
}

export default contentContainer;
