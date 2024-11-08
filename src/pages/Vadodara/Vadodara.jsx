import React, { useState, useEffect } from 'react';
import vadodara from "../../assets/City-Logo/vadodara.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"


const Vadodara= () => {
  
  return (
    <>
      <Banner bg={vadodara}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <BlogSection cityName={"vadodara"} />
    </>
  );
};

export default Vadodara;
