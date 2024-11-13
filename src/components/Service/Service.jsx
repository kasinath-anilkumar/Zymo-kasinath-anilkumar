import React from "react";

function Service() {
  const cities = [
    "Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai", "Pune", "Mangalore", "Dombivili",
    "Palava", "Thane", "Amritsar", "Kolkata", "Ahmedabad", "Bhubaneswar", "Chandigarh", 
    "Coimbatore", "Jaipur", "Kochi", "Nashik", "Madurai", "Ghaziabad", "Merrut", 
    "Goa", "Lucknow", "Bhopal", "Guwahati", "Indore", "Cochin", "Mysore", "Modinagar", 
    "Muradnagar", "Gurugram", "Noida", "Nagpur", "Siliguri", "Trichy", "Vadodara", 
    "Vijaywada", "Vijag", "Udupi", "Vishakapatnam", "Udaipur", "Jodhpur", "Haridwar", 
  ];
  
  const groupedCities = [];
  for (let i = 0; i < cities.length; i += 11) {
    groupedCities.push(cities.slice(i, i + 11));
  }

  if (groupedCities.length > 0) {
    groupedCities[groupedCities.length - 1].push("Rishikesh");
  }

  return (
    <footer className="rounded-xl p-2 mb-8 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 text-white text-center w-full">
      <div className="px-8 py-12 mx-auto grid grid-rows-1">
        <div className="text-center">
          <h1 className="text-2xl font-bold pb-4">Service Available In Cities</h1>
          <div className="grid grid-cols-4 gap-4 justify-center text-lightgray sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4">
            {groupedCities.map((group, index) => (
              <ul key={index} className="flex flex-col items-start space-y-1">
                {group.map((city, cityIndex) => (
                  <li key={cityIndex}>Car Rental In <a href={`/self-drive-car-rentals/${city.toLowerCase()}`}>{city}</a></li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Service;
