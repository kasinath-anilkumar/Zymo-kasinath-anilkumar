import React from "react";
import Car from '/car-4-512.png';
import Hand from '/handshake-2-512.png';
import Building from '/organization-512.png';
import Users from '/conference-call-512.png';
// import User from "../../../public/conference-call-512.ico"


const navigation = [
  { image: Users, count: "100,000+", done: "Satisfied Users" },
  { image: Car, count: "30,000+", done: "Cars" },
  { image: Hand, count: "18", done: "Service Providers" },
  { image: Building, count: "59", done: "Cities" },
];

const Zymo = () => {
  return (
    <div className="text-center py-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Why Zymo?</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-28 gap-16 p-10">
        {navigation.map((item, index) => (
          <div key={index}>
            <div
              
              className="flex flex-col items-center justify-center w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-500 to-[#7c2a9d] p-3 sm:p-6 rounded-3xl shadow-lg"
            >
              <img src={item.image} alt="icon" className="w-14 h-14 mb-4 " />
            </div>
            <p className="text-2xl font-bold">{item.count}</p>
            <p className="text-base font-medium text-gray-900">{item.done}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zymo;
