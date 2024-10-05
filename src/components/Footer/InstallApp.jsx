import React from "react";
import gpayapp from "/gp.png";
import py from "/payment.png";
import App_store from "/App_store.png"
import Play_store from "/Play_store.png"

const InstallApp = () => {
  return (
    <div className="w-full md:w-[368px] md:h-[241px]">
      <h3 className="text-xl font-bold mb-4">Install App</h3>
      <p className="mb-3">From App Store or Google Play</p>
      <div className="flex gap-5 justify-center lg:justify-start">
          <a href="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch">
            <img
              src={Play_store}
              alt="Play Store"
              className="w-36 lg:w-44 h-10 lg:h-14"
            />
          </a>
          <a href="https://apps.apple.com/in/app/zymo-self-drive-car-rental/id1547829759?utm_source=apple_ios&utm_medium=referral&utm_campaign=app_launch">
            <img
              src={App_store}
              alt="App Store"
              className="w-36 lg:w-44 h-10 lg:h-14"
            />
          </a>
        </div>
      <p className="mt-4 mb-4">Secured Payment Gateway</p>
      <div>
        <img src={py} alt="Payment Gateway" className="w-full h-auto" /> {/* Ensures the image scales proportionally */}
      </div>
    </div>
  );
};

export default InstallApp;
