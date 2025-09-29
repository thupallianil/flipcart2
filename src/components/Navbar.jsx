import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center gap-8 py-2 text-gray-700 font-medium">

        {/* Electronics */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-blue-600">Electronics</span>
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block z-10">
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Smartphones</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Laptops</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Headphones</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Smart Watches</Link></li>
          </ul>
        </li>

        {/* Fashion */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-blue-600">Fashion</span>
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block z-10">
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Men's Clothing</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Women's Clothing</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</Link></li>
          </ul>
        </li>

        {/* Home & Furniture */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-blue-600">Home</span>
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block z-10">
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Furniture</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Decor</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Kitchenware</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Lighting</Link></li>
          </ul>
        </li>

        {/* Appliances */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-blue-600">Appliances</span>
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block z-10">
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Refrigerators</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Washing Machines</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Microwaves</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Air Conditioners</Link></li>
          </ul>
        </li>

        {/* Beauty & Personal Care */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-blue-600">Beauty</span>
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block z-10">
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Makeup</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Skincare</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Haircare</Link></li>
            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Fragrances</Link></li>
          </ul>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
