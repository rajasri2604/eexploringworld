import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen = true, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    toggleSidebar(); // close sidebar after navigating
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-blue-300 to-blue-200 shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b text-xl font-bold">
        <span>Explore Menu</span>
        <button onClick={toggleSidebar} className="text-xl">
          <FaTimes />
        </button>
      </div>
      <ul className="p-4 space-y-4 text-lg">
        <li
          onClick={() => handleNavigation('/destinations')}
          className="hover:bg-blue-100 p-2 rounded cursor-pointer"
        >
          Top Destinations
        </li>
        <li
          onClick={() => handleNavigation('/packages')}
          className="hover:bg-blue-100 p-2 rounded cursor-pointer"
        >
          Popular Packages
        </li>
        <li
          onClick={() => handleNavigation('/packages')}
          className="hover:bg-blue-100 p-2 rounded cursor-pointer"
        >
          Adventure Tours
        </li>
        <li
          onClick={() => handleNavigation('/footer')}
          className="hover:bg-blue-100 p-2 rounded cursor-pointer"
        >
          Support
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
