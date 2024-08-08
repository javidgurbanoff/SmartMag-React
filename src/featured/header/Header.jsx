import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegMoon } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="flex items-center p-4 w-full max-w-screen-xl mx-auto">
        <GiHamburgerMenu
          className="w-7 h-7 text-black mr-4 cursor-pointer hover:text-blue-600"
          aria-label="Menu"
          onClick={toggleSidebar}
        />
        <img
          className="w-[197px] h-[39px] cursor-pointer"
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png"
          alt="Logo"
        />
        <ul className="flex flex-grow space-x-6 mx-8 font-bold pt-2">
          <li className="relative cursor-pointer pb-0">
            <span className="hover:border-b-2 hover:border-blue-500 pb-5">Home</span>
          </li>
          <li
            className="relative cursor-pointer pb-2"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span className="hover:border-b-2 hover:border-blue-500 pb-5">Features</span>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50 w-64">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">50+ Unique Demos</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Post Styles</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category Layouts</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Header Styles</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Homepage Blocks</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Featured Grids / Sliders</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Review Posts</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pages & Templates</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Gutenberg Styles</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shop / WooCommerce</li>
              </ul>
            )}
          </li>
          <li className="relative cursor-pointer pb-2">
            <span className="hover:border-b-2 hover:border-blue-500 pb-5">Technology</span>
          </li>
          <li className="relative cursor-pointer pb-2">
            <span className="hover:border-b-2 hover:border-[#9b51e0] pb-5">Gadgets</span>
          </li>
          <li className="relative cursor-pointer pb-2">
            <span className="hover:border-b-2 hover:border-[#61CE70] pb-5">Phones</span>
          </li>
          <li className="relative cursor-pointer pb-2">
            <span className="hover:border-b-2 hover:border-blue-500 pb-5">Buy Themes</span>
          </li>
        </ul>
        <button className="bg-[#3C3FDE] text-white py-2 px-4 rounded-md text-xs ml-4">
          SUBSCRIBE
        </button>
        <FaRegMoon className="w-5 h-5 text-gray-600 ml-4 cursor-pointer" aria-label="Dark Mode" />
        <IoSearch className="w-5 h-5 text-gray-600 ml-4 cursor-pointer" aria-label="Search" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } shadow-lg z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <IoClose className="w-6 h-6 cursor-pointer" onClick={toggleSidebar} aria-label="Close Sidebar" />
        </div>
        <ul className="mt-4">
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Features</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Technology</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Gadgets</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Phones</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Buy Themes</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
