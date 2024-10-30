import React, { useState, useEffect } from 'react';
import mumbai from "../../assets/City-Logo/mumbai.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";


const Mumbai = () => {
  return (
    <>
      <Banner bg={mumbai}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection cityName={"mumbai"} />
    </>
  );
};

export default Mumbai;
