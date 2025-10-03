import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import AddToCartButton from "../components/AddToCartButton";
import { getCartCount } from "../utils/cart";

const fashionData = {
  "Men's Clothing": [
    { id: 1, name: "Men's T-Shirt", price: 799, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Men's Jeans", price: 1499, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Formal Shirt", price: 1299, image: "https://via.placeholder.com/150" },
  ],
  "Women's Clothing": [
    { id: 4, name: "Women's Dress", price: 1999, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Kurti Set", price: 1299, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Saree", price: 2500, image: "https://via.placeholder.com/150" },
  ],
  Shoes: [
    { id: 7, name: "Running Shoes", price: 2999, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Formal Shoes", price: 3499, image: "https://via.placeholder.com/150" },
  ],
  Accessories: [
    { id: 9, name: "Leather Belt", price: 799, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Wrist Watch", price: 2499, image: "https://via.placeholder.com/150" },
  ],
};

const Fashion = () => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(getCartCount());

  useEffect(() => {
    if (fashionData[subcategory]) setProducts(fashionData[subcategory]);
    else setProducts([]);
  }, [subcategory]);

  return (
    <div>
      <Header cartCount={cartCount} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{subcategory} in {category}</h2>
        {products.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg shadow-md p-4 flex flex-col items-center">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-3" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
                <AddToCartButton product={product} onCartUpdate={(count) => setCartCount(count)} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fashion;
