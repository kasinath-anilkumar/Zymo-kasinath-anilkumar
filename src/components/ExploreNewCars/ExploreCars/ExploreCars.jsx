import React, { useState, useEffect } from "react";
import FindCars from "../FindCars/FindCars";
import car1 from "/explore-cars/tata-altroz.png";
import car2 from "/explore-cars/wp13378255-mercedes-benz-amg-gt-63-wallpapers.jpg";
import car3 from "/explore-cars/wp10764957-tata-nexon-dark-wallpapers.jpg";
import car4 from "/explore-cars/Tata Punch Creative Plus S Camo AMT.jpg";
import { useParams } from "react-router-dom";

const ExploreCars = () => {
  const { id } = useParams();

  const images = [
    { src: car1, name: "Tata Altroz" },
    { src: car2, name: "Mercedes AMG GT" },
    { src: car3, name: "Tata Nexon" },
    { src: car4, name: "BYD Song Plus" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // Random scrolling for small screens
    let scrollInterval;
    if (isSmallScreen) {
      scrollInterval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + Math.floor(Math.random() * images.length)) % images.length);
      }, 3000); // Change every 3 seconds
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isSmallScreen, images.length]);

  return (
    <div className="relative mb-20 p-3">
      <div
        className="relative w-full h-[600px] sm:h-[400px] md:h-[500px] bg-center bg-cover bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url(${images[activeIndex].src})`,
        }}
      >
        {/* Overlay for FindCars component */}
        <div className="absolute font-poppins inset-0 bg-gray-700 bg-opacity-10 flex items-start justify-start">
          <div className="w-full max-w-lg md:ml-0 md:mt-10 ml-2 mr-3 mt-5 sm:mt-3 sm:ml-1">
            <FindCars />
          </div>
        </div>

        {/* Buttons visible only on larger screens */}
        {!isSmallScreen && (
          <div className="absolute bottom-5 left-4 right-4 md:left-36 flex flex-wrap justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 text-white bg-black bg-opacity-50 rounded-lg font-poppins transition duration-300 ${
                  activeIndex === index
                    ? "border-b-4 border-white pb-1"
                    : "hover:bg-opacity-70"
                }`}
              >
                {image.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCars;
