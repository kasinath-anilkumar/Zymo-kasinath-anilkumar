import React, { useState, useEffect } from "react";
import { useLocationContext } from "../../Context/location";

import {
  ZymoFeaturedCityList,
  ZymoAllCityList,
} from "../../assets/ZymoCityList";

const PopularCities = ({ onCitySelect }) => {
  const { setLocation } = useLocationContext();
  const [UserLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);
  const [toasts, setToasts] = useState([]);

  const cities = [
    {
      name: "Delhi",
      image:
        "https://cdn2.iconfinder.com/data/icons/indian-cities/64/Delhi-1024.png",
    },
    {
      name: "Mumbai",
      image:
        "https://static.vecteezy.com/system/resources/previews/019/016/738/original/mumbai-icon-design-free-vector.jpg",
    },
    {
      name: "Chennai",
      image:
        "https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Chennai-512.png",
    },
    {
      name: "Pune",
      image:
        "https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Pune-512.png",
    },
    {
      name: "Hyderabad",
      image:
        "https://cdn2.iconfinder.com/data/icons/indian-cities/64/Hyderabad-1024.png",
    },
    {
      name: "Kolkata",
      image:
        "https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Kolkata-256.png",
    },
    {
      name: "Jaipur",
      image:
        "https://cdn2.iconfinder.com/data/icons/indian-cities/64/Jaipur-1024.png",
    },
    {
      name: "Noida",
      image:
        "https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114422/NewWebsite/cities/noida.png",
    },
    {
      name: "Bangalore",
      image:
        "https://cdn2.iconfinder.com/data/icons/indian-cities/64/Bangalore-512.png",
    },
    {
      name: "Amritsar",
      image:
        "https://cdn2.iconfinder.com/data/icons/landmarks-55/96/Asset_18-1024.png",
    },
  ];

  useEffect(() => {
    if (UserLocation.latitude && UserLocation.longitude) {
      const city = UserLocation.city?.toLowerCase();
      if (city) onCitySelect(city);
    }
  }, [UserLocation, onCitySelect]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          const city = await getCityFromCoords(latitude, longitude);
          const cityNameLower = city.toLowerCase();
          const isCityInZymoList = ZymoAllCityList.some(
            (c) => c.name.toLowerCase() === cityNameLower
          );

          if (isCityInZymoList) {
            onCitySelect(cityNameLower);
            showToast(`Your Location is Updated to ${city}`, "success");
          } else {
            showToast(`Oops! "Cars are not available in "${city}".`, "warning");
          }
        },
        (err) => {
          console.error("Geolocation error:", err);
          setError(err.message);
          showToast(
            "Unable to retrieve your location. Please allow location access.",
            "error"
          );
        }
      );
    } else {
      const errorMessage = "Geolocation is not supported by this browser.";
      setError(errorMessage);
      showToast(errorMessage, "error");
    }
  };

  const getCityFromCoords = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1&accept-language=en`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.address) {
        return (
          data.address.city ||
          data.address.town ||
          data.address.village ||
          "City not found"
        );
      } else {
        return "City not found";
      }
    } catch (error) {
      console.error("Error fetching city:", error);
      return "Error fetching city";
    }
  };

  const handleLocation = () => {
    getLocation();
  };

  const showToast = (message, type) => {
    const id = Math.random().toString(36).substring(2, 15);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const renderToast = (toast) => {
    const toastStyles = {
      success: "bg-green-500 text-white",
      error: "bg-red-500 text-white",
      warning: "bg-yellow-500 text-black",
    };

    return (
      <div
        key={toast.id}
        className={`fixed top-5 right-5 w-64 p-3 mb-2 rounded-lg shadow-lg ${
          toastStyles[toast.type]
        } transition-transform transform hover:scale-105`}
      >
        {toast.message}
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center sm:p-2 md:p-5  bg-gray-100">
      <div className="w-full max-w-5xl bg-white p-3 rounded-lg shadow-lg">
        <h1 className=" text-base md:text-2xl font-bold text-center mb-2">
          Please select Location
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className="text-center p-1 sm:p-2 border border-gray-300 rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-100 flex flex-col items-center"
              onClick={() => onCitySelect(city.name.toLowerCase())}
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-10 md:w-14 h-8 mx-auto mb-2 rounded-lg"
              />
              <h6 className="font-medium text-xs whitespace-nowrap">
                {city.name}
              </h6>
            </div>
          ))}
        </div>

        <h2 className="mt-3 text-lg font-bold">Other Cities :</h2>
        <div className="flex flex-wrap gap-2 mt-2 md:mt-4 justify-center">
          {ZymoFeaturedCityList.map((city) => (
            <div
              key={city.name}
              className="p-2 min-w-max border border-gray-300 rounded-lg cursor-pointer text-center transition-transform transform hover:scale-105 hover:bg-gray-100"
              onClick={() => onCitySelect(city.name.toLowerCase())}
            >
              <p className="text-sm font-medium">{city.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 md:mt-6 flex justify-center">
          <button
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
            onClick={handleLocation}
          >
            <i className="fas fa-location-crosshairs"></i>
            <span className="ml-2 font-semibold">Auto Detect</span>
          </button>
        </div>

        {error && (
          <p className="text-red-500 mt-4 text-center">Error: {error}</p>
        )}

        {toasts.map((toast) => renderToast(toast))}
      </div>
    </div>
  );
};

export default PopularCities;
