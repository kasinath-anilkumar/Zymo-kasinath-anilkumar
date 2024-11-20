import React from "react";
import SwiftImg from "../../../public/explore-cars/Maruti Swift VXi Opt AMT Blitz Edition.png";

const Card = ({ title, price, image, seater, option }) => {
  return (
    <div className="card glass w-96 shadow-xl">
      {/* <figure> */}
      <img
        src={image}
        alt="Shoes"
        className="hover:scale-110 rounded-md transition-all"
      />
      {/* </figure> */}
      <div className="card-body">
        <div className="flex justify-between">
          <div className="">
            <h2 className="card-title text-2xl m-0">{title}</h2>
            <h2 className="text-gray-500">{seater} seater | {option} option</h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="">Starts at</p>
            <p className="font-bold text-xl">₹{price},000</p>
            <p>(GST incl)</p>
          </div>
        </div>
        <div className="card-actions justify-center">
          <button className="btn text-xl text-white hover:opacity-75 hover:-translate-y-3">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
