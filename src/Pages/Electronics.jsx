import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import AddToCartButton from "../components/AddToCartButton";
import { getCartCount } from "../utils/cart";

// Example product data
const electronicsData = {
  Smartphones: [
    { id: 1, name: "iPhone 14 Pro", price: 120000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Samsung Galaxy S23", price: 95000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "OnePlus 11R", price: 45000, image: "https://via.placeholder.com/150" },
  ],
  Laptops: [
    { id: 4, name: "MacBook Air M2", price: 130000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Dell XPS 15", price: 145000, image: "https://via.placeholder.com/150" },
    { id: 6, name: "HP Spectre x360", price: 125000, image: "https://via.placeholder.com/150" },
  ],
  Headphones: [
    { id: 7, name: "Sony WH-1000XM5", price: 29000, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Apple AirPods Pro", price: 24999, image: "https://via.placeholder.com/150" },
    { id: 9, name: "JBL Tune 760NC", price: 7500, image: "https://via.placeholder.com/150" },
  ],
  "Smart Watches": [
    { id: 10, name: "Apple Watch Series 9", price: 44000, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Samsung Galaxy Watch 6", price: 32000, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Noise ColorFit Ultra 3", price: 5000, image: "https://via.placeholder.com/150" },
  ],
};

const Electronics = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(getCartCount());

  useEffect(() => {
    if (electronicsData[subcategory]) setProducts(electronicsData[subcategory]);
    else setProducts([]);
  }, [subcategory]);

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
                <AddToCartButton
                  product={product}
                  onCartUpdate={(count) => setCartCount(count)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Electronics;
