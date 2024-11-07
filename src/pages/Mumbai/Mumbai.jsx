import React, { useState, useEffect } from 'react';
import mumbai from "../../assets/City-Logo/mumbai.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"
import Content from "./Content";

const Mumbai = () => {
  return (
    <>
      <Banner bg={mumbai}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <Content />
      <BlogSection cityName={"mumbai"} />
    </>
  );
};

export default Mumbai;
