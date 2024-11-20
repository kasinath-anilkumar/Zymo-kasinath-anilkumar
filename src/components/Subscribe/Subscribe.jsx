import React from "react";
import Card from "../Card/Card";
import SwiftImg from "../../../public/explore-cars/Maruti Swift VXi Opt AMT Blitz Edition.png";
import BalenoImg from "../../../public/explore-cars/Maruti Baleno Alpha Regal Edition.png";
import TataPunchImg from "../../../public/explore-cars/Tata Punch Creative Plus S Camo AMT.jpg";
import Triber from "../../../public/explore-cars/Renault Triber.jpg";
import MagniteImg from "../../../public/explore-cars/wp9085790-nissan-magnite-wallpapers.jpg";

const data = [
  {
    title: "Swift 2013",
    price: "15",
    image: SwiftImg,
    seater: 4,
    option: 2
  },
  {
    title: "Baleno",
    price: "35",
    image: BalenoImg,
    seater: 4,
    option: 1
  },
  {
    title: "Tata Punch",
    price: "40",
    image: TataPunchImg,
    seater: 4,
    option: 1
  },
  {
    title: "Renault Triber",
    price: "32",
    image: Triber,
    seater: 4,
    option: 1
  },
  {
    title: "Magnite",
    price: "33",
    image: MagniteImg,
    seater: 4,
    option: 1
  },
  {
    title: "Swift 2013",
    price: "15",
    image: SwiftImg,
    seater: 4,
    option: 2
  }
];

const Subscribe = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center p-5">
      {data.map((item) => (
        <Card title={item.title} price={item.price} image={item.image} seater={item.seater} option={item.option}/>
      ))}
    </div>
  );
};

export default Subscribe;
