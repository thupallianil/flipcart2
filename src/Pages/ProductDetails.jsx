import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/products";
import Header from "../components/Header";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [cartCount, setCartCount] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  });

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);
    if(existing) existing.quantity += 1;
    else cart.push({...product, quantity:1});
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
    alert(`${product.name} added to cart!`);
  };

  if(!product) return <p className="text-red-500 p-4">Product not found.</p>;

  return (
    <div>
      <Header cartCount={cartCount} setCartCount={setCartCount} />
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mt-4">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded"/>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-blue-600 text-xl font-semibold mb-2">₹{product.price}</p>
        <p className="text-yellow-500 mb-4">{product.rating}★</p>
        <p className="mb-4">{product.description}</p>
        <button onClick={addToCart} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
