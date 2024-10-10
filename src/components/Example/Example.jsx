import React, { useState } from "react";
import FindCars from "../FindCars/FindCars";
import carBg from "/cars-background/carsBg.png";
import citiesBg from "/cars-background/citiesBg.png";
import logoImage from "/cars-background/logoImage.jpeg";
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
    <div className="relative">
      {/* Full-screen carousel background */}
      <div
        className="relative w-full h-[500px]" // Height set to 500px
        style={{
          backgroundImage: `url(${activeImage})`,
          backgroundSize: "cover", // Ensures the image covers the screen
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for fixed FindCars component, aligned to the left */}
        <div className="absolute font-poppins inset-0 bg-gray-700 bg-opacity-50 flex items-start justify-start">
          <div className="w-full max-w-lg ml-10 mt-10">
            {" "}
            {/* Added margin for positioning */}
            <FindCars />
          </div>
        </div>

        {/* Carousel controls with text links positioned at the bottom of the background image */}
        <div className="absolute font-poppins text-white bottom-0 w-full flex justify-center space-x-8 mb-4">
          <button
            className={`text-lg ${
              activeImage === carBg ? "font-bold underline" : "font-normal"
            }`}
            onClick={() => setActiveImage(images.carBg)}
          >
            Cars
          </button>
          <button
            className={`text-lg ${
              activeImage === citiesBg ? "font-bold underline" : "font-normal"
            }`}
            onClick={() => setActiveImage(images.citiesBg)}
          >
            Cities
          </button>
          <button
            className={`text-lg ${
              activeImage === logoImage ? "font-bold underline" : "font-normal"
            }`}
            onClick={() => setActiveImage(images.logoImage)}
          >
            Logos
          </button>
          <button
            className={`text-lg ${
              activeImage === serviceBg ? "font-bold underline" : "font-normal"
            }`}
            onClick={() => setActiveImage(images.serviceBg)}
          >
            Services
          </button>
        </div>
      </div>

      {/* Show selected location */}
      <div className="mt-6 text-center">
        <p>Location ID: {id}</p>
      </div>
    </div>
  );
};

export default Example;
