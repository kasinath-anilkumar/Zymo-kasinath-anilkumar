import React from "react";
import IndiaGate from "/india-gate-car.png";
import Play_store from "/Play_store.png";
import App_store from "/App_store.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#5542b1e5] to-[#a738d3] rounded-xl mx-4 my-10 font-poppins">
      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-12 lg:p-16">
        {/* Text Section */}
        <div className="text-white md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold py-2">
            Download the ZYMO App
          </h1>
          <p className="text-lg md:text-xl py-2">
            And get a voucher worth Rs.100
          </p>

          <div className="flex justify-center  space-x-4 py-2">
            <a href="https://apps.apple.com/in/app/zymo-self-drive-car-rental/id1547829759?utm_source=apple_ios&utm_medium=referral&utm_campaign=app_launch">
              <img
                src={App_store}
                alt="App Store"
                className="h-12 md:h-14 lg:h-16"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch">
              <img
                src={Play_store}
                alt="Google Play"
                className="h-12 md:h-14 lg:h-16"
              />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3">
          <img src={IndiaGate} alt="India Gate with Car" className="w-full" />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="p-1">
        <p className="text-[15px] md:text-sm font-bold mr-2 md:mr-10 text-right">
          *T&C Apply
        </p>
      </div>
    </div>
  );
};

export default Banner;
