import React, { useState, useEffect } from 'react';
import jaipur from "../../assets/City-Logo/jaipur.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"


const Jaipur = () => {
  return (
    <>
      <Banner bg={jaipur}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <BlogSection cityName={"jaipur"} />
    </>
  )
}

export default Jaipur
