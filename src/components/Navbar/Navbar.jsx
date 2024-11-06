import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "/logo.png";
import { useLocationContext } from "../../Context/Location";
import l_icon from "/location-icon.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Fleet", id: "Fleet", link: "/fleet" },
  { name: "About Us", id: "About", link: "/about" },
  { name: "Blogs", id: "Blogs", link: "/blogs" },
  { name: "Careers", id: "Careers", link: "/career" },
  { name: "Contact Us", id: "Contact", link: "/contact" },
];

const Navbar = () => {
  const locationpath = useLocation();
  const [locationSet, setLocationSet] = useState(false);
  const { location, setLocation, locationShow, setLocationShow } =
    useLocationContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    if (locationpath.pathname === `/self-drive-car-rentals/${location}`) {
      setLocationSet(true);
    }
  }, [locationpath.pathname, location]);

  return (
    <header className="sticky top-0 z-50 font-poppins bg-white text-2xl h-20 shadow-md">
      <nav
        className="container mx-auto px-6 flex justify-between items-center h-full"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="items-center" onClick={() => setLocationSet(false)}>
          <Link to="/">
            <img src={Logo} alt="Logo" className="md:h-10 h-8 w-32" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div
          className={`items-center ${
            locationSet ? "justify-center" : "justify-end space-x-10"
          } hidden lg:flex gap-3 md:gap-5 lg:gap-x-10 flex-grow`}
        >
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative cursor-pointer group text-base md:text-lg"
            >
              <div className="relative">
                {item.name === "Fleet" ? (
                  <a href={`/#cars`} className="p-3 text-xl">
                    Fleet
                  </a>
                ) : (
                  <Link to={`${item.link}`} className="p-3">
                    {item.name}
                  </Link>
                )}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Location Display */}
        {locationSet && (
          <div
            className="ml-6 cursor-pointer hidden lg:block border-blue-500 rounded-full bg-gradient-to-b from-[#927ef2] to-[#c588dd] py-2 text-lg px-2 md:px-5"
            onClick={() => setLocationShow(true)}
          >
            <img
              src={l_icon}
              alt="Location Icon"
              className="h-6 w-6 inline-block"
            />
            {capitalizeFirstLetter(location)}
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed inset-0 z-50 overflow-y-auto bg-gray-100 lg:hidden top-0 right-0 w-full max-w-xs p-6">
          <div className="flex items-center justify-between">
            {/* Close Button */}
            <button
              type="button"
              className="rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6">
            {/* Navigation Links in Mobile Menu */}
            <div className="space-y-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="block rounded-lg py-2 px-4 text-xl font-normal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name === "Fleet" ? (
                    <a href={`/#cars`} className="p-3 text-xl">
                      Fleet
                    </a>
                  ) : (
                    <Link to={`${item.link}`} className="p-3">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Location in Mobile Menu */}
            {locationSet && (
              <div
                className="rounded-full mt-3 text-xl font-normal cursor-pointer bg-violet-400 py-3 px-3"
                onClick={() => {
                  setLocation("Default");
                  setLocationShow(true);
                  setMobileMenuOpen(false);
                }}
              >
                <img
                  src={l_icon}
                  alt="Location Icon"
                  className="h-6 w-6 inline-block"
                />
                {capitalizeFirstLetter(location)}
              </div>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
