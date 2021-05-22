import Container from "react-bootstrap/Container";
import Carousel from "./UI/carousel";

function contentContainer(){
    return(
        <Container>
            <Carousel></Carousel>
            {/* <div><span></span>Shop by Category<span></span></div> */}
        </Container>
    );
}

export default contentContainer;