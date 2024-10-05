import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PopularCities from '../PopularCities/PopularCities';
import Banner from '../Banner/Banner'

const CarRentalSearch = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('2024-10-03T09:30');
  const [returnDate, setReturnDate] = useState('2024-10-06T18:30');
  const [showCities, setShowCities] = useState(false);
  const [activeTab, setActiveTab] = useState('daily'); 
  const navigate = useNavigate();

  const handleLocationSelect = (city) => {
    setLocation(city);
    setShowCities(false);
    navigate(`self-drive-car-rentals/${city.toLowerCase()}`);
  };

  // const handleSearch = () => {
  //   navigate(`/search?location=${location}&pickupDate=${pickupDate}&returnDate=${returnDate}`);
  // };

  return (
    <div className='mt-14 container-sm  rounded'>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}> 
          <Button
            variant={activeTab === 'daily' ? 'primary' : 'outline-secondary'}
            onClick={() => setActiveTab('daily')}
            style={{
              width: '150px',
              borderRadius: '8px 0 0 8px',
              backgroundColor: activeTab === 'daily' ? '#a11fdb' : 'transparent',
              color: activeTab === 'daily' ? 'white' : 'black',
              border: 'none',
            }}
          >
            Daily Rentals
          </Button>
          <Button
            variant={activeTab === 'monthly' ? 'primary' : 'outline-secondary'}
            onClick={() => setActiveTab('monthly')}
            style={{
              width: '150px',
              borderRadius: '0 8px 8px 0',
              backgroundColor: activeTab === 'monthly' ? '#a11fdb' : 'rgba(75, 54, 117, 0.2)', 
              color: activeTab === 'monthly' ? 'white' : 'black',
              border: 'none',
              transition: 'background-color 0.3s ease', 
            }}
          >
            Monthly Subscription
          </Button>
        </div>

        <Row>
  <Col xs={12} md={3}>
    <div>
      <label>Location</label>
      <Button
        onClick={() => setShowCities(!showCities)}
        style={{
          width: '100%',
          padding: '10px',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#a11fdb',
          border: 'none',
        }}
      >
        {location || 'Select a location'}
        {showCities ? <FaChevronUp /> : <FaChevronDown />}
      </Button>
    </div>
  </Col>
  <Col xs={12} md={3}>
    <div className="text-center">
      <label className="font-semibold">Pick-Up Date</label>
      <input
        type="datetime-local"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
        style={{
          padding: '10px',
          backgroundColor: 'rgba(75, 54, 117, 0.2)',
          borderRadius: '5px',
          width: '100%',
          boxSizing: 'border-box', 
        }}
      />
    </div>
  </Col>
  <Col xs={12} md={3}>
    <div className="text-center">
      <label className="font-semibold">Return Date</label>
      <input
        type="datetime-local"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        style={{
          padding: '10px',
          backgroundColor: 'rgba(75, 54, 117, 0.2)',
          borderRadius: '5px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
    </div>
  </Col>
  <Col xs={12} md={2}>
    <Button
      variant="primary"
      style={{
        width: '100%',
        backgroundColor: '#a11fdb',
        border: 'none',
        marginTop: '28px',
      }}
    >
      Search
    </Button>
  </Col>
</Row>

      </div>

      {showCities && <PopularCities onCitySelect={handleLocationSelect} />}
      <Banner/>
    </div>
   
  );
};

export default CarRentalSearch;
