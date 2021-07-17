import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

const carousel = (props) => {
  return (
    <div className="carousel-container-2">
    <Carousel fade style={props.style}>
      {props.type !== "home"
      ? props.banners.map((banner, index) => {
        return (
          <Carousel.Item key = {index}>
            <div
              className="d-block w-100"
              style = {{backgroundImage: 'url('+ banner +')',height: "500px", backgroundSize : "contain", backgroundRepeat : "no-repeat", backgroundPosition: "center"}}
            ></div>
          </Carousel.Item>
        );
      }) : 
      props.banners.map((banner, index) => {
        return (
          <Carousel.Item key = {index}>
            <img
              className="d-block w-100"
              src={banner.img}
              alt="Slide"
            />
          </Carousel.Item>
        );
      })
      }
    </Carousel>
    </div>
  );
};

export default carousel;