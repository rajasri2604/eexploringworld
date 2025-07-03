import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-400 text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* About Journeo */}
        <div id="about" className="space-y-3">
          <h3 className="text-lg font-bold">About Journeo</h3>
          <p className="text-justify leading-relaxed">
            Journeo is your ultimate travel companion. We provide curated packages for solo explorers,
            family vacationers, and adventure seekers. Travel smart, travel safe, travel with Journeo.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/packages" className="hover:underline">Packages</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        {/* Contact Info */}
<div id="contact" className="space-y-3 scroll-mt-28">

          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="flex items-center gap-2"><FaPhone /> 90845 39815</p>
          <p className="flex items-center gap-2"><FaEnvelope /> journeo@gmail.com</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> Chennai, Tamil Nadu, India</p>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-gray-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-gray-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-gray-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-900 text-center py-4 mt-8 text-xs sm:text-sm">
        © 2025 Journeo. All rights reserved. | Designed for Travel Lovers
      </div>
    </footer>
  );
};

export default Footer;
