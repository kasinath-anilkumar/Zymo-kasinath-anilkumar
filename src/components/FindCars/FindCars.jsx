import React, { useState } from 'react';

const FindCars = () => {
  const [carType, setCarType] = useState('New Car');
  const [searchType, setSearchType] = useState('By Budget');
  const [budget, setBudget] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [div1, setDiv1] = useState('Select budget');
  const [div2, setDiv2] = useState('All vehicle types');

  return (
    <div className="flex bg-white shadow-lg p-6 rounded-md max-w-sm w-full">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Find Your Right Car</h2>
        
        {/* Car Type Selection */}
        <div className="flex justify-around mb-4">
          <button
            onClick={() => {
              setCarType('New Car');
              setDiv1('Select budget');
              setDiv2('All vehicle types');
            }}
            className={`px-4 py-2 rounded-l-md ${carType === 'New Car' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            New Car
          </button>
          <button
            onClick={() => {
              setCarType('Used Car');
              setDiv1('Select Model');
              setDiv2('Select city');
            }}
            className={`px-4 py-2 rounded-r-md ${carType === 'Used Car' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Used Car
          </button>
        </div>

        {/* Search Type Selection */}
        <div className="mb-4">
          <div className="flex gap-10 justify-center">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="searchType"
                value="By Budget"
                checked={searchType === 'By Budget'}
                onChange={(e) => setSearchType(e.target.value)}
                className="cursor-pointer"
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
                className="cursor-pointer"
              />
              By Brand
            </label>
          </div>
        </div>

        {/* Select Budget Dropdown */}
        <div className="mb-4">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">{div1}</option>
            <option value="under 5 lakhs">Under 5 Lakhs</option>
            <option value="5-10 lakhs">5-10 Lakhs</option>
            <option value="10-15 lakhs">10-15 Lakhs</option>
            <option value="15+ lakhs">15+ Lakhs</option>
          </select>
        </div>

        {/* Select Vehicle Type Dropdown */}
        <div className="mb-4">
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">{div2}</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="w-full bg-violet-800 text-white rounded-md p-2 font-bold hover:bg-orange-500">
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
