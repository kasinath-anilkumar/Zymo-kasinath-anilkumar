import React, { useState, useEffect } from 'react';
import hyderabad from "../../assets/City-Logo/hyderabad.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Banner1 from "../../components/Banner/Banner1"
import Content from "./Content"


const Hyderabad = () => {
  return (
    <>
      <Banner bg={hyderabad}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <Content />
      <BlogSection cityName={"hyderabad"} />
    </>
  )
}

export default Hyderabad


