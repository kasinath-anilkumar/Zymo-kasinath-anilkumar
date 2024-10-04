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
import Zymo from './components/Zymo/Zymo';
import Benefits from './components/Benefits/Benefits';
import Cars from './components/Cars/Cars';
import Refer from './components/Refer/Refer';
import Featured from './components/Featured/Featured';
import Reviews from './components/Reviews/Reviews';
import Youtube from './components/Youtube/Youtube';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import Amritsar from './pages/Amritsar/Amritsar';
import Kochi from './pages/Kochi/Kochi';
import Ernakulam from './pages/Ernakulam/Ernakulam';
import Komalapuram from './pages/Komalapuram/Komalapuram';

const App = () => {
  return (
    <>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<CarRentalSearch />} />
        <Route path="self-drive-cars/delhi" element={<Delhi />} />
        <Route path="self-drive-cars/kolkata" element={<Kolkata />} />
        <Route path="self-drive-cars/chennai" element={<Chennai />} />
        <Route path="self-drive-cars/hyderabad" element={<Hyderabad />} />
        <Route path="self-drive-cars/mumbai" element={<Mumbai />} />
        <Route path="self-drive-cars/pune" element={<Pune />} />
        <Route path="self-drive-cars/jaipur" element={<Jaipur />} />
        <Route path="self-drive-cars/noida" element={<Noida />} />
        <Route path="self-drive-cars/kochi" element={<Kochi />} />
        <Route path="self-drive-cars/amritsar" element={<Amritsar />} />
        <Route path="self-drive-cars/ernakulam" element={<Ernakulam />} />
        <Route path="self-drive-cars/komalapuram" element={<Komalapuram />} />
      </Routes>

      <Zymo />
      <Benefits />
      <Refer />
      <Cars />
      <Featured />
      <Reviews />
      <Youtube />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
