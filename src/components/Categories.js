import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const destinations = [
  { name: 'Paris', image: '/images/paris.jpg' },
  { name: 'Tokyo', image: '/images/tokyo.jpg' },
  { name: 'Maldives', image: '/images/maldives.jpg' },
  { name: 'New York', image: '/images/beautiful-view-empire-states-skyscrapers-new-york-city.jpg' },
  { name: 'Japan', image: '/images/japan.jpg' },
  { name: 'France', image: '/images/france.jpg' },
  { name: 'London', image: '/images/london.jpg' },
  { name: 'Australia', image: '/images/australia.jpg' },
  { name: 'Dubai', image: '/images/dubai.jpg' },
  { name: 'Kerala', image: '/images/kerala.jpg' },
  { name: 'Ooty', image: '/images/ooty.jpg' },
  { name: 'Kodaikanal', image: '/images/kodaikannal.jpg' },
];

const Categories = () => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (name) => {
    if (likedItems.includes(name)) {
      setLikedItems(likedItems.filter((item) => item !== name));
    } else {
      setLikedItems([...likedItems, name]);
    }
  };

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 animate__animated animate__fadeInUp">
      {destinations.map((dest, i) => {
        const isLiked = likedItems.includes(dest.name);

        return (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 relative"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-40 object-cover"
            />

          
            <div
              onClick={() => toggleLike(dest.name)}
              className="absolute top-2 right-2 cursor-pointer group"
            >
              <div className="p-2 rounded-full transition duration-200 group-hover:bg-blue-100">
                {isLiked ? (
                  <FaHeart className="text-red-600" size={20} />
                ) : (
                  <FaRegHeart className="text-gray-500 group-hover:text-blue-500" size={20} />
                )}
              </div>
            </div>

            <div className="p-4 text-center font-semibold text-gray-800">
              {dest.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
