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
        <Route path="/Zymo-self-drive-cars/delhi" element={<Delhi />} />
        <Route path="/Zymo-self-drive-cars/city/kolkata" element={<Kolkata />} />
        <Route path="/Zymo-self-drive-cars/city/chennai" element={<Chennai/>} />
        <Route path="/Zymo-self-drive-cars/city/hyderabad" element={<Hyderabad />} />
        <Route path="/Zymo-self-drive-cars/city/mumbai" element={<Mumbai />} />
        <Route path="/Zymo-self-drive-cars/city/pune" element={<Pune />} />
        <Route path="/Zymo-self-drive-cars/city/jaipur" element={<Jaipur />} />
        <Route path="/Zymo-self-drive-cars/city/noida" element={<Noida />} />
      </Routes>
      {/* <Banner/> */}
    </>
  );
};

export default App;
