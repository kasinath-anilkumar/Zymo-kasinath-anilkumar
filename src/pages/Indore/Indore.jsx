import React, { useState, useEffect } from 'react';
import indore from "../../assets/City-Logo/indore.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"


const Indore = () => {
  
  return (
    <>
      <Banner bg={indore}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <BlogSection cityName={"indore"} />
    </>
  );
};

export default Indore;
