import React, { useState, useEffect } from "react";
import bangalore from "../../assets/City-Logo/Bangalore.png";
import CompareAndChoice from "../../components/city components/CompareAndChoice/CompareAndChoice";
import Benefits from "../../components/city components/Benefits/Benefits";
import BlogSection from "../../components/city components/BlogSection/BlogSection";
import Banner from "../../components/city components/Banner/Banner";
import Content from "./Content";

const Bangalore = () => {
  return (
    <>
      <Banner bg={bangalore} />
      <CompareAndChoice />
      <Benefits />
      <Content />
      <BlogSection cityName={"bangalore"} />
    </>
  );
};

export default Bangalore;
