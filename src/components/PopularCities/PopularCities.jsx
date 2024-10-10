import React, { useState, useEffect } from 'react';
import { ZymoFeaturedCityList, ZymoAllCityList } from '../../assets/ZymoCityList';

const PopularCities = ({ onCitySelect }) => {
  const [UserLocation, setUserLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [toasts, setToasts] = useState([]);

  const cities = [
    { name: 'Delhi', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Delhi-1024.png' },
    { name: 'Mumbai', image: 'https://static.vecteezy.com/system/resources/previews/019/016/738/original/mumbai-icon-design-free-vector.jpg' },
    { name: 'Chennai', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Chennai-512.png' },
    { name: 'Pune', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Pune-512.png' },
    { name: 'Hyderabad', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Hyderabad-1024.png' },
    { name: 'Kolkata', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Kolkata-256.png' },
    { name: 'Jaipur', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Jaipur-1024.png' },
    { name: 'Noida', image: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114422/NewWebsite/cities/noida.png' },
    { name: 'Kochi', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/kochi-512.png' },
    { name: 'Amritsar', image: 'https://cdn2.iconfinder.com/data/icons/landmarks-55/96/Asset_18-1024.png' },
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
          const isCityInZymoList = ZymoAllCityList.some((c) => c.name.toLowerCase() === cityNameLower);

          if (isCityInZymoList) {
            onCitySelect(cityNameLower);
            showToast(`Your Location is Updated to ${city}`, 'success');
          } else {
            showToast(`Oops! "Cars are not available in "${city}".`, 'warning');
          }
        },
        (err) => {
          console.error('Geolocation error:', err);
          setError(err.message);
          showToast("Unable to retrieve your location. Please allow location access.", 'error');
        }
      );
    } else {
      const errorMessage = 'Geolocation is not supported by this browser.';
      setError(errorMessage);
      showToast(errorMessage, 'error');
    }
  };

  const getCityFromCoords = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1&accept-language=en`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.address) {
        return data.address.city || data.address.town || data.address.village || 'City not found';
      } else {
        return 'City not found';
      }
    } catch (error) {
      console.error('Error fetching city:', error);
      return 'Error fetching city';
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
      success: 'bg-green-500 text-white',
      error: 'bg-red-500 text-white',
      warning: 'bg-yellow-500 text-black',
    };

    return (
      <div
        key={toast.id}
        className={`fixed top-5 right-5 w-64 p-3 mb-2 rounded-lg shadow-lg ${toastStyles[toast.type]}`}
      >
        {toast.message}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 p-5 rounded-lg">
      <h1 className="font-semibold mb-5">Popular Cities</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className="text-center p-3 border border-gray-300 rounded-lg cursor-pointer transition-transform transform hover:shadow-custom-purple"
            onClick={() => onCitySelect(city.name.toLowerCase())}
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-16 h-16 mx-auto mb-3 rounded-lg"
            />
            <h6 className="font-medium">{city.name}</h6>
          </div>
        ))}
      </div>

      <h6 className="mt-8 mb-4">Other Cities..</h6>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {ZymoFeaturedCityList.map((city) => (
          <div
            key={city.name}
            className="text-center p-4 border border-gray-300 rounded-lg cursor-pointer transition-transform transform hover:shadow-custom-purple"
            onClick={() => onCitySelect(city.name.toLowerCase())}
          >
            <h6 className="text-sm font-medium">{city.name}</h6>
          </div>
        ))}
      </div>

      <div className="mt-6 flex">
        <button
          className="flex items-center justify-center bg-white border-1 border-red-500 rounded-lg p-3 hover:shadow-lg"
          onClick={handleLocation}
        >
          <i className="fa-solid fa-location-crosshairs text-red-500"></i>
          <h6 className="ml-2 text-red-500 font-semibold text-sm">Auto Detect</h6>
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {/* Custom Toasts */}
      {toasts.map((toast) => renderToast(toast))}
    </div>
  );
};

export default PopularCities;