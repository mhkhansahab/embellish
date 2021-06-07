import { Container } from "react-bootstrap";
import Carousel from "./../UI/carousel";
import Divider from "./../../atoms/divider/divider";
import "./content.css";
import Card from "./../../atoms/card/card";
import ProductCard from "./../../atoms/productCard/productCard";
import img1 from "./../../assets/card-img-1.jpg";
import img2 from "./../../assets/card-img-3.jpg";
import img3 from "./../../assets/card-img-4.jpg";

function contentContainer() {
  return (
    <div>
      <Carousel></Carousel>
      <Container>
        <Divider title="Categories"></Divider>
        <div className="landing-card-container flex product-cards">
          <Card title="Hand Embroidery" image={img1}></Card>
          <Card title="Cotton Wear" image={img2}></Card>
          <Card title="Stylish Kurtis" image={img3}></Card>
        </div>
        <Divider title="New Arrival"></Divider>
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
      </Container>
    </div>
  );
}

export default contentContainer;
