import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Suv, Hatchback, Sedan, Luxury, Electric, Muv } from "./Cars.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropright } from "react-icons/io";

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

const MostSearchCars = () => {
  const [cars, setCars] = useState(Suv);
  const [current, setCurrent] = useState("suv");
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const categories = [
    { label: "Suv", key: "suv", component: Suv },
    { label: "Hatchback", key: "hatchback", component: Hatchback },
    { label: "Sedan", key: "sedan", component: Sedan },
    { label: "Luxury", key: "luxury", component: Luxury },
    { label: "Electric", key: "electric", component: Electric },
    { label: "Muv", key: "muv", component: Muv },
  ];
  const itemsPerPage = 2;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginatedCategories = categories.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

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
        The Most Searched Cars
      </h1>

      {/* Car Category Tabs */}
      <div className="flex justify-center mb-8">
        {!isSmallScreen ? (
          <ul className="flex gap-4">
            {categories.map((carCategory) => (
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
        ) : (
          <div>
            <ul className="flex gap-4 justify-center">
              {paginatedCategories.map((carCategory) => (
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
            <div className="mt-4 flex justify-center gap-4">
              <button
                className={`px-4 py-2 rounded-md ${
                  currentPage > 0
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  currentPage < Math.ceil(categories.length / itemsPerPage) - 1
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(categories.length / itemsPerPage) - 1
                }
              >
                Next
              </button>
            </div>
          </div>
        )}
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

export default MostSearchCars;
