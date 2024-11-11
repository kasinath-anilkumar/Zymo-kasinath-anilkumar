import React, { useState, useEffect } from 'react';
import kolkata from "../../assets/City-Logo/kolkata.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Content from "./Content"

const Kolkata = () => {
  return (
    <>
      <Banner bg={kolkata}/>
      <CompareAndChoice />
      <Benefits />
      <Content />
      <BlogSection cityName={"kolkata"} />
    </>
  )
}

export default Kolkata
