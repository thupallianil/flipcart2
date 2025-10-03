// src/Pages/Beauty.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

// 9 Example products per subcategory
const beautyData = {
  Makeup: [
    { id: 1, name: "Lipstick Set", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Eyeliner", price: 499, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Foundation", price: 899, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Mascara", price: 699, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Blush", price: 599, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Lip Gloss", price: 399, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Compact Powder", price: 499, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Concealer", price: 799, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Eyeshadow Palette", price: 1299, image: "https://via.placeholder.com/150" },
  ],
  Skincare: [
    { id: 10, name: "Moisturizer", price: 899, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Face Wash", price: 299, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Face Serum", price: 1299, image: "https://via.placeholder.com/150" },
    { id: 13, name: "Sunscreen", price: 499, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Night Cream", price: 999, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Exfoliating Scrub", price: 599, image: "https://via.placeholder.com/150" },
    { id: 16, name: "Toner", price: 399, image: "https://via.placeholder.com/150" },
    { id: 17, name: "Face Mask", price: 699, image: "https://via.placeholder.com/150" },
    { id: 18, name: "Eye Cream", price: 799, image: "https://via.placeholder.com/150" },
  ],
  Haircare: [
    { id: 19, name: "Shampoo", price: 399, image: "https://via.placeholder.com/150" },
    { id: 20, name: "Hair Oil", price: 499, image: "https://via.placeholder.com/150" },
    { id: 21, name: "Conditioner", price: 299, image: "https://via.placeholder.com/150" },
    { id: 22, name: "Hair Serum", price: 799, image: "https://via.placeholder.com/150" },
    { id: 23, name: "Hair Mask", price: 699, image: "https://via.placeholder.com/150" },
    { id: 24, name: "Hair Spray", price: 499, image: "https://via.placeholder.com/150" },
    { id: 25, name: "Leave-in Conditioner", price: 599, image: "https://via.placeholder.com/150" },
    { id: 26, name: "Dry Shampoo", price: 399, image: "https://via.placeholder.com/150" },
    { id: 27, name: "Hair Gel", price: 299, image: "https://via.placeholder.com/150" },
  ],
  Fragrances: [
    { id: 28, name: "Perfume", price: 1999, image: "https://via.placeholder.com/150" },
    { id: 29, name: "Body Mist", price: 699, image: "https://via.placeholder.com/150" },
    { id: 30, name: "Cologne", price: 1499, image: "https://via.placeholder.com/150" },
    { id: 31, name: "Deodorant Spray", price: 499, image: "https://via.placeholder.com/150" },
    { id: 32, name: "Roll-on Perfume", price: 399, image: "https://via.placeholder.com/150" },
    { id: 33, name: "Scented Body Lotion", price: 599, image: "https://via.placeholder.com/150" },
    { id: 34, name: "Eau de Toilette", price: 1299, image: "https://via.placeholder.com/150" },
    { id: 35, name: "Perfume Oil", price: 899, image: "https://via.placeholder.com/150" },
    { id: 36, name: "Fragrance Gift Set", price: 2499, image: "https://via.placeholder.com/150" },
  ],
};

const Beauty = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (beautyData[subcategory]) {
      setProducts(beautyData[subcategory]);
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

export default Beauty;
