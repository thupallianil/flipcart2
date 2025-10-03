// src/Pages/Cart.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { getCart, removeFromCart } from "../utils/cart";

const Cart = () => {
  const [cart, setCart] = useState(getCart());

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  useEffect(() => {
    const handleCartUpdate = () => setCart(getCart());

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("storage", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("storage", handleCartUpdate);
    };
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <main className="p-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty!</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2 p-2 border-b border-gray-200">
                <div>
                  <span className="font-medium">{item.name}</span> - ₹{item.price} x {item.quantity}
                </div>
                <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:underline">
                  Remove
                </button>
              </div>
            ))}
            <p className="font-bold mt-4 text-lg">Total: ₹{total}</p>
            <Link to="/checkout" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Proceed to Checkout
            </Link>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;
