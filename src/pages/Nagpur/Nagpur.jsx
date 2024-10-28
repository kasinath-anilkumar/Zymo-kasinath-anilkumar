import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner1.jpg'
import p4 from '../../assets/p4.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'


const Nagpur = () => {
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
      <Example />
    </div>
  );
};

export default Nagpur;
