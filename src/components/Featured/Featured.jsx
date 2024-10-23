import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Images
import WNN from "/WNN.png";
import INDNN from "/INDNN.png";
import BNN from "/BNN.png";
import BINN from "/BINN.png";
import ANI from "/ANI.png";
import UPN from "/UPN.png";
import TP from "/TP.png";
import MD from "/MD.png";
import LT from "/LT.png";
import ZEE from "/ZEE5.png";
import FNT from "/FNT.png";
import BS from "/BS.png";

const Car = [
  {
    id: 1,
    name: "World news network",
    image: WNN,
    url: "https://www.worldnewsnetwork.net/news/zymo-the-leading-self-drive-car-rental-service-in-india20230413132853/",
  },
  {
    id: 2,
    name: "Business Standard",
    image: BS,
    url: "https://www.business-standard.com/content/press-releases-ani/zymo-the-leading-self-drive-car-rental-service-in-india-123041300540_1.html",
  },
  {
    id: 3,
    name: "The Print",
    image: TP,
    url: "https://theprint.in/ani-press-releases/zymo-the-leading-self-drive-car-rental-service-in-india/1515953/",
  },
  {
    id: 4,
    name: "Lokmat Times",
    image: LT,
    url: "https://www.lokmattimes.com/business/zymo-the-leading-self-drive-car-rental-service-in-india/",
  },
  {
    id: 5,
    name: "British News Network",
    image: BNN,
    url: "https://www.britishnewsnetwork.com/news/zymo-the-leading-self-drive-car-rental-service-in-india20230413132853/",
  },
  {
    id: 6,
    name: "Big News Network",
    image: BINN,
    url: "https://www.bignewsnetwork.com/news/273738851/zymo-the-leading-self-drive-car-rental-service-in-india",
  },
  {
    id: 7,
    name: "UP42 News",
    image: UPN,
    url: "https://up42news.com/news/27691",
  },
  {
    id: 8,
    name: "France Network Times",
    image: FNT,
    url: "https://www.francenetworktimes.com/news/zymo-the-leading-self-drive-car-rental-service-in-india20230413132853/",
  },
  {
    id: 9,
    name: "Indian News Network",
    image: INDNN,
    url: "https://www.indiannewsnetwork.net/news/zymo-the-leading-self-drive-car-rental-service-in-india20230413132853/",
  },
  {
    id: 10,
    name: "ZEE5",
    image: ZEE,
    url: "https://www.zee5.com/articles/zymo-the-leading-self-drive-car-rental-service-in-india",
  },
  {
    id: 11,
    name: "ANI News",
    image: ANI,
    url: "https://aninews.in/news/business/business/zymo-the-leading-self-drive-car-rental-service-in-india20230413132856/",
  },
  { id: 12, name: "MD", image: MD, url: "/" },
];

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 images at a time
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="relative py-10 px-14 container">
      <h1 className="text-center text-4xl font-bold mb-8">Featured In</h1>
      <Slider {...settings}>
        {Car.map((car) => (
          <FeaturedSlide key={car.id} car={car} />
        ))}
      </Slider>
    </div>
  );
};

// Slide Component with Scale Up/Down on Scroll In and Out
const FeaturedSlide = ({ car }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the image is visible
  });

  return (
    <div ref={ref} className="p-2">
      <a href={car.url} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="w-60 h-24"
          initial={{ scale: 0 }} // Start from scale 0
          animate={inView ? { scale: 1 } : { scale: 0 }} // Scale up/down based on inView
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-contain rounded-lg mx-auto"
          />
        </motion.div>
      </a>
    </div>
  );
};

export default Featured;
