import React, { useState, useEffect } from 'react';
import ahmedabad from "../../assets/City-Logo/ahmedabad.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";

const Ahmedabad = () => {
  
  return (
    <>
      <Banner bg={ahmedabad}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection cityName={"ahmedabad"} />
    </>  );
};

export default Ahmedabad;
