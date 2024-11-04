import React, { useState, useEffect } from 'react';
import noida from "../../assets/City-Logo/noida.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"


const Noida = () => {
  
  return (
    <>
      <Banner bg={noida}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <BlogSection cityName={"noida"} />
    </>
  );
};

export default Noida;
