import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const brand1 = [
  {
    id: 1,
    src: "https://clipground.com/images/zoomcar-logo-png-5.png",
  },
  {
    id: 2,
    src: "https://www.mychoize.com/_next/static/media/MyChoize-logo.ef72a172.svg",
  },
  {
    id: 3,
    src: "https://1000logos.net/wp-content/uploads/2020/10/Avis-Logo.png",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYPEqTEYL_IKcNmjeRJi-KLkEZwzNM3ceSw&s",
  },
  {
    id: 5,
    src: "https://wheelup.in/assets/wheelUpLogo-296c92d2.png",
  },
  {
    id: 6,
    src: "https://tse1.mm.bing.net/th?id=OIP.QC6Jm35zUWtc3Xcsww1tUgHaHa&pid=Api&P=0&h=220",
  },
  {
    id: 7,
    src: "https://firebasestorage.googleapis.com/v0/b/letzrent-5f5a3.appspot.com/o/LetzRent%20App%20Images%2FBrand%20Logo%2FCarronrent.png?alt=media&token=045d4afd-a065-4554-b1bc-85130149b07e",
  },
  {
    id: 8,
    src: "https://firebasestorage.googleapis.com/v0/b/letzrent-5f5a3.appspot.com/o/LetzRent%20App%20Images%2FBrand%20Logo%2FWhatsApp%20Image%202022-08-04%20at%2010.45.13%20PM.jpeg?alt=media&token=e3c00d49-eb95-40db-b795-f42688ceef7c",
  },
];

const ServiceProvider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 2;
        scrollContainer.scrollLeft = scrollAmount;
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollAmount = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center bg-white py-8">
      <h1 className="text-4xl font-bold py-9">Compare and Choose from:</h1>
      <div
        className="overflow-x-auto flex gap-8 py-8 px-6 bg-white"
        ref={scrollRef}
      >
        <div className="flex gap-8 whitespace-nowrap">
          {brand1.map((brand) => (
            <motion.div
              key={brand.id}
              className="min-w-[180px] max-w-[200px] h-[190px] bg-white rounded-lg shadow-xl flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: brand.id * 0.1 }}
            >
              <img
                src={brand.src}
                alt={`Brand ${brand.id}`}
                className="max-w-full max-h-[100px] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
