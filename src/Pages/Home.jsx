// src/Pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../Data/products";
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

  const filteredProducts = products.filter((p) => {
    if (p.price > filters.price) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.rating && p.rating < filters.rating) return false;
    return true;
  });

  return (
    <div>
      <Header cartCount={cartCount} />
      <Navbar />

      {/* Banner */}
      <div className="w-full h-64 mt-4">
        <img
          src="https://rukminim1.flixcart.com/flap/960/960/image/5ef9c21fdbd6d6ea.jpg?q=50"
          alt="Banner"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex p-4 gap-4 mt-4">
        <Filters filters={filters} setFilters={setFilters} />

        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="border p-2 rounded hover:shadow-lg transition"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-40 object-contain mb-2"
                />
                <h3 className="text-sm font-medium">{p.name}</h3>
                <p className="text-sm text-gray-600">₹{p.price}</p>
              </Link>
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
