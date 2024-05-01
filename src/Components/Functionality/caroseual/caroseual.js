import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './carouselimage'; // Assuming the file name is ExampleCarouselImage.js

function CarouselExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage 
          src="hhttps://fileinfo.com/img/ss/xl/jpg_44-2.jpg" 
          alt="First Slide" 
          text="First slide" 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage 
          src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" 
          alt="Second Slide" 
          text="Second slide" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage 
          src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" 
          alt="Third Slide" 
          text="Third slide" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;
