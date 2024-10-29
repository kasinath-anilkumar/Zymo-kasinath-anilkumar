import React, { useState, useEffect } from 'react';
import bangalore from "../../assets/HeroSection/bangalore-image.jpg"
import CompareAndChoice from "../../components/city components/Delhi-components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Delhi-components/Benefits/Benefits";
import BlogSection from "../../components/city components/Delhi-components/BlogSection/BlogSection";
import Banner from "../../components/city components/Delhi-components/Banner/Banner";

const Bangalore = () => {
  
  return (
    <>
      <Banner bg={bangalore}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection />
    </>
  );
};

export default Bangalore;
