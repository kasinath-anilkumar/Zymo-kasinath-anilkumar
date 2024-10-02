import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const Kolkata = () => {
  const [index, setIndex] = useState(0); 

  useEffect(() => {
    // Set an interval to change the slide every 2 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Change to the next slide
    }, 2000); 

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex); // Update index on manual select
  };

  return (
    <div className='m-10'>
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
            className="d-block w-100 rounded p-1"
            src="https://zymo.app/static/media/heroSecImage.012372867a73d0320a1b.jpg"
            alt="Second slide"
            style={{ border: 'solid' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded p-1"
            src="https://zymo.app/static/media/heroSecImage.012372867a73d0320a1b.jpg"
            alt="First slide"
            style={{ border: 'solid' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Kolkata;
