import React, { useState, useEffect } from 'react';
import goa from "../../assets/City-Logo/goa.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"

const Goa = () => {
  return (
    <>
      <Banner bg={goa}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <BlogSection cityName={"goa"} />
    </>
  );
};

export default Goa;
