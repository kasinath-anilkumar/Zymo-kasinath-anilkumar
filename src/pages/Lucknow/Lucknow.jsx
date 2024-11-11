import React, { useState, useEffect } from 'react';
import lucknow from "../../assets/City-Logo/lucknow.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Content from "./Content";
import Banner1 from "../../components/Banner/Banner1";

const Lucknow = () => {
  return (
    <>
      <Banner bg={lucknow}/>
      <CompareAndChoice />
      <Benefits />
      <Banner1 />
      <Content />
      <BlogSection cityName={"lucknow"} />
    </>
  )
}

export default Lucknow
