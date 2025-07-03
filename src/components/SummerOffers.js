import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SummerOffers = () => {
  const summerImages = [
    {
      src: '/images/switzerland.jpg',
      caption: '20% Off – Switzerland Paradise',
    },
    {
      src: '/images/munnar.jpg',
      caption: 'Save Big in Kerala this Summer!',
    },
    {
      src: '/images/ootyhills.jpg',
      caption: 'Limited Deal – Explore Ooty Hills',
    },
    {
      src: 'images/canada.jpg',
      caption: 'Canada – Summer Special',
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Summer Tourist Offers</h2>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={4000}
        transitionTime={1000}
      >
        {summerImages.map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt={`Summer Offer ${index + 1}`}
              className="rounded-xl shadow-md h-[400px] object-cover w-full"
            />
            <p className="legend h-50 w-50">{img.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SummerOffers;
