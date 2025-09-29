import React, { useState } from "react";
import Header from "../components/Header";

const Checkout = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [cartCount, setCartCount] = useState(cart.reduce((acc, item) => acc + item.quantity, 0));
  const [form, setForm] = useState({ name:"", address:"", city:"", payment:"" });

  const handleSubmit = e => {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    setCart([]);
    setCartCount(0);
    setForm({ name:"", address:"", city:"", payment:"" });
  };

  return (
    <div>
      <Header cartCount={cartCount} setCartCount={setCartCount} />
      <main className="p-4 max-w-md mx-auto bg-white p-6 rounded shadow mt-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full p-2 border rounded" />
          <textarea name="address" placeholder="Address" required value={form.address} onChange={e=>setForm({...form, address:e.target.value})} className="w-full p-2 border rounded"></textarea>
          <input type="text" name="city" placeholder="City" required value={form.city} onChange={e=>setForm({...form, city:e.target.value})} className="w-full p-2 border rounded" />
          <select name="payment" required value={form.payment} onChange={e=>setForm({...form, payment:e.target.value})} className="w-full p-2 border rounded">
            <option value="">Select Payment Method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
          <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">Place Order</button>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
