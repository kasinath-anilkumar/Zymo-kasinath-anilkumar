import React, { useState, Suspense, useEffect, lazy } from "react";
import { analytics } from "./firebase-config";
import { logEvent } from "firebase/analytics";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ZymoFeaturedCityList, ZymoAllCityList } from "./assets/ZymoCityList";
import NotFound from "./NotFound";
import { Toaster } from "react-hot-toast";
import { useLocationContext } from "./Context/Location";
import SelectLocation from "./components/SelectLocation/Select";
import WhatsAppIcon from "./components/whatsappIcon/whatsapp";
import BlogContext from "./Context/BlogContext";
import LoadingPlaceholder from "./components/LoadingPlaceholder/LoadingPlaceholder";
import ExploreNewCars from "./components/ExploreNewCars/ExploreNewCars";
import Banner1 from "./components/Banner/Banner1"

import Subcribe from "./components/Subscribe/Subscribe";
import DownloadApp from "./components/DownloadApp/DownloadApp";


// Lazy-loaded components
const Banner = lazy(() => import("./components/Banner/Banner"));
const Service = lazy(() => import("./components/Service/Service"));
const CarRentalSearch = lazy(() => import("./components/CarRentalSearch/CarRentalSearch"));
const Zymo = lazy(() => import("./components/Zymo/Zymo"));
const Benefits = lazy(() => import("./components/Benefits/Benefits"));
const Cars = lazy(() => import("./components/Cars/Cars"));
const Refer = lazy(() => import("./components/Refer/Refer"));
const Featured = lazy(() => import("./components/Featured/Featured"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const Youtube = lazy(() => import("./components/Youtube/Youtube"));
const Faq = lazy(() => import("./components/FAQ/Faq"));
const BrandCarousel = lazy(() => import("./components/BrandsAvailable/BrandCarousel"));
const ServiceProvider = lazy(() => import("./components/ServiceProviders/ServiceProvider"));
const Career = lazy(() => import("./components/Career/Career"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Privacy = lazy(() => import("./components/PrivacyPolicy/Privacy"));
const Terms = lazy(() => import("./components/TermsAndConditions/Terms"));
const CancellationPolicy = lazy(() => import("./components/CancellationPolicy/CancellationPolicy"));
const BlogsMainPage = lazy(() => import("./components/blog/BlogsMainPage"));
const BlogDetailPage = lazy(() => import("./components/blog/blogDetailPage"));
const Delhi = lazy(() => import("./pages/Delhi/Delhi"));
const Chennai = lazy(() => import("./pages/Chennai/Chennai"));
const Hyderabad = lazy(() => import("./pages/Hyderabad/Hyderabad"));
const Pune = lazy(() => import("./pages/Pune/Pune"));
const Mumbai = lazy(() => import("./pages/Mumbai/Mumbai"));
const Kolkata = lazy(() => import("./pages/Kolkata/Kolkata"));
const CreateBlogPage = lazy(() => import("./components/blog/CreateBlogPage"));
const CreateEditBlogPage = lazy(() => import("./components/blog/createEditBlogPage"));
const ComingSoon = lazy(() => import("./components/ComingSoon/ComingSoon"));

const App = () => {
  const { location, setLocation, locationShow } = useLocationContext();
  const navigate = useNavigate();
  const location1 = useLocation();
  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_path: location1.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });


    window.scrollTo(0, 0);

    window.scrollTo(0, 0);
  }, [location1]);

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href)?.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <BlogContext.Provider value={{ blogsList, setBlogsList }}>
        <Suspense fallback={<LoadingPlaceholder height="400px" />}>
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/monthly-car-rental/delhi" element={<Subcribe />} />
            <Route path="/buy-car" element={<ExploreNewCars />} />
            <Route path="/blogs" element={<BlogsMainPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path= "/createblog/:id" element={ <CreateBlogPage />} />
            <Route path= "/createblog" element= {<CreateEditBlogPage /> }  />          
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-service" element={<Terms />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/monthly-car-rental/:city" element={<ComingSoon/>} />
            <Route path="/monthly-car-rental/book/:carName" element={<DownloadApp/>} />
            <Route path="/buy-car/:car" element={<ComingSoon/>} />

            {ZymoAllCityList.concat(ZymoFeaturedCityList).map((city, index) => {
              const CityComponent = lazy(() =>
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
                    <Suspense fallback={<LoadingPlaceholder height="500px" />}>
                      <CityComponent />
                    </Suspense>
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </BlogContext.Provider>

      {location1.pathname === `/` && (
        <>
          <Suspense fallback={<LoadingPlaceholder height="200px" />}>
            <CarRentalSearch />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="200px" />}>
            <Banner1 />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="300px" />}>
            <Zymo />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="300px" />}>
            <BrandCarousel />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="200px" />}>
            <Benefits />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="300px" />}>
            <ServiceProvider />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="300px" />}>
            <Cars />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="200px" />}>
            <Refer />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="300px" />}>
            <Featured />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="300px" />}>
            <Reviews />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="300px" />}>
            <Youtube />
          </Suspense>
          <WhatsAppIcon />
          <Suspense fallback={<LoadingPlaceholder height="200px" />}>
            <Faq />
          </Suspense>
          <Suspense fallback={<LoadingPlaceholder height="300px" />}>
            <Service />
          </Suspense>
        </>
      )}

      <Footer />

      {locationShow && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <SelectLocation />
        </div>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
