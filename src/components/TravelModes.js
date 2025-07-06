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
    <div className="mt-12 px-4 sm:px-6 overflow-visible">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Travel Modes to Reach Destinations!
      </h2>

      <div className="relative mx-auto w-full max-w-6xl">
        <Carousel
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          infiniteLoop
          autoPlay={false}
          swipeable
          emulateTouch
          centerMode={false} // ❌ disable fixed slide centering
        >
          {travelModes.map((mode, index) => (
            <div key={index} className="flex justify-center px-4">
              <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] bg-white p-3 sm:p-4 rounded-lg shadow-md flex flex-col items-center justify-center transition transform hover:scale-105">
                <img
                  src={mode.image}
                  alt={mode.name}
                  className="w-full h-auto max-h-64 object-cover rounded-md mb-3"
                />
                <div className="text-blue-700 font-semibold text-sm sm:text-base">
                  {mode.name}
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Next button (visible on sm and up) */}
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg items-center justify-center text-black hover:bg-blue-100 z-50"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default TravelModes;
