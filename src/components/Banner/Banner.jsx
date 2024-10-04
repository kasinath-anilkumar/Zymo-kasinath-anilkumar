import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import p1 from './Images/p1.png'
import p2 from './Images/p2.png'
import p3 from './Images/p3.png'


const Banner = () => {
  const [index, setIndex] = useState(0);

  // Custom interval for the carousel that works even when the browser is inactive
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 4);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container-md mt-5'>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded p-1"
            src="https://zymo.app/static/media/heroSecImage.012372867a73d0320a1b.jpg"
            alt="First slide"
            style={{ border: 'solid' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded p-1 img-fluid"
            src={p1}
            alt="Second slide"
            style={{ border: 'solid' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded p-1 img-fluid"
            src={p3}
            alt="Third slide"
            style={{ border: 'solid' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded p-1 img-fluid"
            src={p2}
            alt="Forth slide"
            style={{ border: 'solid' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
