import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p1 from '../../assets/p1.jpg'
import App_store from "/App_store.png"
import Play_store from "/Play_store.png"

const Banner = () => {
  const [index, setIndex] = useState(0);

  // Custom interval for the carousel that works even when the browser is inactive
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='md:m-10 mx-3 my-2 font-poppins'>
      {/* <Example /> */}
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        <Carousel.Item>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Base Image */}
            <img
              className="d-block w-100 rounded p-1"
              src={p1}
              alt="First slide"
              style={{
                border: 'solid',
                zIndex: '0',
              }}
            />

            {/* Play Store Image */}
            <a href='https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch'>
              <img
                src={Play_store} // Replace with your Play Store image source
                alt="Play Store"
                style={{
                  position: 'absolute',
                  top: '64.3%',
                  height: '14%',
                  left: '28%',
                  zIndex: '1',
                }}
              />
            </a>

            {/* App Store Image */}
            <a href='https://apps.apple.com/in/app/zymo-self-drive-car-rental/id1547829759?utm_source=apple_ios&utm_medium=referral&utm_campaign=app_launch'>
              <img
                src={App_store} // Replace with your App Store image source
                alt="App Store"
                style={{
                  position: 'absolute',
                  top: '63.7%',
                  height: '15%',
                  left: '1%', // Adjust as needed to position to the right of the Play Store image
                  zIndex: '1',
                }}
              />
            </a>
          </div>
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


export default Banner;
