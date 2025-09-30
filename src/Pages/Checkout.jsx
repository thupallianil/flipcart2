// src/Pages/Checkout.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Checkout = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [cartCount, setCartCount] = useState(cart.reduce((acc, item) => acc + item.quantity, 0));
  const [form, setForm] = useState({ name: "", address: "", city: "", payment: "" });
  const [emiPlan, setEmiPlan] = useState(""); // selected EMI months
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total amount whenever cart changes
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cart]);

  // Example EMI Plans
  const emiPlans = [
    { months: 3, interest: 5 },
    { months: 6, interest: 8 },
    { months: 12, interest: 12 },
  ];

  // Dummy customer reviews
  const reviews = [
    { id: 1, name: "Ravi Kumar", rating: 5, text: "Great product and fast delivery!" },
    { id: 2, name: "Sneha Reddy", rating: 4, text: "Good quality, but packaging can be improved." },
    { id: 3, name: "Arjun Singh", rating: 5, text: "Excellent service, very satisfied!" },
  ];

  // Calculate EMI monthly payment
  const calculateEmi = (months, interest) => {
    const rate = interest / 100;
    return ((totalAmount + totalAmount * rate) / months).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    setCart([]);
    setCartCount(0);
    setForm({ name: "", address: "", city: "", payment: "" });
    setEmiPlan("");
  };

  return (
    <div>
      <Header cartCount={cartCount} setCartCount={setCartCount} />

      {/* Checkout Form */}
      <main className="p-4 max-w-md mx-auto bg-white rounded shadow mt-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="address"
            placeholder="Address"
            required
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="w-full p-2 border rounded"
          ></textarea>
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <select
            name="payment"
            required
            value={form.payment}
            onChange={(e) => setForm({ ...form, payment: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Payment Method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="emi">EMI</option>
          </select>

          {/* EMI Options */}
          {form.payment === "emi" && (
            <div className="border p-3 rounded bg-gray-50">
              <h3 className="font-semibold mb-2">Choose EMI Plan</h3>
              {emiPlans.map((plan) => (
                <label key={plan.months} className="block mb-1">
                  <input
                    type="radio"
                    name="emi"
                    value={plan.months}
                    checked={emiPlan === plan.months.toString()}
                    onChange={(e) => setEmiPlan(e.target.value)}
                    className="mr-2"
                  />
                  {plan.months} Months @ {plan.interest}% Interest - ₹
                  {calculateEmi(plan.months, plan.interest)} / month
                </label>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="bg-green-600 text-white w-full py-2 rounded"
          >
            Place Order
          </button>
        </form>
      </main>

      {/* Customer Reviews Section */}
      <section className="max-w-md mx-auto bg-white rounded shadow p-4 mt-6">
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
        {reviews.map((r) => (
          <div key={r.id} className="border-b py-2">
            <p className="font-semibold">{r.name}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(r.rating)}{" "}
              <span className="text-gray-500 text-sm">({r.rating}/5)</span>
            </p>
            <p className="text-gray-600">{r.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Checkout;
