import React from "react";
import { Suv, Hatchback, Sedan, Luxury, Electric, Muv } from "./Cars.js";

const MostSearchCars = () => {
  const [cars, setCars] = React.useState(Suv);
  const [current,setCurrent]=React.useState("suv");
  return (
    <div className="">
      <h1>the most searched cars</h1>
      <div className="">
        <ul>
          <li>Suv</li>
          <li>Hatchback</li>
          <li>Sedan</li>
          <li>Luxury</li>
          <li>Electric</li>
          <li>Muv</li>
        </ul>
      </div>
      <div className=""></div>
    </div>
  );
};

export default MostSearchCars;
