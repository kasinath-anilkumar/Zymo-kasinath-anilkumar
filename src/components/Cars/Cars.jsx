import React, { useRef } from "react";
import Slider from "react-slick";

import Next from "/next.png"
import Prev from "/prev.png"

import c1 from "/c1.png";
import c2 from "/c2.png";
import c3 from "/c3.png";
import c4 from "/c4.png";
import c5 from "/c5.png";
import c6 from "/c6.png";
import c7 from "/c7.png";
import c8 from "/c8.png";
import c9 from "/c9.png";

const Car = [
  { id: 1, name: "car1", image: c1, rate: "67" },
  { id: 2, name: "car2", image: c2, rate: "67" },
  { id: 3, name: "car3", image: c3, rate: "67" },
  { id: 4, name: "car4", image: c4, rate: "67" },
  { id: 5, name: "car5", image: c5, rate: "67" },
  { id: 6, name: "car6", image: c6, rate: "67" },
  { id: 7, name: "car7", image: c7, rate: "67" },
  { id: 8, name: "car8", image: c8, rate: "67" },
  { id: 9, name: "car9", image: c9, rate: "67" },
];

const Cars = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only 1 image at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative py-20 px-6 container-md">
      <h1 className="text-center text-4xl font-bold mb-8">
        Choose From Our Wide Range Of Cars
      </h1>
      <Slider {...settings} ref={sliderRef} className="relative">
        {Car.map((car) => (
          <div key={car.id} className="text-center">
            <img
              src={car.image}
              alt={car.name}
              className="w-9/12 h-4/6 object-cover mx-auto"
            />
            {/* <h1 className="text-lg text-gray-600">₹{car.rate}/hr</h1> */}
            <pre><h3 className="text-3xl font-bold mt-1">{car.name}  -  ₹{car.rate}/hr</h3></pre>
            
          </div>
        ))} 
      </Slider>
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <img src={Prev} alt="" 
        className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <img src={Next} alt="" 
        className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Cars;
