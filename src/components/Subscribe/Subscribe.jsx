import React from "react";

const Subscribe = () => {
  return (
    <div>

      <h1>hello world</h1>

      <div className="rounded-xl m-5 font-poppins">
        <div className="w-full md:w-72">
          <label
            htmlFor="subscription-date"
            className="block text-gray-800 mb-2 text-sm md:text-base"
          >
            Select Subscription Start Date:
          </label>
          <input
            type="date"
            id="subscription-date"
            className="w-full border text-white bg-purple-600 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-violet-500"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
      <img
        src="https://s1.cdn.autoevolution.com/images/gallery/TATAMOTORSNano-3713_3.jpg"
        style={{ width: "67%", margin: "auto" }}
        alt="car"
      />

    </div>
  );
};

export default Subscribe;
