import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopularCities from "../PopularCities/PopularCities";
import { useLocationContext } from "../../Context/Location";
import { Link } from "react-router-dom";

const CarRentalSearch = () => {
  const { setLocation } = useLocationContext();
  const [location1, setLocation1] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [showCities, setShowCities] = useState(false);
  const [activeTab, setActiveTab] = useState("rent");
  const navigate = useNavigate();

  const handleSubscriptionSearch = () => {
    if (!location1 || !pickupDate) {
      return alert("Select a location and date to proceed");
    }
    navigate(
      `/monthly-car-rental?location=${location1.toLowerCase()}&date=${pickupDate}`
    );
  };
  const handleLocationSelect = (city, type) => {
    setLocation1(city);
    setShowCities(false);
    setLocation(city);

    type === "rent"
      ? navigate(`/self-drive-car-rentals/${city.toLowerCase()}`)
      : null;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="mt-3 sm:mt-8 md:mt-14 font-poppins container mx-auto rounded-lg py-10">
      <div className="bg-violet-200 p-5  rounded-xl shadow-xl">
        <div className="flex gap-2 md:gap-5 mb-5 flex-wrap justify-center md:justify-start">
          {["rent", "subscribe", "buy"].map((tab) =>
            tab === "buy" ? (
              <Link key={tab} to="/buy-car">
                <button
                  className={`w-28 md:w-36 py-2 md:py-3 rounded-lg shadow-xl transition-transform duration-200 hover:scale-105 mx-1 md:mx-2 ${
                    activeTab === tab
                      ? "text-white bg-gradient-to-b from-[#5542b1e5] to-[#a738d3]"
                      : "bg-purple-300 text-black"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </Link>
            ) : (
              <button
                key={tab}
                className={`w-28 md:w-36 py-2 md:py-3 rounded-lg shadow-xl transition-transform duration-200 hover:scale-105 mx-1 md:mx-2 ${
                  activeTab === tab
                    ? "text-white bg-gradient-to-b from-[#5542b1e5] to-[#a738d3]"
                    : "bg-purple-300 text-black"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block mb-2">Location</label>
            <button
              onClick={() => setShowCities(!showCities)}
              className="w-full flex justify-between items-center p-2 rounded-md text-white bg-gradient-to-b from-[#5542b1e5] to-[#a738d3]"
            >
              {capitalizeFirstLetter(location1) || "Select a location"}
              <span className="ml-2">
                {showCities ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.293a1 1 0 01-1.414 0L10 9.001 6.707 12.293a1 1 0 01-1.414-1.415l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.415z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.292 7.707a1 1 0 011.414 0L10 11.001l3.293-3.294a1 1 0 111.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.415z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>

          {activeTab === "subscribe" && (
            <>
              <div className="rounded-xl font-poppins">
                <div className="w-full">
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
                    onChange={() => setPickupDate(`${event.target.value}`)}
                    required
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button
                  className="w-full bg-gradient-to-b from-[#5542b1e5] to-[#a738d3] text-white p-2 rounded-md"
                  onClick={handleSubscriptionSearch}
                >
                  Search
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {showCities && (
        <PopularCities type={activeTab} onCitySelect={handleLocationSelect} />
      )}
    </div>
  );
};

export default CarRentalSearch;
