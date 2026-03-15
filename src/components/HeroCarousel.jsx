import { Carousel } from "react-bootstrap";

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="slide"
        />
        <Carousel.Caption>
          <h3>Innovative IT Solutions</h3>
          <p>We build scalable digital products</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
          alt="slide"
        />
        <Carousel.Caption>
          <h3>Web & Mobile Development</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;