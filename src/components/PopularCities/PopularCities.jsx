import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const PopularCities = ({ onCitySelect }) => {
  // const [location, setLocation] = useState({ latitude: null, longitude: null });
  // const [error, setError] = useState(null);

  const cities = [
    { name: 'Delhi', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Delhi-1024.png' },
    { name: 'Mumbai', image: 'https://static.vecteezy.com/system/resources/previews/019/016/738/original/mumbai-icon-design-free-vector.jpg' },
    { name: 'Chennai', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Chennai-512.png' },
    { name: 'Pune', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Pune-512.png' },
    { name: 'Hyderabad', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Hyderabad-1024.png' },
    { name: 'Kolkata', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Kolkata-256.png' },
    { name: 'Jaipur', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Jaipur-1024.png' },
    { name: 'Noida', image: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114422/NewWebsite/cities/noida.png' },
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
    { name: 'Vadodara' }
  ];

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLocation({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //       },
  //       (err) => {
  //         setError(err.message);
  //       }
  //     );
  //   } else {
  //     setError("Geolocation is not supported by this browser.");
  //   }
  // };

  // // Log location when it updates
  // useEffect(() => {
  //   if (location.latitude && location.longitude) {
  //     console.log('Updated location:', location);
  //   }
  // }, [location]);

  return (
    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
      <h1 className='font-semibold mt-2' style={{ marginBottom: '20px' }}>Popular Cities</h1>
      <Row>
        {cities.map((city) => (
          <Col xs={6} sm={4} md={3} key={city.name} className="text-center mb-3">
            <div
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '10px',
                padding: '10px',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                backgroundColor: '#fff',
              }}
              onClick={() => onCitySelect(city.name)}
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
              <h6 style={{ fontSize: '1rem', fontWeight: '500' }}>{city.name}</h6>
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
              onClick={() => onCitySelect(city.name)}
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
        {/* <Col >
          <div className='d-flex justify-center'
            style={{
              border: '1px solid #dee2e6',
              borderRadius: '10px',
              padding: '18px',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              backgroundColor: '#fff',
            }}
            onClick={getLocation}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }} >
            <i className="fa-solid fa-location-crosshairs"></i>
          </div>
        </Col> */}
      </Row>
      {/* {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}
    </div>
  );
};

export default PopularCities;
