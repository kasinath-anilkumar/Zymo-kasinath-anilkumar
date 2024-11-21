import React, { useState } from "react";
import Slider from "react-slick";
import Upcoming from "./Cars.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropright } from "react-icons/io";

// Fuel Type Icon Helper
const FuelTypeIcon = ({ fuelType }) => {
  switch (fuelType) {
    case "Diesel":
    case "Petrol":
    case "Diesel/Petrol":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5 mr-2 inline-block text-gray-700"
        >
          <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 192 8 0c48.6 0 88 39.4 88 88l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-154c-27.6-7.1-48-32.2-48-62l0-64L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3l0 13.5 0 24 0 32 0 152c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-32c0-22.1-17.9-40-40-40l-8 0 0 144c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM96 80l0 96c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16z" />
        </svg>
      );
    case "Electric":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-5 h-5 mr-2 inline-block text-blue-500"
        >
          <path d="M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" />
        </svg>
      );
    default:
      return null;
  }
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
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
);

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
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
);

const UpcomingCars = () => {
  const [cars] = useState(Upcoming);
  const [slideIndex, setSlideIndex] = useState(0);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: slideIndex < cars.length - 4 ? <NextArrow /> : null,
    prevArrow: slideIndex > 0 ? <PrevArrow /> : null,
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
    <div className="mx-3 my-20 rounded-xl p-6 text-center font-poppins bg-violet-200">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        The Upcoming Cars
      </h1>
      <div className="relative">
        <Slider {...sliderSettings}>
          {cars.map((car) => (
            <div key={car.name} className="p-2">
              <div className="bg-white border-solid h-96 border-4 w-72 shadow-xl rounded-2xl overflow-hidden p-4 transition transform hover:scale-105 relative">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-40 object-cover mb-4 rounded-lg shadow-xl"
                />
                <h1 className="text-xl font-bold text-gray-800">{car.name}</h1>
                <p className="text-lg text-gray-500 mt-2">{car.price}</p>
                <p className="text-sm text-gray-600 mt-2 bg-purple-300 rounded-2xl p-1 w-32 mx-auto flex items-center justify-center">
                  <FuelTypeIcon fuelType={car.fuelType} />
                  {car.fuelType}
                </p>
                <a href={`/buy-car/${car.name}`} className="mt-4 inline-block">
                  <button className="flex items-center bg-gradient-to-r from-indigo-500 to-[#7c2a9d] text-white px-4 py-2 rounded-md">
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

export default UpcomingCars;
