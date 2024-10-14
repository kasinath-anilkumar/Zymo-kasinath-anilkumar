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
import c10 from "../../assets/cars/Brezza.png";
import c11 from "../../assets/cars/Fortuner.png";
import c12 from "../../assets/cars/Innova Crysta.png";
import c13 from "../../assets/cars/Innova.png";
import c14 from "../../assets/cars/Kia Sonet.png";
import c15 from "../../assets/cars/MG-Hector.jpg";
import c16 from "../../assets/cars/Nissan Magnite.png";
import c17 from "../../assets/cars/TATA Nexon.png";
import c18 from "../../assets/cars/xuv 300.png";
import c19 from "../../assets/cars/Mahindra-Thar-Image-2-.jpg";

const Car = [
  { id: 1, name: "Baleno", image: c1, rate: "120" },
  { id: 2, name: "BMW", image: c2, rate: "450" },
  { id: 3, name: "XUV 500", image: c3, rate: "299" },
  { id: 4, name: "Brezza", image: c4, rate: "125" },
  { id: 5, name: "Maruti Alto", image: c5, rate: "49" },
  { id: 6, name: "Swift Dzire", image: c6, rate: "110" },
  { id: 7, name: "Maruti Ertiga", image: c7, rate: "115" },
  { id: 8, name: "Honda City", image: c8, rate: "130" },
  { id: 9, name: "Renault Triber", image: c9, rate: "110" },
  { id: 10, name: "Brezza", image: c10, rate: "125" },
  { id: 11, name: "Fortuner", image: c11, rate: "349" },
  { id: 12, name: "Innova Crysta", image: c12, rate: "320" },
  { id: 13, name: "Innova", image: c13, rate: "280" },
  { id: 14, name: "Kia Sonet", image: c14, rate: "139" },
  { id: 15, name: "MG-Hector", image: c15, rate: "249" },
  { id: 16, name: "Nissan Magnite", image: c16, rate: "144" },
  { id: 17, name: "TATA Nexon", image: c17, rate: "110" },
  { id: 18, name: "XUV 300", image: c18, rate: "89" },
  { id: 19, name: "Mahindra Thar", image: c19, rate: "299" },
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
    <div id="cars" className="relative py-20 px-6 container-md">
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
