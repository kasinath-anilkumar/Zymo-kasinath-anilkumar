import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "/logo.png";
import { useLocationContext } from "../../Context/Location";
import l_icon from "/location-icon.png";
import Dropdown from "../Dropdown/Dropdown";

const navigation = [
  { name: "Fleet", id: "Home" },
  { name: "About Us", id: "About" },
  { name: "Blogs", id: "Education" },
  { name: "Careers", id: "Projects" },
  { name: "Contact Us", id: "Contact" },
  { name: "Cars", id: "Cars" },
];

const Navbar = () => {
  const { location } = useLocationContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-2xl h-20 font-poppins shadow-md">
      <nav
        className="container mx-auto px-6 lg:px-8 flex justify-between items-center h-full"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="flex lg:flex-1 items-center">
          <img src={Logo} alt="Logo" className="h-15 w-40" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="items-center justify-center hidden lg:flex lg:gap-x-12 flex-grow">
          {navigation.map((item) => (
            <div key={item.name} className="relative cursor-pointer group">
              <div className="relative">
                {item.name === "Cars" ? ( // Use a conditional operator
                  <Dropdown
                    options={["Sedan", "SUV", "Hatchback", "Luxury"]}
                    first={item.name}
                  />
                ) : (
                  item.name
                )}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Location Display */}
        <div className="ml-6 cursor-pointer hidden lg:block border-blue-500 rounded-full bg-yellow-400 py-3 px-5">
          <img
            src={l_icon}
            alt="Location Icon"
            className="h-6 w-6 inline-block"
          />
          {location}
        </div>

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
        <DialogPanel className="fixed inset-0 z-50 overflow-y-auto bg-gray-100 p-6 lg:hidden top-0 right-0  px-6 py-6 w-60 lg:w-90 md:w-70 h-full">
          <div className="flex items-center justify-between w-60">
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
                >
                  {item.name}
                </div>
              ))}
            </div>

            {/* Location in Mobile Menu */}
            <div className=" rounded-full mt-10 text-xl font-normal cursor-pointer bg-yellow-400 py-5 px-4 h-auto">
              <img
                src={l_icon}
                alt="Location Icon"
                className="h-6 w-6 inline-block "
              />
              {location}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
