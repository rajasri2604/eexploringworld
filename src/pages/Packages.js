import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { FaMapMarkerAlt, FaBell } from "react-icons/fa";

const samplePackages = [
  { id: 1, title: "Summer Vacation Trip", category: "Family", price: 24999, duration: "3 Nights, 4 Days", image: "/images/summertrip.jpg", location: "Maldives" },
  { id: 2, title: "Solo Trek to Ladakh", category: "Solo", price: 17999, duration: "5 Nights", image: "/images/ladakk.jpg", location: "Ladakh" },
  { id: 3, title: "Adventure in Rishikesh", category: "Adventure", price: 14999, duration: "3 Nights", image: "/images/rishikesh.jpg", location: "Rishikesh" },
  { id: 4, title: "Family Trip", category: "Family", price: 20999, duration: "2 Nights", image: "/images/familytrip.jpg", location: "Manali" },
  { id: 5, title: "Dubai International Deal", category: "International", price: 29999, duration: "4 Nights", image: "/images/dubai.jpg", location: "Dubai" },
  { id: 6, title: "Cool Trip", category: "Family", price: 13999, duration: "5 Nights", image: "/images/ootytrip.jpg", location: "Ooty" }
];

const categories = ["All", "Family", "Solo", "Adventure", "International"];

export default function Packages() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newPackage, setNewPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setNewPackage({
        id: 7,
        title: "Mystic Kerala Getaway",
        category: "Family",
        price: 15999,
        duration: "4 Nights",
        image: "/images/kerala.jpg",
        location: "Kerala"
      });
    }, 5000);
  }, []);

  const filteredPackages = selectedCategory === "All"
    ? samplePackages
    : samplePackages.filter(pkg => pkg.category === selectedCategory);

  const handleBookClick = pkg => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Explore Travel Packages</h1>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg mb-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Flash Deal! Ends in:</h2>
        <Countdown date={Date.now() + 1000 * 60 * 60 * 2} />
      </div>

      {newPackage && (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4 flex items-center gap-3">
          <FaBell className="text-green-700" />
          <span>New Package Added: <strong>{newPackage.title}</strong></span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="border rounded shadow hover:shadow-lg relative">
            <img src={pkg.image} alt={pkg.title} className="rounded-t w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{pkg.duration}</p>
              <p className="text-green-600 font-bold">₹{pkg.price}</p>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <FaMapMarkerAlt className="mr-1" /> {pkg.location}
              </div>
            </div>
            <button
              onClick={() => handleBookClick(pkg)}
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">Book: {selectedPackage.title}</h2>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert("Booking confirmed for " + selectedPackage.title); setShowModal(false); }}>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input type="text" className="w-full border rounded p-2" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full border rounded p-2" placeholder="example@mail.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input type="tel" className="w-full border rounded p-2" placeholder="Phone number" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Destination</label>
                <input type="text" className="w-full border rounded p-2" value={selectedPackage.location} readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium">Payment Method</label>
                <select className="w-full border rounded p-2">
                  <option>UPI</option>
                  <option>Credit Card</option>
                  <option>Net Banking</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Explore on Map</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.001660799571!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d2bbdd94a5%3A0x1a8b0eb1ac4c5db3!2sIndia!5e0!3m2!1sen!2sin!4v1620000000000"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded shadow"
        ></iframe>
      </div>
    </div>
  );
}
