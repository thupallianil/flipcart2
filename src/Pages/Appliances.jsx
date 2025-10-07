// src/Pages/Appliances.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { addToCart, getCartCount } from "../utils/cart";

// ✅ Named export for appliance products data
export const appliancesData = {
  Refrigerators: [
    { id: 1, name: "Double Door Fridge", price: 35000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Single Door Fridge", price: 22000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Mini Fridge", price: 12000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smart Fridge", price: 45000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "French Door Fridge", price: 50000, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Side-by-Side Fridge", price: 48000, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Top Freezer Fridge", price: 25000, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Bottom Freezer Fridge", price: 27000, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Compact Fridge", price: 15000, image: "https://via.placeholder.com/150" },
  ],
  "Washing Machines": [
    { id: 10, name: "Front Load Washer", price: 25000, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Top Load Washer", price: 20000, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Semi-Automatic Washer", price: 15000, image: "https://via.placeholder.com/150" },
    { id: 13, name: "Fully Automatic Washer", price: 28000, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Smart Washer", price: 32000, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Compact Washer", price: 18000, image: "https://via.placeholder.com/150" },
    { id: 16, name: "Washer Dryer Combo", price: 40000, image: "https://via.placeholder.com/150" },
    { id: 17, name: "Mini Washer", price: 12000, image: "https://via.placeholder.com/150" },
    { id: 18, name: "Portable Washer", price: 14000, image: "https://via.placeholder.com/150" },
  ],
  Microwaves: [
    { id: 19, name: "Solo Microwave", price: 8000, image: "https://via.placeholder.com/150" },
    { id: 20, name: "Grill Microwave", price: 12000, image: "https://via.placeholder.com/150" },
    { id: 21, name: "Convection Microwave", price: 15000, image: "https://via.placeholder.com/150" },
    { id: 22, name: "Solo Compact Microwave", price: 7000, image: "https://via.placeholder.com/150" },
    { id: 23, name: "Smart Microwave", price: 18000, image: "https://via.placeholder.com/150" },
    { id: 24, name: "Microwave with Grill", price: 13000, image: "https://via.placeholder.com/150" },
    { id: 25, name: "Digital Microwave", price: 14000, image: "https://via.placeholder.com/150" },
    { id: 26, name: "Countertop Microwave", price: 10000, image: "https://via.placeholder.com/150" },
    { id: 27, name: "Over-the-Range Microwave", price: 17000, image: "https://via.placeholder.com/150" },
  ],
  "Air Conditioners": [
    { id: 28, name: "Split AC", price: 30000, image: "https://via.placeholder.com/150" },
    { id: 29, name: "Window AC", price: 18000, image: "https://via.placeholder.com/150" },
    { id: 30, name: "Portable AC", price: 25000, image: "https://via.placeholder.com/150" },
    { id: 31, name: "Inverter AC", price: 35000, image: "https://via.placeholder.com/150" },
    { id: 32, name: "Smart AC", price: 40000, image: "https://via.placeholder.com/150" },
    { id: 33, name: "AC with Heater", price: 37000, image: "https://via.placeholder.com/150" },
    { id: 34, name: "Compact AC", price: 22000, image: "https://via.placeholder.com/150" },
    { id: 35, name: "AC with Air Purifier", price: 42000, image: "https://via.placeholder.com/150" },
    { id: 36, name: "Eco AC", price: 33000, image: "https://via.placeholder.com/150" },
  ],
};

const Appliances = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(getCartCount());

  useEffect(() => {
    if (appliancesData[subcategory]) {
      setProducts(appliancesData[subcategory]);
    } else {
      setProducts([]);
    }
  }, [subcategory]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartCount(getCartCount());
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          {subcategory} in {category}
        </h2>

        {products.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
                <button
                  className="mt-3 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appliances;
