import React, { useState } from "react";
import FindCars from "../FindCars/FindCars";
import carBg from "/cars-background/carsBg.png";
import citiesBg from "/cars-background/p1.png";
import logoImage from "/cars-background/p3.png";
import serviceBg from "/cars-background/serviceBg.png";
import { useParams } from "react-router-dom";

const Example = () => {
  const { id } = useParams();

  // Manage the active background image
  const [activeImage, setActiveImage] = useState(carBg);

  // Image options for the carousel
  const images = {
    carBg,
    citiesBg,
    logoImage,
    serviceBg,
  };

  return (
    <div className="relative mb-20">
      {/* Full-screen carousel background */}
      <div
        className="relative w-full h-[600px] md:h-[500px]" // Height set to 500px
        style={{
          backgroundImage: `url(${activeImage})`,
          backgroundSize: "cover", // Ensures the image covers the screen
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for fixed FindCars component, aligned to the left */}
        <div className="absolute font-poppins inset-0 bg-gray-700 bg-opacity-50 flex items-start justify-start">
          <div className="w-full max-w-lg md:ml-10 md:mt-10 ml-3 mr-3 mt-5">
            {" "}
            {/* Added margin for positioning */}
            <FindCars />
          </div>
        </div>

        {/* Carousel controls with text links positioned at the bottom of the background image */}
        <div className="absolute font-poppins text-white bottom-0 w-full flex justify-center space-x-5 mb-4 md:space-x-8">
          <button
            className={`md:text-lg text-base ${
              activeImage === carBg ? "font-bold underline" : "font-normal"
            }`}
            onClick={() => setActiveImage(images.carBg)}
          >
            Cars
          </button>
          <button
            className={`md:text-lg text-base ${
              activeImage === citiesBg ? "font-bold underline" : "font-normal"
            }`}
            onClick={() => setActiveImage(images.citiesBg)}
          >
            Cities
          </button>
          <button
            className={`md:text-lg text-base ${
              activeImage === logoImage ? "font-bold underline" : "font-normal"
            }`}
            onClick={() => setActiveImage(images.logoImage)}
          >
            Logos
          </button>
          <button
            className={`md:text-lg text-base ${
              activeImage === serviceBg ? "font-bold underline" : "font-normal"
            }`}
            onClick={() => setActiveImage(images.serviceBg)}
          >
            Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
