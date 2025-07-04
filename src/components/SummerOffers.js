import React, { useEffect, useState } from 'react';
import 'animate.css';

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
    src: '/images/canada.jpg',
    caption: 'Canada – Summer Special',
  },
];

const SummerOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate__fadeIn');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate__fadeOut'); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % summerImages.length);
        setAnimationClass('animate__fadeIn'); // Fade in next
      }, 500); // fade out before showing next
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = summerImages[currentIndex];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Summer Tourist Offers</h2>
      <div className="flex flex-col items-center">
        <div className={`animate__animated ${animationClass}`}>
          <img
            src={currentImage.src}
            alt={`Summer Offer ${currentIndex + 1}`}
            className="rounded-xl shadow-lg h-[400px] w-[700px] object-cover transition duration-700 ease-in-out"
          />
          <p className="text-center mt-2 font-semibold">{currentImage.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default SummerOffers;
