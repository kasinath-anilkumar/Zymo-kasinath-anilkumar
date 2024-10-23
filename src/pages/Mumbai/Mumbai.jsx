import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner1.jpg'
import p4 from '../../assets/p4.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import ExploreCars from "../../components/ExploreCars/ExploreCars"
import Banner from "../../components/Banner/Banner"



const Mumbai = () => {
  return (
    <>
     <ExploreCars/>
     <Banner/>
    </>
  );
};

export default Mumbai;
