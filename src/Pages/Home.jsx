// src/Pages/Home.jsx
import React, { useState, useEffect } from "react";
import { products } from "../Data/products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [filters, setFilters] = useState({
    price: 100000,
    category: "",
    rating: 1,
  });

  // Load cart count from localStorage on first render
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
    alert(`${product.name} added to cart!`);
  };

  // Apply filters
  const filteredProducts = products.filter(
    (p) =>
      p.price <= filters.price &&
      (filters.category === "" || p.category === filters.category) &&
      p.rating >= filters.rating
  );

  return (
    <div>
      {/* Header with search + cart */}
      <Header cartCount={cartCount} />

      {/* Navbar categories */}
      <Navbar />

      {/* Banner */}
      <div className="w-full h-64 bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
        Big Sale! Up to 50% Off
      </div>

      {/* Main Section */}
      <div className="flex p-4 gap-4">
        {/* Filters Sidebar */}
        <Filters filters={filters} setFilters={setFilters} />

        {/* Products Grid */}
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products match your filters.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
