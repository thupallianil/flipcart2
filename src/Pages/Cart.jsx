import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [cartCount, setCartCount] = useState(cart.reduce((acc, item) => acc + item.quantity, 0));

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Header cartCount={cartCount} setCartCount={setCartCount} />
      <main className="p-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? <p>Your cart is empty!</p> : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} - ₹{item.price} x {item.quantity}</span>
                <button onClick={()=>removeItem(item.id)} className="text-red-500">Remove</button>
              </div>
            ))}
            <p className="font-bold mt-4">Total: ₹{total}</p>
            <Link to="/checkout" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded">Proceed to Checkout</Link>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;
