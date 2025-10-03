// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Categories and subcategories
const categories = {
  Electronics: ["Smartphones", "Laptops", "Headphones", "Smart Watches"],
  Fashion: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"],
  House: ["Furniture", "Decor", "Kitchenware", "Lighting"],
  Appliances: ["Refrigerators", "Washing Machines", "Microwaves", "Air Conditioners"],
  Beauty: ["Makeup", "Skincare", "Haircare", "Fragrances"],
};

const Navbar = () => {
  const [openCat, setOpenCat] = useState(null);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <ul className="flex justify-center gap-8 py-3 text-gray-700 font-medium">
        {Object.keys(categories).map((cat) => (
          <li key={cat} className="relative">
            {/* Category Name */}
            <span
              onClick={() => setOpenCat(openCat === cat ? null : cat)}
              className="cursor-pointer hover:text-blue-600"
            >
              {cat}
            </span>

            {/* Dropdown */}
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded z-50 transition-all duration-200 ${
                openCat === cat ? "block" : "hidden"
              }`}
            >
              {categories[cat].map((sub) => (
                <li key={sub}>
                  <Link
                    to={`/products/${encodeURIComponent(cat)}/${encodeURIComponent(sub)}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenCat(null)} // Close dropdown after click
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
