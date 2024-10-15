import React, { Suspense,useEffect } from "react";
import { Routes, Route, useLocation,useNavigate } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CarRentalSearch from "./components/CarRentalSearch/CarRentalSearch";
import Zymo from "./components/Zymo/Zymo";
import Benefits from "./components/Benefits/Benefits";
import Cars from "./components/Cars/Cars";
import Refer from "./components/Refer/Refer";
import Featured from "./components/Featured/Featured";
import Reviews from "./components/Reviews/Reviews";
import Youtube from "./components/Youtube/Youtube";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import { ZymoFeaturedCityList, ZymoAllCityList } from "./assets/ZymoCityList";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Privacy from "./components/PrivacyPolicy/Privacy";
import Terms from "./components/TermsAndConditions/Terms"
import CancellationPolicy from "./components/CancellationPolicy/CancellationPolicy"
// import BlogsMainPage from "./components/blog/BlogsMainPage"
// import BlogDetailPage from "./components/blog/blogDetailPage";

import Delhi from "./pages/Delhi/Delhi";
import Chennai from "./pages/Chennai/Chennai";
import Hyderabad from "./pages/Hyderabad/Hyderabad";
import Pune from "./pages/Pune/Pune";
import Mumbai from "./pages/Mumbai/Mumbai";
import Kolkata from "./pages/Kolkata/Kolkata";
import NotFound from "../src/NotFound";
import Career from "./components/Career/Career";
import { useLocationContext } from "./Context/Location";
import SelectLocation from "./components/SelectLocation/Select";
import WhatsAppIcon from "./components/whatsappIcon/whatsapp";

const App = () => {
  const { location, setLocation } = useLocationContext();
  const navigate = useNavigate();
  const location1 = useLocation();

  useEffect(() => {
    const location = localStorage.getItem('location');
    if (location) {
      const newUrl = `/self-drive-car-rentals/${location}`;
      navigate(newUrl);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={} /> */}

        {/* Predefined Routes */}
        <Route path="self-drive-car-rentals/delhi" element={<Delhi />} />
        <Route path="self-drive-car-rentals/chennai" element={<Chennai />} />
        <Route
          path="self-drive-car-rentals/hyderabad"
          element={<Hyderabad />}
        />
        <Route path="self-drive-car-rentals/mumbai" element={<Mumbai />} />
        <Route path="self-drive-car-rentals/pune" element={<Pune />} />
        <Route path="self-drive-car-rentals/kolkata" element={<Kolkata />} />
        <Route path="/career" element={<Career />} />
        <Route path="/fleet" element={<NotFound />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<NotFound />} />
        {/* <Route path="/blog/:id" element={<BlogDetailPage />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />

        {/* Dynamic Routes */}
        {ZymoAllCityList.map((city, index) => {
          const CityComponent = React.lazy(() =>
            import(`./pages/${city.name}/${city.name}.jsx`).catch(() =>
              Promise.resolve(NotFound)
            )
          );
          return (
            <Route
              key={index}
              path={`self-drive-car-rentals/${city.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CityComponent />
                </Suspense>
              }
            />
          );
        })}

        {/* Zymo Featured city list */}

        {ZymoFeaturedCityList.map((city, index) => {
          const CityComponent = React.lazy(() =>
            import(`./pages/${city.name}/${city.name}.jsx`).catch(() =>
              Promise.resolve(NotFound)
            )
          );
          return (
            <Route
              key={index}
              path={`self-drive-car-rentals/${city.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CityComponent />
                </Suspense>
              }
            />
          );
        })}
      </Routes>

      {location1.pathname === `/self-drive-car-rentals/${location}` && (
        <>
          {/* <Banner /> */}
          <CarRentalSearch />
          <Zymo />
          <Benefits />
          <Cars />
          <Refer />
          <Featured />
          <Reviews />
          <Youtube />
          <WhatsAppIcon />
          <Faq />
        </>
      )}

      <Footer />

      {/* Overlay for SelectLocation */}
      {location === "Default" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <SelectLocation />
        </div>
      )}
    </>
  );
};

export default App;
