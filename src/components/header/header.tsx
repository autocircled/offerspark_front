'use client';
import { useState } from 'react';
import { FiSearch, FiMenu, FiX, FiUser, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Chicago');

  const navItems = [
    "Father's Day",
    "Beauty & Spas",
    "Things To Do",
    "Auto & Home",
    "Food & Drink",
    "Gifts",
    "Local",
    "Travel",
    "Goods",
    "Coupons"
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <h1 className="text-2xl font-bold text-red-600">OfferSpark</h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for deals"
                className="w-full py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div className="h-full w-px bg-gray-300"></div>
                <select
                  className="py-2 px-3 bg-white border border-gray-300 rounded-r-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Chicago</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>San Francisco</option>
                </select>
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center text-gray-700 hover:text-red-600">
              <FiUser className="mr-1" /> Sign In
            </button>
            <button className="flex items-center text-gray-700 hover:text-red-600">
              <FiShoppingCart />
              <span className="ml-1 hidden md:inline">Cart</span>
            </button>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for deals"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <select
            className="mt-2 w-full py-2 px-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Chicago</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>San Francisco</option>
          </select>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <nav className="hidden md:block bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 overflow-x-auto py-3 hide-scrollbar">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="whitespace-nowrap text-sm font-medium text-gray-700 hover:text-red-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-red-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-red-600"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;