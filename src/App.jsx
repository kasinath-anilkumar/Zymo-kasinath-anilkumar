import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import CarRentalSearch from './components/CarRentalSearch/CarRentalSearch';
import Delhi from './pages/Delhi/Delhi';
import Banglore from './pages/Banglore/Banglore'
import Chennai from './pages/Chennai/Chennai';
import Hyderabad from './pages/Hyderabad/Hyderabad';
import Pune from './pages/Pune/Pune';
import Mumbai from './pages/Mumbai/Mumbai'
import Banner from './components/Banner/Banner'
const App = () => {
  return (
    <>
      <CustomNavbar />
      
      <Routes>
        <Route path="/" element={<CarRentalSearch style={{ zIndex: 100 }}  />} />
        <Route path="/city/delhi" element={<Delhi />} />
        <Route path="/city/bangaluru" element={<Banglore />} />
        <Route path="/city/chennai" element={<Chennai/>} />
        <Route path="/city/hyderabad" element={<Hyderabad />} />
        <Route path="/city/mumbai" element={<Mumbai />} />
        <Route path="/city/pune" element={<Pune />} />
      </Routes>
      {/* <Banner/> */}
    </>
  );
};

export default App;
