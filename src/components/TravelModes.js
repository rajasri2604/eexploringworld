import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const travelModes = [
  { name: 'Airplane', image: '/images/airplane.jpg' },
  { name: 'Train', image: '/images/train.jpg' },
  { name: 'Ship', image: '/images/boat.jpg' },
  { name: 'Bus', image: '/images/bus.jpg' },
];

const TravelModes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % travelModes.length;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="mt-12 px-6 overflow-visible">
      <h2 className="text-2xl font-bold text-center mb-6">Travel Modes to Reach These Places</h2>

      <div className="relative max-w-6xl mx-auto overflow-visible">
        <Carousel
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          showThumbs={false}
          showStatus={false}
          showIndicators={true} // 👈 Show dots
          infiniteLoop
          centerMode
          centerSlidePercentage={33}
          autoPlay={false}
          renderArrowPrev={() => null}
          renderArrowNext={() => null}
        >
          {travelModes.map((mode, index) => (
            <div key={index} className="p-4"> {/* 👈 Adds spacing between slides */}
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center transition transform hover:scale-105">
                <img
                  src={mode.image}
                  alt={mode.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <div className="text-blue-700 font-semibold">{mode.name}</div>
              </div>
            </div>
          ))}
        </Carousel>

        <button
          onClick={handleNext}
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-black hover:bg-blue-100 z-50"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default TravelModes;
