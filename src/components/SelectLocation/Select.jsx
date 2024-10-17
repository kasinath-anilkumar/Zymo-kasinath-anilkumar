import React from "react";
import { useLocationContext } from "../../Context/Location";
import PopularCities from "../PopularCities/PopularCities";
import { useNavigate } from "react-router-dom";

const Select = () => {
  const { setLocation, setLocationShow } =
    useLocationContext();
  const navigate = useNavigate();

  const handleLocationSelect = (city) => {
    setLocation(city);
    setLocationShow(false);
    navigate(`/self-drive-car-rentals/${city.toLowerCase()}`);
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

      {/* Centered Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" py-1 sm:p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
          <PopularCities onCitySelect={handleLocationSelect} />
        </div>
      </div>
    </>
  );
};

export default Select;
