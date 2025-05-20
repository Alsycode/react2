import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">UserDatabase</h2>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Connecting people through seamless user management and exploration.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/users" className="hover:text-blue-400 transition-colors">
                  Users
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300">Email: support@userdatabase.com</p>
            <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} UserDatabase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;