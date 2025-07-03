import React, { useState } from 'react';
import { FaBars, FaPlane, FaUser, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

const Nav = ({ toggleSidebar }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Track logged-in user
  const [showDropdown, setShowDropdown] = useState(false); // Toggle logout dropdown

  const navigate = useNavigate();

  const data = [
    { keyword: 'adventures', caption: 'Thrilling Adventure Tours', image: '/images/adventure.jpg', path: '/packages' },
    { keyword: 'kerala', caption: 'God’s Own Country – Kerala', image: '/images/kerala.jpg', path: '/destinations' },
    { keyword: 'ooty', caption: 'Cool Ooty Hills', image: '/images/ooty.jpg', path: '/destinations' },
    { keyword: 'switzerland', caption: 'Magical Switzerland', image: '/images/switzerland.jpg', path: '/destinations' },
    { keyword: 'packages', caption: 'Top Travel Packages', image: '/images/packages.jpg', path: '/packages' },
    { keyword: 'support', caption: 'Need Help? Contact Support', image: '/images/support.jpg', path: '/footer' },
    { keyword: 'home', caption: 'Back to Home', image: '/images/home.jpg', path: '/home' },
    { keyword: 'about', caption: 'Learn About Us', image: '/images/about.jpg', path: '/#about' },
    { keyword: 'contact', caption: 'Get in Touch', image: '/images/contact.jpg', path: '/#contact' },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === '') {
      setFilteredResults([]);
      return;
    }

    const filtered = data.filter((item) => item.keyword.includes(value));
    setFilteredResults(filtered);
  };

  const handleResultClick = (path) => {
    setSearchTerm('');
    setFilteredResults([]);
    setIsMenuOpen(false);
    if (path.startsWith('/#')) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData); // { name: 'Alice' }
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md relative z-50">
        {/* Left section */}
        <div className="flex items-center space-x-3">
          <FaBars className="text-2xl cursor-pointer" onClick={() => { toggleSidebar?.(); setIsMenuOpen((prev) => !prev); }} />
          <FaPlane className="text-3xl" />
          <h1 className="text-xl font-bold">Journeo</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 relative">
          <li className="relative">
            <div className="flex items-center bg-white rounded-md px-2 py-1">
              <FaSearch className="text-blue-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="outline-none text-black bg-transparent placeholder-gray-500 w-32 lg:w-48"
              />
            </div>
            {filteredResults.length > 0 && (
              <div className="absolute left-0 top-12 bg-white text-black shadow-md rounded-md w-80 max-h-80 overflow-y-auto z-50 p-2">
                {filteredResults.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 mb-2 p-2 hover:bg-blue-100 rounded cursor-pointer"
                    onClick={() => handleResultClick(item.path)}
                  >
                    <img src={item.image} alt={item.caption} className="w-14 h-14 object-cover rounded" />
                    <span className="text-sm font-medium">{item.caption}</span>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li className="hover:text-yellow-300 transition"><Link to="/home">Home</Link></li>
          <li className="hover:text-yellow-300 transition"><Link to="/destinations">Destinations</Link></li>
          <li className="hover:text-yellow-300 transition"><Link to="/packages">Packages</Link></li>
          <li className="hover:text-yellow-300 transition"><a href="#contact">Contact</a></li>
          <li className="hover:text-yellow-300 transition"><a href="#about">About</a></li>
        </ul>

        {/* Login or User Avatar with Dropdown */}
        <div className="relative flex items-center space-x-3">
          <FaUser />
          {user ? (
            <div className="relative">
              <div
                onClick={() => setShowDropdown((prev) => !prev)}
                className="bg-white text-blue-600 font-bold rounded-full w-9 h-9 flex items-center justify-center text-lg uppercase cursor-pointer"
              >
                {user.name[0]}
              </div>
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-32 z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-white text-blue-600 px-3 py-1 rounded-md"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-500 text-white px-4 py-3 space-y-3 z-40 shadow-md absolute w-full top-[64px] left-0">
          {/* Search */}
          <div className="flex items-center bg-white rounded-md px-2 py-1">
            <FaSearch className="text-blue-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="outline-none text-black bg-transparent placeholder-gray-500 w-full"
            />
          </div>

          {/* Search Results */}
          {filteredResults.length > 0 && (
            <div className="bg-white text-black rounded-md shadow-md p-2 max-h-64 overflow-y-auto">
              {filteredResults.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 mb-2 p-2 hover:bg-blue-100 rounded cursor-pointer"
                  onClick={() => handleResultClick(item.path)}
                >
                  <img src={item.image} alt={item.caption} className="w-12 h-12 object-cover rounded" />
                  <span className="text-sm font-medium">{item.caption}</span>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-col space-y-2 text-lg">
            <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>Destinations</Link>
            <Link to="/packages" onClick={() => setIsMenuOpen(false)}>Packages</Link>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        showModal={showLoginModal}
        closeModal={() => setShowLoginModal(false)}
        onLogin={handleLoginSuccess}
      />
    </>
  );
};

export default Nav;
