import React,{useState} from 'react';
import {Popular, Latest, Upcoming} from "./Car.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";

// Custom Next Arrow Component
const NextArrow = ({ onClick, isVisible }) => {
  return (
    isVisible && (
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer shadow-lg z-10"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    )
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick, isVisible }) => {
  return (
    isVisible && (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer shadow-lg z-10"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    )
  );
};

const ElectricCars = () => {
  const [cars, setCars] = useState(Latest);
  const [current, setCurrent] = useState("latest");
  const [slideIndex, setSlideIndex] = useState(0);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow isVisible={slideIndex < cars.length - 4} />,
    prevArrow: <PrevArrow isVisible={slideIndex > 0} />,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-3 my-10 rounded-xl p-6 text-center font-poppins bg-violet-200">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Electric Cars
      </h1>

      {/* Car Category Tabs */}
      <div className="flex justify-center mb-8">
        <ul className="flex gap-4">
          {[
            { key: "latest", label: "Latest", component: Latest },
            { key: "popular", label: "Popular", component: Popular },
            { key: "upcoming", label: "Upcoming", component: Upcoming },
          ].map((carCategory) => (
            <li
              key={carCategory.key}
              onClick={() => {
                setCars(carCategory.component);
                setCurrent(carCategory.key);
                setSlideIndex(0);
              }}
              className={`cursor-pointer px-4 shadow-xl py-2 rounded-md font-semibold ${
                current === carCategory.key
                  ? "bg-gradient-to-r from-indigo-500 to-[#7c2a9d] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {carCategory.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <Slider {...sliderSettings}>
          {cars.map((car) => (
            <div key={car.image} className="p-2">
              <div className="bg-white border-solid h-96 border-4 w-72 shadow-xl rounded-2xl overflow-hidden p-4 transition transform hover:scale-105 relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h1 className="text-xl font-bold text-gray-800">{car.name}</h1>
                <p className="text-lg text-gray-500 mt-2">{car.price}</p>
                <a href="#" className="mt-4 inline-block">
                  <button className="bg-gradient-to-r from-indigo-500 to-[#7c2a9d] text-white px-4 py-2 rounded-md flex items-center">
                    See More <IoIosArrowDropright className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ElectricCars;

