// src/Pages/House.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

// ✅ Named export for product data
export const houseData = {
  Furniture: [
    { id: 1, name: "Sofa Set", price: 25000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Dining Table", price: 18000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Bed Frame", price: 22000, image: "https://via.placeholder.com/150" },
  ],
  Decor: [
    { id: 4, name: "Wall Art", price: 1500, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Vase Set", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Table Lamp", price: 800, image: "https://via.placeholder.com/150" },
  ],
  Kitchenware: [
    { id: 7, name: "Cookware Set", price: 3500, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Knife Set", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Mixer Grinder", price: 4000, image: "https://via.placeholder.com/150" },
  ],
  Lighting: [
    { id: 10, name: "Chandelier", price: 8000, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Floor Lamp", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 12, name: "LED Wall Light", price: 1500, image: "https://via.placeholder.com/150" },
  ],
};

const House = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (houseData[subcategory]) {
      setProducts(houseData[subcategory]);
    } else {
      setProducts([]);
    }
  }, [subcategory]);

  return (
    <div>
      <Header />
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
                <button className="mt-3 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
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

export default House;
