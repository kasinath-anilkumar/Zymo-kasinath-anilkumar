import React from 'react';
import { Row, Col } from 'react-bootstrap';


const PopularCities = ({ onCitySelect }) => {
  const cities = [
    { name: 'Delhi', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Delhi-1024.png' },
    { name: 'Mumbai', image: 'https://static.vecteezy.com/system/resources/previews/019/016/738/original/mumbai-icon-design-free-vector.jpg' },
    { name: 'Chennai', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Chennai-512.png' },
    { name: 'Pune', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Pune-512.png' },
    { name: 'Hyderabad', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Hyderabad-1024.png' },
    { name: 'Kolkata', image: 'https://cdn4.iconfinder.com/data/icons/indian-cities-landmarks/100/Kolkata-256.png' },
    { name: 'Jaipur', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Hyderabad-1024.png' },
    { name: 'Noida', image: 'https://cdn2.iconfinder.com/data/icons/indian-cities/64/Hyderabad-1024.png' },
  ];

  return (
    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
      <h5 style={{ marginBottom: '20px' }}>Popular Cities</h5>
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
    </div>
  );
};

export default PopularCities;
