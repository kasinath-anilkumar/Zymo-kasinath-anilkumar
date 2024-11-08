import React, { useState, useEffect } from 'react';
import surat from "../../assets/City-Logo/surat.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"


const Surat = () => {
  
  return (
    <>
      <Banner bg={surat}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <BlogSection cityName={"surat"} />
    </>
  );
};

export default Surat;
