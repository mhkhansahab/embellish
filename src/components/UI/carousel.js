import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

const carousel = (props) => {
  return (
    <div className="carousel-container-2">
    <Carousel fade>
    {props.banners.map((banner, index) => {
          return (
            <Carousel.Item key = {index}>
              <img
                className="d-block w-100"
                src={banner.img}
                alt="Slide"
              />
            </Carousel.Item>);
        })}
    </Carousel>
    </div>
  );
};

export default carousel;