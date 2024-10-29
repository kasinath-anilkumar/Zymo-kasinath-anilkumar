import React, { useState, useEffect } from 'react';
import bangalore from "../../assets/HeroSection/bangalore-image.jpg"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";

const Bangalore = () => {
  
  return (
    <>
      <Banner bg={bangalore}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection cityName={"bangalore"} />
    </>  );
};

export default Bangalore;
