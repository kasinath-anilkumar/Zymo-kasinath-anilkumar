import React, { useState, useEffect } from "react";
import FindCars from "../FindCars/FindCars";
import carBg from "/cars-background/carsBg.png";
import citiesBg from "/cars-background/p1.png";
import logoImage from "/cars-background/p3.png";
import serviceBg from "/cars-background/serviceBg.png";
import { useParams } from "react-router-dom";

const ExploreCars= () => {
  const { id } = useParams();

  // Image options for the carousel
  const images = [carBg, citiesBg, logoImage, serviceBg];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative mb-20 p-3">

      <div
        className="relative w-full h-[600px] md:h-[500px] bg-center bg-cover bg-no-repeat
        "
        style={{
          backgroundImage: `url(${images[activeIndex]})`,

        }}
      >
        {/* Overlay for FindCars component */}
        <div className="absolute font-poppins inset-0 bg-gray-700 bg-opacity-50 flex items-start justify-start">
          <div className="w-full max-w-lg md:ml-10 md:mt-10 ml-3 mr-3 mt-5">
            <FindCars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCars;
