import React from 'react';
import CompanyInfo from './CompanyInfo';
import About from './About';
import Features from './Features';
import InstallApp from './InstallApp';

const Footer = () => {
  return (
    <footer className="bg-white text-black m-10">
      <div className="container px-4">
        <div className="flex flex-wrap justify-between"> {/* Main content container */}
          <CompanyInfo /> {/* Company information component */}
          <About /> {/* About component */}
          <Features /> {/* Features component */}
          <InstallApp /> {/* Install app component */}
        </div>
        <p className="text-center mt-4">Copyright © 2024 Zymo Rental service Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
