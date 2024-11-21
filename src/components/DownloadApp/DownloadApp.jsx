import React from "react";
import Play_store from "/Play_store.png";
import App_store from "/App_store.png";

const DownloadApp = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-indigo-600 to-purple-500 text-white px-4">
        {/* <img
            src="/ComingSoon.png" 
            alt="Coming Soon"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6"
            /> */}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
          To book Cars, Download our App:
        </h1>

        <div className="flex gap-4 flex-wrap">
          <a className="border-red-100 border-2 rounded-xl" href="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch">
            <img
              src={Play_store} // Replace with your Play Store image source
              alt="Play Store"
            />
          </a>

          <a href="https://apps.apple.com/in/app/zymo-self-drive-car-rental/id1547829759?utm_source=apple_ios&utm_medium=referral&utm_campaign=app_launch">
            <img
              src={App_store} // Replace with your App Store image source
              alt="App Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
