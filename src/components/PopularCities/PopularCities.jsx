import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ZymoOtherCities from '../../js/ZymoOtherCities';

const PopularCities = ({ onCitySelect }) => {
  const [UserLocation, setUserLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

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

  const OtherCities = [
    { name: 'Kochi' },
    { name: 'Mangalore' },
    { name: 'Nashik' },
    { name: 'Goa' },
    { name: 'Lucknow' },
    { name: 'Indore' },
    { name: 'Coimbatore' },
    { name: 'Amritsar' },
    { name: 'Siliguri' },
    { name: 'Trichy' },
    { name: 'Vadodara' },
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
  
          // Fetch the city name from coordinates
          const city = await getCityFromCoords(latitude, longitude);
          console.log('City fetched: ', city);
  
          const cityNameLower = city.toLowerCase();
          const isCityInZymoList = ZymoOtherCities.some((c) => c.name.toLowerCase() === cityNameLower);
  
          if (isCityInZymoList) {
            // If the city is in ZymoOtherCities, pass the city
            onCitySelect(cityNameLower);
            toast(`Your Location is Updated to ${city}`);
          } else {
            // If the city is not in ZymoOtherCities, alert the user
            toast.warn(`Oops! "Cars are not available in "${city || town || village}".`);
          }
        },
        (err) => {
          console.error('Geolocation error:', err);
          setError(err.message);
          toast.error("Unable to retrieve your location. Please allow location access.");
        }
      );
    } else {
      const errorMessage = 'Geolocation is not supported by this browser.';
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };
  

  const getCityFromCoords = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1&accept-language=en`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.address) {
        return data.address.city || data.address.town || data.address.village  || 'City not found';
        
      } else {
        return 'City not found';
      }
    } catch (error) {
      console.error('Error fetching city:', error);
      return 'Error fetching city';
    }
  };

  const handleLocation = () => {
    console.log("Getting location...");
    getLocation();
  };

  return (
    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>

      <h1 className='font-semibold mt-2' style={{ marginBottom: '20px' }}>Popular Cities</h1>
      <Row>
        {cities.map((city) => (
          <Col xs={6} sm={6} md={2} key={city.name} className="text-center mb-3">
            <div
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '10px',
                padding: '10px',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                backgroundColor: '#fff',
              }}
              onClick={() => onCitySelect(city.name.toLowerCase())}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-25"
                style={{ display: 'block', margin: '0 auto', borderRadius: '8px', marginBottom: '10px' }}
              />
              <h6 style={{ fontSize: 'auto', fontWeight: '500' }}>{city.name}</h6>
            </div>
          </Col>
        ))}
      </Row>
      <h6 className='mb-3'>Other Cities..</h6>
      <Row>
        {OtherCities.map((city) => (
          <Col xs={6} sm={4} md={2} key={city.name} className="text-center mb-3">
            <div
              style={{
                borderRadius: '10px',
                padding: '18px',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                backgroundColor: '#fff',
              }}
              onClick={() => onCitySelect(city.name.toLowerCase())}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h6 style={{ fontSize: '14px', fontWeight: '500' }}>{city.name}</h6>
            </div>
          </Col>
        ))}        
      </Row>
      <Row >
      <Col  xs={12} sm={6} md={2}>
          <div className='d-flex justify-center'
            style={{
              border: '1px solid #dee2e6',
              borderRadius: '10px',
              padding: '18px',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              backgroundColor: '#fff',
            }}
            onClick={handleLocation}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <i style={{ color: 'red' }} className="fa-solid fa-location-crosshairs"></i>
            <h6 className='ms-2 text-danger font-semibold' style={{fontSize:'12px'}}>Auto Detect</h6>   
          </div>
        </Col>
      </Row>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={5000} />
    </div>
  );
};

export default PopularCities;
