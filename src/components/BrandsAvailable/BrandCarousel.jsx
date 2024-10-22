import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const brand1 = [
  {
    id: 1,
    name: "Audi",
    src: "https://www.1min30.com/logo/wp-content/uploads/2017/08/Logo-Audi.png",
  },
  {
    id: 2,
    name: "Bmw",
    src: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
  },
  {
    id: 3,
    name: "Mercedes-Benz",
    src: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
  },
  {
    id: 4,
    name: "Maruti",
    src: "https://www.pngmart.com/files/17/Maruti-Suzuki-Logo-PNG-Photo.png",
  },
  {
    id: 5,
    name: "Toyota",
    src: "https://logos-world.net/wp-content/uploads/2020/04/Toyota-Symbol.png",
  },
  {
    id: 6,
    name: "Kia",
    src: "https://logos-world.net/wp-content/uploads/2021/03/Kia-Logo.png",
  },
  {
    id: 7,
    name: "Mahindra",
    src: "https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo.png",
  },
  {
    id: 8,
    name: "Morris Garage",
    src: "https://1000logos.net/wp-content/uploads/2021/10/MG-Logo-2010.png",
  },
  {
    id: 9,
    name: "Tata",
    src: "https://logolook.net/wp-content/uploads/2023/07/Tata-Emblem.png",
  },
  {
    id: 10,
    name: "Honda",
    src: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Emblem.png",
  },
];

const BrandCarousel = () => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Detect user scrolling activity
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollHandler = () => {
      setIsScrolling(true);
      clearTimeout(scrollContainer.scrollTimeout);
      scrollContainer.scrollTimeout = setTimeout(() => {
        setIsScrolling(false); // Hide after 500ms of no scroll
      }, 500);
    };

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 2; // Adjust the value for the speed of scrolling
        scrollContainer.scrollLeft = scrollAmount;
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollAmount = 0; // Reset scroll when reaching the end
        }
      }
    }, 30); // Adjust the interval time for smooth scrolling

    scrollContainer.addEventListener("scroll", scrollHandler);

    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="text-center bg-white">
      <h1 className="text-4xl font-bold py-9 bg-white">Brands Available</h1>
      <div
        className="overflow-x-auto flex flex-col gap-8 bg-white py-8 px-6"
        ref={scrollRef}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isScrolling ? 1 : 0, y: isScrolling ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          {brand1.map((brand) => (
            <motion.div
              key={brand.id}
              className="flex flex-col items-center justify-center min-w-[180px] max-w-[200px] h-[190px] p-4 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: brand.id * 0.1 }}
            >
              <img
                src={brand.src}
                alt={`Brand ${brand.id}`}
                className="max-w-full max-h-[100px] object-contain mb-4 rounded bg-white"
              />
              <p className="text-xl font-semibold">{brand.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandCarousel;
