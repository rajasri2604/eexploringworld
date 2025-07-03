import React, { useEffect, useState } from 'react';
import 'animate.css';

const destinations = [
  { name: 'Paris', image: '/images/paris.jpg' },
  { name: 'Tokyo', image: '/images/tokyo.jpg' },
  { name: 'Switzerland', image: '/images/switzerland.jpg' },
  { name: 'Canada', image: '/images/canada.jpg' },
  { name: 'Kerala', image: '/images/munnar.jpg' },
  { name: 'Ooty Hills', image: '/images/ooty.jpg' },
];

const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/indonesia.jpg',
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    payment: '',
    date: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${formData.name} to ${selectedDestination}`);
    setShowBooking(false);
    setFormData({ name: '', email: '', payment: '', date: '' });
  };

  return (
    <div className="p-0">
      {/* Hero Section */}
      <section
        className="mt-2 h-[350px] bg-cover bg-center flex items-center justify-center transition-all duration-1000"
        style={{
          backgroundImage: `url('${heroImages[currentImage]}')`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Welcome to Journeo</h1>
          <p className="text-lg">Your journey begins here!</p>
        </div>
      </section>

      {/* Destinations */}
      <section className="my-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <button
                  onClick={() => {
                    setSelectedDestination(place.name);
                    setShowBooking(true);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Us</h2>
        <div className="flex justify-center">
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
            <li>100+ Global Destinations</li>
            <li>Secure Booking</li>
            <li>Affordable Packages</li>
            <li>Best Offers</li>
          </ul>
        </div>
      </section>

      {/* Inline Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4 text-center">Book Your Trip</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                name="destination"
                value={selectedDestination}
                readOnly
                className="w-full border border-gray-300 p-2 rounded bg-gray-100"
              />
              <input
                type="text"
                name="payment"
                placeholder="Payment Method (UPI/Card)"
                value={formData.payment}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Confirm Booking
              </button>
            </form>

            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
