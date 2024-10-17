import React from 'react';
import './ServiceProvider.css';

const brand1 = [
    {
        id: 1,
        src: "https://clipground.com/images/zoomcar-logo-png-5.png",
      },
      {
        id: 2,
        src: "https://www.mychoize.com/_next/static/media/MyChoize-logo.ef72a172.svg",
      },
      {
        id: 3,
        src: "https://1000logos.net/wp-content/uploads/2020/10/Avis-Logo.png",
      },
      {
        id: 4,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYPEqTEYL_IKcNmjeRJi-KLkEZwzNM3ceSw&s",
      },
      {
        id: 5,
        src: "https://wheelup.in/assets/wheelUpLogo-296c92d2.png",
      },
      {
        id: 6,
        src: "https://tse1.mm.bing.net/th?id=OIP.QC6Jm35zUWtc3Xcsww1tUgHaHa&pid=Api&P=0&h=220",
      },
      {
        id: 7,
        src: "https://firebasestorage.googleapis.com/v0/b/letzrent-5f5a3.appspot.com/o/LetzRent%20App%20Images%2FBrand%20Logo%2FCarronrent.png?alt=media&token=045d4afd-a065-4554-b1bc-85130149b07e",
      },
      {
        id: 8,
        src: "https://firebasestorage.googleapis.com/v0/b/letzrent-5f5a3.appspot.com/o/LetzRent%20App%20Images%2FBrand%20Logo%2FWhatsApp%20Image%202022-08-04%20at%2010.45.13%20PM.jpeg?alt=media&token=e3c00d49-eb95-40db-b795-f42688ceef7c",
      },
];

const ServiceProvider = () => {
  return (
    <div className='main-section text-center' >
        <h1 className='text-4xl font-bold py-9'>Compare and Choose from :</h1>
      <div className="service-carousel-container d-grid" >
          <div className="service-carousel">
            {brand1.map((brand) => (
              <div key={brand.id} className="brand-card">
                <img src={brand.src} alt={`Brand ${brand.id}`} className="brand-image" />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
