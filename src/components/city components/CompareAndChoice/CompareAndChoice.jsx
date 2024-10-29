import React from "react";
import background from "../../../assets/Background/bg-1.png";
import { FaHandPointer, FaCar, FaWallet } from "react-icons/fa";

const CompareAndChoice = () => {
  return (
    <div
      className="relative bg-cover bg-center font-poppins shadow-xl rounded-xl py-10 my-10 mx-4 md:mx-10 border border-solid border-violet-700"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-purple-100 to-white/60 opacity-50 rounded-xl"></div>

      <div className="relative flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8 text-black">
        <div className="text-center">
          <FaHandPointer className="text-4xl md:text-5xl mx-auto mb-4 opacity-90" />
          <h3 className="text-lg md:text-xl font-semibold mb-2 opacity-90">
            Compare and Choose:
          </h3>
          <p className="text-gray-600 px-5">
            Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
          </p>
        </div>

        <div className="text-center">
          <FaCar className="text-4xl md:text-5xl mx-auto mb-4 opacity-90" />
          <h3 className="text-lg md:text-xl font-semibold mb-2 opacity-90">
            Flexible Options
          </h3>
          <p className="text-gray-600 px-5">
            Gravida auctor fermentum morbi vulputate ac egestas orci etium
            convallis
          </p>
        </div>

        <div className="text-center">
          <FaWallet className="text-4xl md:text-5xl mx-auto mb-4 opacity-90" />
          <h3 className="text-lg md:text-xl font-semibold mb-2 opacity-90">
            Easy to Use:
          </h3>
          <p className="text-gray-600 px-5">
            Pretium convallis id diam sed commodo vestibulum lobortis volutpat
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompareAndChoice;
