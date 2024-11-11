import React from "react";
import Slider from "react-slick";
import logo from "./Brandlogo"; // Assuming Brandlogo exports an array of brand objects

// Split the logos into two halves for the two sliders
const halfLength = Math.ceil(logo.length / 2);
const left = logo.slice(0, halfLength);
const right = logo.slice(halfLength);

const CarBrands = () => {
  // Base settings for both sliders
  const baseSettings = {
    infinite: true,
    speed: 3000, // Increased speed for continuous scrolling
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll without pauses
    cssEase: "linear",
    arrows: false,
  };

  // Left-to-right slider settings
  const leftSliderSettings = {
    ...baseSettings,
    rtl: false,
    slidesToShow: 6, // Show more logos per view to reduce spacing
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  // Right-to-left slider settings
  const rightSliderSettings = {
    ...baseSettings,
    rtl: true,
    slidesToShow: 6,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="flex flex-col gap-4 font-poppins mx-3 my-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Popular Brands
      </h1>

      {/* Left slider moving left to right */}
      <div className="w-full overflow-hidden">
        <Slider {...leftSliderSettings}>
          {left.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center w-16 h-full min-h-[120px]"> {/* Decreased width */}
              <img
                src={brand.image}
                alt={brand.name}
                className="w-16 h-16 object-contain mb-1 mx-auto opacity-50" // Reduced image size for compact look
              />
              <p className="text-xs font-medium text-gray-700 text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Right slider moving right to left */}
      <div className="w-full overflow-hidden">
        <Slider {...rightSliderSettings}>
          {right.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center w-16 h-full min-h-[120px]"> {/* Decreased width */}
              <img
                src={brand.image}
                alt={brand.name}
                className="w-16 h-16 object-contain mb-1 mx-auto opacity-50"
              />
              <p className="text-xs text-center font-medium text-gray-700">
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
