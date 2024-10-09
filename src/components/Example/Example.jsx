import React, { useState } from 'react';

const FindCars = () => {
  const [carType, setCarType] = useState('New Car');
  const [searchType, setSearchType] = useState('By Budget');
  const [budget, setBudget] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  return (
    <div className="flex bg-white shadow-lg p-6 rounded-md w-96">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">Find your right car</h2>
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setCarType('New Car')}
            className={`px-4 py-2 rounded-tl-md rounded-tr-md ${carType === 'New Car' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            New Car
          </button>
          <button
            onClick={() => setCarType('Used Car')}
            className={`px-4 py-2 rounded-tl-md rounded-tr-md ${carType === 'Used Car' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Used Car
          </button>
        </div>

        <div className="mb-4">
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="searchType"
                value="By Budget"
                checked={searchType === 'By Budget'}
                onChange={(e) => setSearchType(e.target.value)}
              />
              By Budget
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="searchType"
                value="By Brand"
                checked={searchType === 'By Brand'}
                onChange={(e) => setSearchType(e.target.value)}
              />
              By Brand
            </label>
          </div>
        </div>

        {/* Select budget dropdown */}
        <div className="mb-4">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select Budget</option>
            <option value="under 5 lakhs">Under 5 Lakhs</option>
            <option value="5-10 lakhs">5-10 Lakhs</option>
            <option value="10-15 lakhs">10-15 Lakhs</option>
            <option value="15+ lakhs">15+ Lakhs</option>
          </select>
        </div>

        {/* Select vehicle type dropdown */}
        <div className="mb-4">
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">All Vehicle Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          className="w-full bg-orange-600 text-white rounded-md p-2 font-bold hover:bg-orange-500"
        >
          Search
        </button>

        {/* Advanced Search Link */}
        <div className="mt-2 text-right">
          <a href="#" className="text-sm text-gray-500 hover:underline">Advanced Search</a>
        </div>
      </div>
    </div>
  );
};

export default FindCars;
