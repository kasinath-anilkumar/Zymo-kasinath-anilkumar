import React from "react";
import Slider from "react-slick";
import logo from "./Brandlogo";

const halfLength = Math.ceil(logo.length / 2);
const left = logo.slice(0, halfLength);
const right = logo.slice(halfLength);

const CarBrands = () => {
  // Base settings for both sliders
  const baseSettings = {
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  // Responsive settings for the left-to-right slider
  const leftSliderSettings = {
    ...baseSettings,
    rtl: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Responsive settings for the right-to-left slider
  const rightSliderSettings = {
    ...baseSettings,
    rtl: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Left slider moving left to right */}
      <div className="w-full">
        <Slider {...leftSliderSettings}>
          {left.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col w-10 h-full min-h-[150px]"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-10 h-20 object-contain mb-2" // Ensures uniform image size and aspect ratio
              />
              <p className="text-sm  font-medium font-poppins text-gray-700">
                {brand.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Right slider moving right to left */}
      <div className="w-full">
        <Slider {...rightSliderSettings}>
          {right.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col h-full min-h-[150px]"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-10 h-20 object-contain mb-2" // Ensures uniform image size and aspect ratio
              />
              <p className="text-sm  font-medium font-poppins text-gray-700">
                {brand.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarBrands;
