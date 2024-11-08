import React, { useState, useEffect } from 'react';
import mangalore from "../../assets/City-Logo/mangalore.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";

const Mangalore = () => {
  return (
    <>
      <Banner bg={mangalore}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection cityName={"mangalore"} />
    </>
  )
}

export default Mangalore
