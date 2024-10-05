import React from "react";
import Slider from "react-slick";
import M1 from "/M1.webp";
import M2 from "/M2.webp";
import M3 from "/M3.webp";
import F1 from "/F1.webp";
import F2 from "/F2.webp";
import F3 from "/F3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    name: "Vinayak More",
    image: M1,
    stars: 5,
    comment:
      "Amazing app and best platform for rental car requirements.. thank you",
  },
  {
    name: "Anusha Dubey",
    image: F1,
    stars: 5,
    comment:
      "Great app to compare best deals. It makes my renting experience so hassle free and the best part is I got rewards too. Easy to use and one stop destination for my renting needs.",
  },
  {
    name: "Shrivardhan",
    image: M2,
    stars: 5,
    comment:
      "I just booked my car through this app and found it really useful. This app allows you to plan small distance trips with reasonable rates. Also the support is very authentic and supportive.",
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 px-5  mx-auto">
      <h1 className="text-center text-4xl font-bold mb-4">
        Our Customers Love Us
      </h1>
      <h2 className="text-center text-xl mb-8">
        We love hearing from happy customers
      </h2>
      <Slider {...settings}>
        {comments.map((item) => (
          <div className="px-10" key={item.name}>
            <div className="p-6 flex flex-col text-left bg-gradient-to-b from-[#6e00ff] to-[#a84dcc] rounded-xl shadow-lg h-80">
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <div className="flex text-yellow-400">
                    {"⭐".repeat(item.stars)}
                  </div>
                </div>
              </div>
              <p className="text-white">
                {item.comment}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
