import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Car from "/car-4-512.png";
import Hand from "/handshake-2-512.png";
import Building from "/organization-512.png";
import Users from "/conference-call-512.png";

const navigation = [
  { image: Users, count: "100,000+", done: "Satisfied Users" },
  { image: Car, count: "30,000+", done: "Cars" },
  { image: Hand, count: "18", done: "Service Providers" },
  { image: Building, count: "59", done: "Cities" },
];

const Zymo = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Re-triggers when scrolling back into view
    threshold: 0.1,      // How much of the component needs to be in view
  });

  return (
    <motion.div
      ref={ref} // Attach observer to the outermost div
      initial={{ opacity: 0, y: 50 }} // Starts hidden and slightly below
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Slide in when visible
      transition={{ duration: 0.5 }} // Control animation speed
      className="text-center py-6 sm:py-10 px-2 md:py-20 flex flex-col items-center justify-center mt-5"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Why Zymo?</h1>
      <div className="grid grid-cols-2 gap-12 p-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-20 lg:gap-28 lg:p-10">
        {navigation.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gradient-to-r from-indigo-500 to-[#7c2a9d] p-3 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: -50 }} // Starts from the left
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Moves to its position when visible
            transition={{ delay: 0.2 * index, duration: 0.5 }} // Each item appears one after the other
          >
            <img src={item.image} alt="icon" className="w-6 h-8 sm:w-8 sm:h-10 md:mb-4" />
            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-bold">{item.count}</p>
            <p className="text-xs sm:text-sm md:text-base lg:text-base font-bold text-gray-900">{item.done}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Zymo;
