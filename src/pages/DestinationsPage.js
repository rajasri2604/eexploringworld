import React from 'react';

const destinations = [
  {
    name: 'Bali, Indonesia',
    image: '/images/indonesia.jpg',
    description: 'A tropical paradise with beaches, temples, and lush landscapes.',
    category: 'Beach',
    rating: 4.8,
  },
  {
    name: 'Rome, Italy',
    image: '/images/rome.jpg',
    description: 'A historic city with stunning architecture and ancient ruins.',
    category: 'Historical',
    rating: 4.7,
  },
  {
    name: 'Swiss Alps, Switzerland',
    image: '/images/switzerland.jpg',
    description: 'Snowy mountains perfect for skiing and nature lovers.',
    category: 'Mountain',
    rating: 4.9,
  },
  {
    name: 'Tokyo, Japan',
    image: '/images/tokyo.jpg',
    description: 'A bustling city mixing tradition and technology.',
    category: 'City',
    rating: 4.6,
  },
];

const DestinationsPage = () => {
  return (
    <div className="pt-6 px-6">
      {/* Hero Section */}
      <section className="mb-10 bg-gradient-to-r from-blue-500 to-blue-400 text-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-2">Explore Our Top Destinations</h1>
        <p className="text-lg">Discover unique places around the world tailored for your next adventure.</p>
      </section>

      {/* Destination Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
            >
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{place.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-semibold"> {place.rating}</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offers Section */}
      <section className="mt-12 bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded">
        <h2 className="text-2xl font-semibold mb-2 text-yellow-800"> Special Offers</h2>
        <ul className="list-disc pl-6 text-yellow-900 space-y-1">
          <li>20% off for Bali trips booked this month</li>
          <li>Free guided tour included for Rome package</li>
          <li>Winter discounts available for the Swiss Alps</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to Pack Your Bags?</h2>
        <p className="mb-4 text-gray-600">Explore. Discover. Travel.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition text-lg">
          Book Your Trip Now
        </button>
      </section>
    </div>
  );
};

export default DestinationsPage;
