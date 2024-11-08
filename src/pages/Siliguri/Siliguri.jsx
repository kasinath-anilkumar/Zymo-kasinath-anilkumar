import React, { useState, useEffect } from 'react';
import siliguri from "../../assets/City-Logo/siliguri.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"


const Siliguri = () => {
  
  return (
    <>
      <Banner bg={siliguri}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <BlogSection cityName={"siliguri"} />
    </>
  );
};

export default Siliguri;
