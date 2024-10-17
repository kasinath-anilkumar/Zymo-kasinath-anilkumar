import React from 'react';
import './BrandCarousel.css';

const brand1 = [
    { id: 1, name: "Audi", src: "https://www.1min30.com/logo/wp-content/uploads/2017/08/Logo-Audi.png" },
    { id: 2, name: "Bmw", src: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png" },
    { id: 3, name: "Mercedes-Benz", src: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png" },
    { id: 4, name: "Maruti", src: "https://www.pngmart.com/files/17/Maruti-Suzuki-Logo-PNG-Photo.png" },
    { id: 5, name: "Toyota", src: "https://logos-world.net/wp-content/uploads/2020/04/Toyota-Symbol.png" },
    { id: 6, name: "Kia", src: "https://logos-world.net/wp-content/uploads/2021/03/Kia-Logo.png" },
    { id: 7, name: "Mahindra", src: "https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo.png" },
    { id: 8, name: "Morris Garage", src: "https://1000logos.net/wp-content/uploads/2021/10/MG-Logo-2010.png" },
    { id: 9, name: "Tata", src: "https://logolook.net/wp-content/uploads/2023/07/Tata-Emblem.png" },
    { id: 10, name: "Honda", src: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Emblem.png" },
];
// const brand2 = [
//     { id: 1, name: "Kia", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW_logo.svg" },
//     { id: 2, name: "Mahindra", src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Honda_logo.svg" },
//     { id: 3, name: "Morris Garage", src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg" },
//     { id: 4, name: "Tata", src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Mercedes-Benz_logo.svg" },
//     { id: 5, name: "Honda", src: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Audi_logo.svg" },
// ];

const BrandCarousel = () => {
  return (
    <div className='main-section text-center' >
        <h1 className='text-4xl font-bold py-9'>Brands Available</h1>
      <div className="brand-carousel-container d-grid" >
          <div className="brand-carousel">
            {brand1.map((brand) => (
              <div key={brand.id} className="brand-card-cars d-grid text-center">
                <img src={brand.src} alt={`Brand ${brand.id}`} className="brand-image" />
                <p className='text-xl font-semibold'>{brand.name}</p>
              </div>
            ))}
          </div>
          {/* <div className="brand-carousel mt-3">
            {brand2.map((brand) => (
              <div key={brand.id} className="brand-card  d-grid text-center">
                <img src={brand.src} alt={`Brand ${brand.id}`} className="brand-image" />
                <p>{brand.name}</p>
              </div>
            ))}
          </div> */}
      </div>
    </div>
  );
};

export default BrandCarousel;
