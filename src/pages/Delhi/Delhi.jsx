import React from "react";
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import IndiaGate from "../../assets/City-Logo/delhi.png";

const Delhi = () => {
  return (
    <>
      <Banner  bg={IndiaGate}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection cityName={"delhi"} />
    </>
  );
};

export default Delhi;
