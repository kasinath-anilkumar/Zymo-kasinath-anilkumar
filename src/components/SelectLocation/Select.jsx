import React from "react";
import { useLocationContext } from "../../Context/Location";
import PopularCities from "../PopularCities/PopularCities";
import { useNavigate } from "react-router-dom";

const Select = () => {
  const { setLocation } = useLocationContext();
  const navigate = useNavigate();

  const handleLocationSelect = (city) => {
    setLocation(city);
    navigate(`/self-drive-car-rentals/${city.toLowerCase()}`);
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

      {/* Centered Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Please select your location
          </h2>
          <PopularCities onCitySelect={handleLocationSelect} />
        </div>
      </div>
    </>
  );
};

export default Select;
