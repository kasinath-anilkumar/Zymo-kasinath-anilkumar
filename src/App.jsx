import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import CarRentalSearch from './components/CarRentalSearch/CarRentalSearch';
import Zymo from './components/Zymo/Zymo';
import Benefits from './components/Benefits/Benefits';
import Cars from './components/Cars/Cars';
import Refer from './components/Refer/Refer';
import Featured from './components/Featured/Featured';
import Reviews from './components/Reviews/Reviews';
import Youtube from './components/Youtube/Youtube';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import { ZymoFeaturedCityList, ZymoAllCityList } from './assets/ZymoCityList';
import Navbar from "./components/Navbar/Navbar"

import Delhi from './pages/Delhi/Delhi';
import Chennai from './pages/Chennai/Chennai';
import Hyderabad from './pages/Hyderabad/Hyderabad';
import Pune from './pages/Pune/Pune';
import Mumbai from './pages/Mumbai/Mumbai';
import Kolkata from './pages/Kolkata/Kolkata';
import NotFound from '../src/NotFound';
import Career from './components/Career/Career';

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* <CustomNavbar /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<CarRentalSearch />} />

        {/* Predefined Routes */}
        <Route path="self-drive-car-rentals/delhi" element={<Delhi />} />
        <Route path="self-drive-car-rentals/chennai" element={<Chennai />} />
        <Route path="self-drive-car-rentals/hyderabad" element={<Hyderabad />} />
        <Route path="self-drive-car-rentals/mumbai" element={<Mumbai />} />
        <Route path="self-drive-car-rentals/pune" element={<Pune />} />
        <Route path="self-drive-car-rentals/kolkata" element={<Kolkata />} />
        <Route path="/career" element={<Career />} />

        {/* Dynamic Routes */}
        {ZymoAllCityList.map((city, index) => {
          const CityComponent = React.lazy(() =>
            import(`./pages/${city.name}/${city.name}.jsx`).catch(() => Promise.resolve(NotFound))
          );
          return (
            <Route
              key={index}
              path={`self-drive-car-rentals/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CityComponent />
                </Suspense>
              }
            />
          );
        })}
      </Routes>

      {location.pathname !== "/career" && (
        <>
          <Zymo />
          <Benefits />
          <Refer />
          <Cars />
          <Featured />
          <Reviews />
          <Youtube />
          <Faq />
        </>
      )}

      <Footer />
    </>
  );
};

export default App;
