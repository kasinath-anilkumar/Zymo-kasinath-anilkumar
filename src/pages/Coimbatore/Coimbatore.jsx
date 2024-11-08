import React, { useState, useEffect } from 'react';
import coimbatore from "../../assets/City-Logo/coimbatore.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"


const Coimbatore = () => {
  
  return (
    <>
      <Banner bg={coimbatore}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <BlogSection cityName={"coimbatore"} />
    </>
  );
};

export default Coimbatore;
