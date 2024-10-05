import React from "react";
import Refer_image from "/Refer_app.jpg";
import PlayStore from "/Play_store.png";
import AppStore from "/App_store.png";

const Refer = () => {
  return (
    <div className="py-10 px-10 flex flex-col lg:flex-row justify-between items-center bg-gradient-to-b from-indigo-500 to-[#a84dcc] text-white rounded-3xl h-auto w-11/12 mx-auto">
      <div className=" order-last lg:order-first flex flex-col text-center lg:text-left lg:w-1/2">
        <h1 className="font-bold text-3xl lg:text-5xl py-3">
          Refer your friends and be a part of Zymo
        </h1>
        <p className="py-6 text-lg">
          Download the App for Exclusive Deals and Ease of Booking
        </p>
        <div className="flex gap-5 justify-center lg:justify-start">
          <a href="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch">
            <img
              src={PlayStore}
              alt="Play Store"
              className="w-36 lg:w-44 h-12 lg:h-14"
            />
          </a>
          <a href="https://apps.apple.com/in/app/zymo-self-drive-car-rental/id1547829759?utm_source=apple_ios&utm_medium=referral&utm_campaign=app_launch">
            <img
              src={AppStore}
              alt="App Store"
              className="w-36 lg:w-44 h-12 lg:h-14"
            />
          </a>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src={Refer_image}
          alt="Refer App"
          className="w-72 lg:w-96 h-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default Refer;
