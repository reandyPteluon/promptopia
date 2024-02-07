import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img src="/assets/images/main-picture.jpg" alt="Promptopia" className="logo" />
        <Carousel.Caption style={{ color: 'black' }}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/assets/images/main-picture.jpg" alt="Promptopia" className="logo" />
        <Carousel.Caption style={{ color: 'black' }}>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
