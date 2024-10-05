import React from 'react';

const CarRentalComponent = () => {
  const cities = [
    "Bangalore", "Kolkata", "Goa", "Nagpur",
    "Hyderabad", "Ahmedabad", "Lucknow", "Siliguri",
    "Mumbai", "Bhubaneswar", "Bhopal", "Trichy",
    "Delhi", "Chandigarh", "Guwahati", "Vadodara",
    "Chennai", "Coimbatore", "Indore", "Vijaywada",
    "Pune", "Jaipur", "Cochin", "Visakhapatnam",
    "Mangalore", "Kochi", "Mysore", "Udupi",
    "Dombivili", "Nashik", "Modinagar", "Vishakapatnam",
    "Palava", "Madurai", "Muradnagar", "Udaipur",
    "Thane", "Ghaziabad", "Gurugram", "Jodhpur",
    "Amritsar", "Meerut", "Noida", "Haridwar"
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg">
      <h2 className="text-white text-3xl font-bold text-center mb-4">Car Rental Options</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {cities.map((city) => (
          <div key={city} className="text-white text-center bg-gray-800 sm:p-2 p-1 rounded-lg">
            <p>{city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRentalComponent;