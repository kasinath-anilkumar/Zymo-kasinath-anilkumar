import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import CarRentalSearch from './components/CarRentalSearch/CarRentalSearch';
import Delhi from './pages/Delhi/Delhi';
import Chennai from './pages/Chennai/Chennai';
import Hyderabad from './pages/Hyderabad/Hyderabad';
import Pune from './pages/Pune/Pune';
import Mumbai from './pages/Mumbai/Mumbai'
import Kolkata from './pages/Kolkata/Kolkata';
import Jaipur from './pages/Jaipur/Jaipur';
import Noida from './pages/Noida/Noida';

const App = () => {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<CarRentalSearch/>} />
        <Route path="/city/delhi" element={<Delhi />} />
        <Route path="/city/kolkata" element={<Kolkata />} />
        <Route path="/city/chennai" element={<Chennai/>} />
        <Route path="/city/hyderabad" element={<Hyderabad />} />
        <Route path="/city/mumbai" element={<Mumbai />} />
        <Route path="/city/pune" element={<Pune />} />
        <Route path="/city/jaipur" element={<Jaipur />} />
        <Route path="/city/noida" element={<Noida />} />
      </Routes>
      {/* <Banner/> */}
    </>
  );
};

export default App;
