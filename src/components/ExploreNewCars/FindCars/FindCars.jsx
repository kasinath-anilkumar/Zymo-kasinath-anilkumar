import React, { useState } from "react";
import { motion } from "framer-motion";

const FindCars = () => {
  const [carType, setCarType] = useState("New Car");
  const [searchType, setSearchType] = useState("By Budget");
  const [budget, setBudget] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [div1, setDiv1] = useState("Select budget");
  const [div2, setDiv2] = useState("All vehicle types");

  return (
    <motion.div
      className="flex bg-white shadow-lg p-4 md:p-6 rounded-lg max-w-sm w-full mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full font-poppins">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Find Your Right Car
        </h2>

        {/* Car Type Selection */}
        <div className="flex justify-around mb-4">
          <button
            onClick={() => {
              setCarType("New Car");
              setDiv1("Select budget");
              setDiv2("All vehicle types");
            }}
            className={`px-4 py-2 rounded-lg shadow-md transition-all ${
              carType === "New Car"
                ? "bg-gradient-to-r from-indigo-500 to-[#7c2a9d] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            New Car
          </button>
          <button
            onClick={() => {
              setCarType("Used Car");
              setDiv1("Select Model");
              setDiv2("Select city");
            }}
            className={`px-4 py-2 rounded-lg shadow-md transition-all ${
              carType === "Used Car"
                ? "bg-gradient-to-r from-indigo-500 to-[#7c2a9d] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Used Car
          </button>
        </div>

        {/* Search Type Selection */}
        <div className="mb-4 bg-white">
          <div className="flex gap-8 justify-center">
            <div className="flex items-center">
              <label className="text-lg font-semibold flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={searchType === "By Budget"}
                  onChange={() => setSearchType("By Budget")}
                  className="checkbox checkbox-primary"
                />
                By Budget
              </label>
            </div>

            <div className="flex items-center">
              <label className="text-lg font-semibold flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={searchType === "By Brand"}
                  onChange={() => setSearchType("By Brand")}
                  className="checkbox checkbox-primary"
                />
                By Brand
              </label>
            </div>
          </div>
        </div>

        {/* Select Budget Dropdown */}
        <div className="mb-4">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            {carType === "New Car" ? (
              <>
                <option value="">{div1}</option>
                <option value="under 5 lakhs">Under 5 Lakhs</option>
                <option value="5-10 lakhs">5-10 Lakhs</option>
                <option value="10-15 lakhs">10-15 Lakhs</option>
                <option value="15+ lakhs">15+ Lakhs</option>
              </>
            ) : (
              <>
                <option value="">{div1}</option>
                <option value="hyundai">Hyundai</option>
                <option value="maruti">Maruti</option>
                <option value="tata">Tata</option>
                <option value="mahindra">Mahindra</option>
              </>
            )}
          </select>
        </div>

        {/* Select Vehicle Type Dropdown */}
        <div className="mb-4">
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            {carType === "New Car" ? (
              <>
                <option value="">{div2}</option>
                <option value="hatchback">Hatchback</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury</option>
              </>
            ) : (
              <>
                <option value="">{div2}</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="kolkata">Kolkata</option>
                <option value="delhi">Delhi</option>
              </>
            )}
          </select>
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-indigo-600 text-white rounded-md p-2 font-bold hover:bg-indigo-500 transition-colors"
        >
          Search
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FindCars;
