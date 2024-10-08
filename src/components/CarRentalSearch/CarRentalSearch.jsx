import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopularCities from '../PopularCities/PopularCities';
// import Banner1 from '../Banner/Banner1';

const CarRentalSearch = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('2024-10-03T09:30');
  const [returnDate, setReturnDate] = useState('2024-10-06T18:30');
  const [showCities, setShowCities] = useState(false);
  const [activeTab, setActiveTab] = useState('rent');
  const navigate = useNavigate();

  const handleLocationSelect = (city) => {
    setLocation(city);
    setShowCities(false);
    navigate(`self-drive-car-rentals/${city.toLowerCase()}`);
  };

  return (
    <div className="mt-14 container mx-auto rounded-lg">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <div className="flex mb-5">
          <button
            className={`w-36 py-3 rounded-l-lg ${
              activeTab === 'rent'
                ? 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br'
                : 'bg-purple-200 text-black border border-gray-300'
            }`}
            onClick={() => setActiveTab('rent')}
          >
            Rent
          </button>
          <button
            className={`w-36 py-3 ${
              activeTab === 'subscription'
                ? 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br '
                : 'bg-purple-200 text-black'
            }`}
            onClick={() => setActiveTab('subscription')}
          >
            Subscription
          </button>
          <button
            className={`w-36 py-3 rounded-r-lg ${
              activeTab === 'buy'
                ? 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br'
                : 'bg-purple-200 text-black'
            }`}
            onClick={() => setActiveTab('buy')}
          >
            Buy Car
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block mb-2">Location</label>
            <button
              onClick={() => setShowCities(!showCities)}
              className="w-full flex justify-between items-center p-2 rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br"
            >
              {location || 'Select a location'}
              <span className="ml-2">
                {showCities ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                    xmlns="http://www.w3.org/2000/svg"
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

          <div>
            <label className="block font-semibold mb-2">Pick-Up Date</label>
            <input
              type="datetime-local"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full p-2 bg-purple-200 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Return Date</label>
            <input
              type="datetime-local"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-2 bg-purple-200 rounded-md"
            />
          </div>

          <div className="flex items-end">
            <button className="w-full bg-[#a11fdb] text-white p-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>

      {showCities && <PopularCities onCitySelect={handleLocationSelect} />}
      {/* <Banner1 /> */}
    </div>
  );
};

export default CarRentalSearch;