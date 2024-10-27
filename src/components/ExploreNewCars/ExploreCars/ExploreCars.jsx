import React, { useState, useEffect } from "react";
import FindCars from "../FindCars/FindCars";
import car1 from "../../../assets/explore-cars/wp4301017-suzuki-vitara-wallpapers.jpg"
import car2 from "../../../assets/explore-cars/wp13378255-mercedes-benz-amg-gt-63-wallpapers.jpg"
import car3 from "../../../assets/explore-cars/wp10764957-tata-nexon-dark-wallpapers.jpg"
import car4 from "../../../assets/explore-cars/Tata Punch Creative Plus S Camo AMT.jpg"
import { useParams } from "react-router-dom";

const ExploreCars= () => {
  const { id } = useParams();


  // const images = [carBg, citiesBg, logoImage, serviceBg];
  const images = [car1, car2, car3, car4];
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
        <div className="absolute font-poppins inset-0 bg-gray-700 bg-opacity-10 flex items-start justify-start">
          <div className="w-full max-w-lg md:ml-0 md:mt-10 ml-2 mr-3 mt-5">
            <FindCars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCars;
