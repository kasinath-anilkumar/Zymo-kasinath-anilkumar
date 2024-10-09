import React from "react";
import Bg from "/banner/bg-2.jpg";
import Zymo_partner from "/banner/zymo-logo.png";
import AS from "/App_store.png";
import GP from "/Play_store.png";
import Logo from "/logo.png";

const Banner1 = () => {
  return (
    <div className="md:py-10 py-5 text-white font-poppins px-2 md:px-10">
      <div className="relative w-full h-auto md:h-[500px] px-5 md:px-20 rounded-2xl ">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover filter blur-[1px] rounded-2xl"
          style={{
            backgroundImage: `url(${Bg})`,
          }}
        />

        <div className="relative z-10 h-full w-full flex flex-col-reverse md:flex-row justify-between items-center rounded-2xl">
          <div className="flex flex-col items-center justify-center text-center text-2xl md:text-4xl font-bold ml-5 md:ml-0 md:mt-0">
            <div className="py-2 md:py-3 text-xl md:text-2xl lg:text-5xl">
              <h1>Experience your ride</h1>
              <h1>with Zymo</h1>
            </div>
            <div className="flex flex-col py-2 text-sm md:text-base">
              <h1>Download the app for a better experience</h1>
              <div className="flex gap-2 md:gap-4 py-2 mx-auto">
                <a href="https://apps.apple.com/in/app/zymo-self-drive-car-rental/id1547829759?utm_source=apple_ios&utm_medium=referral&utm_campaign=app_launch">
                  <img
                    src={AS}
                    alt="App Store"
                    className="w-14 h-6 md:h-8 lg:h-10 md:w-20 lg:w-28"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch">
                  <img
                    src={GP}
                    alt="Google Play"
                    className="w-14 h-6 md:h-8 md:w-20 lg:w-28 lg:h-10"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" p-1">
            <img
              src={Zymo_partner}
              alt="Zymo Partner Logo"
              className="h-[300px] w-[350px] md:h-[350px] md:w-[400px] lg:h-[450px] lg:w-[500px] object-contain mr-5 md:mr-16 lg:mr-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
