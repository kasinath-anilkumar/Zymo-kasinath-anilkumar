import React, { useState, useEffect } from 'react';
import meerut from "../../assets/City-Logo/meerut.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Content from "./Content"
const Meerut = () => {
  return (
    <>
      <Banner bg={meerut}/>
      <CompareAndChoice />
      <Benefits />
      <Content />
      <BlogSection cityName={"meerut"} />
    </>
  )
}

export default Meerut
