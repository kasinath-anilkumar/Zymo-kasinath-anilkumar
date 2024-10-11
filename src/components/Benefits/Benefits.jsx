import React from "react";
import Slider from "react-slick";
import B1 from "/b1.jpg";
import B2 from "/b2.jpg";
import B3 from "/b3.jpg";
import B4 from "/b4.jpg";

const All = [
  {
    img: B1,
    title: "Great Prices",
    desc: "Get Best Prices After Comparing All The Options",
  },
  {
    img: B2,
    title: "Cost Effective",
    desc: "Limited or Unlimited Kilometers Package Available As Per Requirement",
  },
  {
    img: B3,
    title: "Convenience",
    desc: "Self Pick-Up Or Home Delivered",
  },
  {
    img: B4,
    title: "More Benefits",
    desc: "More advantages to make your experience better",
  },
];

const Benefits = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500, // For smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col mx-auto py-20 px-5 max-w-6xl">
      <h1 className="text-center text-4xl font-bold mb-8">Zymo Benefits</h1>
      <Slider {...settings} className="w-full py-4">
        {All.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center justify-center p-4 group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover mb-4 rounded-lg transition-transform duration-300 group-hover:scale-105 mx-auto"
              style={{ maxWidth: "320px", maxHeight: "200px" }} // Limits max size
            />
            <div className="">
              <h1 className="text-2xl font-semibold text-purple-700">
                {item.title}
              </h1>
            </div>
            <p className="absolute inset-0 flex items-center  justify-center text-lg text-white bg-gray-700 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Benefits;
