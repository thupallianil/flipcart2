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
    brand: "",
    discount: "",
    type: "",
    newArrival: false,
    offers: false,
    fit: "",
    occasion: "",
    availability: "",
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

  // Apply all filters
  const filteredProducts = products.filter((p) => {
    if (p.price > filters.price) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.brand && p.brand !== filters.brand) return false;
    if (filters.discount && p.discount !== filters.discount) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.newArrival && !p.newArrival) return false;
    if (filters.offers && !p.offers) return false;
    if (filters.fit && p.fit !== filters.fit) return false;
    if (filters.occasion && p.occasion !== filters.occasion) return false;
    if (filters.availability && p.availability !== filters.availability)
      return false;
    if (p.rating < filters.rating) return false;
    return true;
  });

  return (
    <div>
      {/* Header */}
      <Header cartCount={cartCount} />

      {/* Navbar */}
      <Navbar />

      {/* Banner Image */}
      <div className="w-full h-64 mt-4">
        <img
          src="/image3.jpg"
          alt="Big Sale Banner"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Main Section */}
      <div className="flex p-4 gap-4 mt-4">
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