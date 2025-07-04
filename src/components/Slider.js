import React, { useEffect, useState } from 'react';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  '/images/golden-gate-bridge-body-water-near-rock-formations-sunset-san-francisco-california.jpg',
  '/images/neom-Kcna6XWDY7w-unsplash (1).jpg',
  '/images/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg',
  '/images/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space.jpg'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const username = 'Raja'; // You can dynamically fetch username if available

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => {
    setShowPopup(true);
  };

  const handleDestinationClick = () => {
    setShowPopup(false);
    navigate('/destination');
  };

  return (
    <div className="mt-1 relative animate__animated animate__fadeIn transition-all duration-1000">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-[400px] object-cover rounded-xl shadow-md transition duration-500 hover:scale-105"
      />
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white drop-shadow-lg z-10">
        <h2 className="text-4xl font-bold mb-2">Discover Beautiful Places</h2>
        <p className="text-lg mb-4">Plan your next adventure with GoExplore</p>
        <button 
          className="bg-blue-300 text-black px-4 py-2 rounded shadow-md hover:bg-blue-500 transition"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition`}
          ></div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md text-center animate__animated animate__fadeInDown">
            <h3 className="text-xl font-semibold mb-4">Hello....Welcome to our Journeo!!</h3>
            <p className="mb-4">To book adventures in Journeo, explore different places to visit!</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600 transition"
              onClick={handleDestinationClick}
            >
              Destination
            </button>
            <button
              className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
