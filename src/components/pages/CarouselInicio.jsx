import Carousel from "react-bootstrap/Carousel";

const CarouselInicio = () => {
  return (
    <Carousel slide={false} interval={9000}>
      <Carousel.Item>
        <img
          className="d-block Carousel-css"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
          alt="Primer slide" loading="lazy"
        />
        <Carousel.Caption>
          <h3>Primer slide</h3>
          <p>Texto descriptivo del primer slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block Carousel-css"
          src="https://images.pexels.com/photos/32375356/pexels-photo-32375356.jpeg"
          alt="Segundo slide" loading="lazy"
        />
        <Carousel.Caption>
          <h3>Segundo slide</h3>
          <p>Texto descriptivo del segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block Carousel-css"
          src="https://images.pexels.com/photos/5792323/pexels-photo-5792323.jpeg"
          alt="Tercer slide" loading="lazy"
        />
        <Carousel.Caption>
          <h3>Tercer slide</h3>
          <p>Texto descriptivo del tercer slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselInicio;
