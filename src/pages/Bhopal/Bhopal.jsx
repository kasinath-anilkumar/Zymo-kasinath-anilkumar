import React, { useState, useEffect } from 'react';
import bhopal from "../../assets/City-Logo/bhopal.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";

const Bhopal = () => {
  
  return (
    <>
      <Banner bg={bhopal}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection cityName={"bhopal"} />
    </>  );
};

export default Bhopal;
