import Carousel from "react-bootstrap/Carousel";

const carousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/252820/1320x580-77.jfif"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/252820/1320x580-77.jfif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/252820/1320x580-77.jfif"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;