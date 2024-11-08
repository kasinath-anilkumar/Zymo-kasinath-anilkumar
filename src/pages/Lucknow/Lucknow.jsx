import React, { useState, useEffect } from 'react';
import lucknow from "../../assets/City-Logo/lucknow.png"
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";

const Lucknow = () => {
  return (
    <>
      <Banner bg={lucknow}/>
      <CompareAndChoice />
      <Benefits />
      <BlogSection cityName={"lucknow"} />
    </>
  )
}

export default Lucknow
