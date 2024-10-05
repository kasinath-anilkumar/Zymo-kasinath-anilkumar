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
import ZymoOtherCities from './js/ZymoOtherCities';

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
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<CarRentalSearch />} />

        {/* Predefined Routes */}
        <Route path="self-drive-cars/delhi" element={<Delhi />} />
        <Route path="self-drive-cars/chennai" element={<Chennai />} />
        <Route path="self-drive-cars/hyderabad" element={<Hyderabad />} />
        <Route path="self-drive-cars/mumbai" element={<Mumbai />} />
        <Route path="self-drive-cars/pune" element={<Pune />} />
        <Route path="self-drive-cars/kolkata" element={<Kolkata />} />
        <Route path="/career" element={<Career />} />

        {/* Dynamic Routes */}
        {ZymoOtherCities.map((city, index) => {
          const CityComponent = React.lazy(() =>
            import(`./pages/${city.name}/${city.name}.jsx`).catch(() => Promise.resolve(NotFound))
          );
          return (
            <Route
              key={index}
              path={`self-drive-cars/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
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
