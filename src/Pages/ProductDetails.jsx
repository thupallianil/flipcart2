// src/Pages/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/products";
import Header from "../components/Header";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState("features");

  // Load cart count from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, []);

  // Add product to cart (without alert)
  const addToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  };

  if (!product) {
    return (
      <p className="text-red-500 p-4 text-center font-semibold">
        Product not found.
      </p>
    );
  }

  return (
    <div>
      <Header cartCount={cartCount} />

      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow mt-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-72 object-cover rounded border"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-blue-600 text-xl font-semibold mb-2">
              ₹{product.price}
            </p>
            <p className="text-yellow-500 mb-4">{product.rating} ★</p>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <button
              onClick={addToCart}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex gap-6 border-b pb-2">
            {["features", "reviews", "responses"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                {tab === "features"
                  ? "Features"
                  : tab === "reviews"
                  ? "Reviews"
                  : "Customer Q&A"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "features" && (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {product.features?.length > 0
                  ? product.features.map((f, idx) => <li key={idx}>{f}</li>)
                  : "No features available."}
              </ul>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-3">
                {product.reviews?.length > 0
                  ? product.reviews.map((r, idx) => (
                      <div
                        key={idx}
                        className="border p-3 rounded bg-gray-50 shadow-sm"
                      >
                        <p className="font-semibold">{r.user}</p>
                        <p className="text-yellow-500">{r.rating} ★</p>
                        <p>{r.comment}</p>
                      </div>
                    ))
                  : "No reviews yet."}
              </div>
            )}

            {activeTab === "responses" && (
              <div className="space-y-3">
                {product.responses?.length > 0
                  ? product.responses.map((res, idx) => (
                      <div
                        key={idx}
                        className="border p-3 rounded bg-gray-50 shadow-sm"
                      >
                        <p className="font-semibold">{res.question}</p>
                        <p className="text-gray-600">{res.answer}</p>
                      </div>
                    ))
                  : "No customer questions yet."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
