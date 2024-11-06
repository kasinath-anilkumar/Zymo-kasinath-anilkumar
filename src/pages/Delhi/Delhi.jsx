import React from "react";
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import IndiaGate from "../../assets/City-Logo/delhi.png";
import Banner1 from "../../components/Banner/Banner1"
import Content from "./Content";

const Delhi = () => {
  return (
    <>
      <Banner  bg={IndiaGate}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <Content />
      <BlogSection cityName={"delhi"} />
    </>
  );
};

export default Delhi;
