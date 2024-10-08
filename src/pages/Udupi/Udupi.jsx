import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner1.jpg'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'



const Udupi = () => {
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
    <div className='m-10'>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        <Carousel.Item>
          <a href="http://get.zymo.app/car">
            <img
              className="d-block w-100 rounded p-1"
              src={banner1}
              alt="First slide"
              style={{ border: 'solid' }}
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://get.zymo.app/car">
            <img
              className="d-block w-100 rounded p-1"
              src={p1}
              alt="slide"
              style={{ border: 'solid' }}
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://get.zymo.app/car">
            <img
              className="d-block w-100 rounded p-1"
              src={p2}
              alt="Second slide"
              style={{ border: 'solid' }}
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="http://get.zymo.app/car">
            <img
              className="d-block w-100 rounded p-1"
              src={p3}
              alt="Third slide"
              style={{ border: 'solid' }}
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Udupi;
