// src/Pages/ProductsPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../Data/products"; // All products data
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const ProductsPage = () => {
  const { category, subcategory } = useParams();

  const filteredProducts = products.filter(
    (p) =>
      p.category === decodeURIComponent(category) &&
      p.subcategory === decodeURIComponent(subcategory)
  );

  const [cartCount, setCartCount] = useState(0);

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

  return (
    <div>
      <Header cartCount={cartCount} />
      <Navbar />

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">
          {decodeURIComponent(category)} / {decodeURIComponent(subcategory)}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((p) => (
              <div key={p.id} className="border p-3 rounded shadow">
                <Link to={`/product/${p.id}`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-blue-600 font-bold">₹{p.price}</p>
                </Link>
                <button
                  onClick={() => addToCart(p)}
                  className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
