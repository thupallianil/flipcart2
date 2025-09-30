import React from "react";
import { Link } from "react-router-dom";

// Categories and subcategories
const categories = {
  Electronics: ["Smartphones", "Laptops", "Headphones", "Smart Watches"],
  Fashion: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"],
  Home: ["Furniture", "Decor", "Kitchenware", "Lighting"],
  Appliances: ["Refrigerators", "Washing Machines", "Microwaves", "Air Conditioners"],
  Beauty: ["Makeup", "Skincare", "Haircare", "Fragrances"]
};

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <ul className="flex justify-center gap-8 py-3 text-gray-700 font-medium">
        {Object.keys(categories).map((cat) => (
          <li key={cat} className="relative group">
            <span className="cursor-pointer hover:text-blue-600">{cat}</span>

            {/* Dropdown for subcategories */}
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block z-10">
              {categories[cat].map((sub) => (
                <li key={sub}>
                  <Link
                    // Replace spaces with %20 for URL safety
                    to={`/products/${encodeURIComponent(cat)}/${encodeURIComponent(sub)}`}
                    className="block px-4 py-2 hover:bg-gray-100"
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
