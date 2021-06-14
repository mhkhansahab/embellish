import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

const carousel = (props) => {
  return (
    <div className="carousel-container-2">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.firstImage}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.secondImage}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.thirdImage}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default carousel;