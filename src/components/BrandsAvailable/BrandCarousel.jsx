import React from "react";

const brand1 = [
  {
    id: 1,
    name: "Audi",
    src: "https://www.1min30.com/logo/wp-content/uploads/2017/08/Logo-Audi.png",
  },
  {
    id: 2,
    name: "Bmw",
    src: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
  },
  {
    id: 3,
    name: "Mercedes-Benz",
    src: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
  },
  {
    id: 4,
    name: "Maruti",
    src: "https://www.pngmart.com/files/17/Maruti-Suzuki-Logo-PNG-Photo.png",
  },
  {
    id: 5,
    name: "Toyota",
    src: "https://logos-world.net/wp-content/uploads/2020/04/Toyota-Symbol.png",
  },
  {
    id: 6,
    name: "Kia",
    src: "https://logos-world.net/wp-content/uploads/2021/03/Kia-Logo.png",
  },
  {
    id: 7,
    name: "Mahindra",
    src: "https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo.png",
  },
  {
    id: 8,
    name: "Morris Garage",
    src: "https://1000logos.net/wp-content/uploads/2021/10/MG-Logo-2010.png",
  },
  {
    id: 9,
    name: "Tata",
    src: "https://logolook.net/wp-content/uploads/2023/07/Tata-Emblem.png",
  },
  {
    id: 10,
    name: "Honda",
    src: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Emblem.png",
  },
];

const BrandCarousel = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold py-9">Brands Available</h1>
      <div className="overflow-x-auto flex flex-col gap-8 bg-gray-100 py-8 px-6">
        <div className="flex gap-8 whitespace-nowrap">
          {brand1.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center justify-center min-w-[180px] max-w-[200px] h-[190px] p-4 bg-white rounded-lg shadow-md"
            >
              <img
                src={brand.src}
                alt={`Brand ${brand.id}`}
                className="max-w-full max-h-[100px] object-contain mb-4 rounded"
              />
              <p className="text-xl font-semibold">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
