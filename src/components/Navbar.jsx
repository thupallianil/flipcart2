import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-200">
      <ul className="flex justify-center space-x-6 text-black p-2">
        <li className="relative group">
          <a href="#" className="hover:text-yellow-400">Electronics</a>
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block z-10">
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Smartphones</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Laptops</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Headphones</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Smart Watches</Link></li>
          </ul>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-yellow-400">Fashion</a>
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block z-10">
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Men's Clothing</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Women's Clothing</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</Link></li>
          </ul>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block z-10">
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Furniture</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Decor</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Kitchenware</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Lighting</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
