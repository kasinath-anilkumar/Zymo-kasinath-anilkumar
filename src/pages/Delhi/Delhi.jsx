import React from "react";
import CompareAndChoice from "../../components/city components/Delhi-components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Delhi-components/Benefits/Benefits";
import BlogSection from "../../components/city components/Delhi-components/BlogSection/BlogSection";
import Banner from "../../components/city components/Delhi-components/Banner/Banner";
import IndiaGate from "/india-gate-car.png";

const Delhi = () => {
  return (
    <>
      <Banner  bg={IndiaGate}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection />
    </>
  );
};

export default Delhi;
