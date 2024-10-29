import React, { useState, useEffect } from 'react';
import pune from "../../assets/City-Logo/pune.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";

const Pune = () => {
  
  return (
    <>
      <Banner bg={pune}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection cityName={"pune"} />
    </>  );
};

export default Pune;
