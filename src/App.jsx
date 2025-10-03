// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import Welcome from "./Pages/Welcome";
import Electronics from "./Pages/Electronics";
import Fashion from "./Pages/Fashion";
import House from "./Pages/House";
import Beauty from "./Pages/Beauty";
import Appliances from "./Pages/Appliances"; // ✅ added Appliances page

function App() {
  const [showWelcome, setShowWelcome] = useState(true); // starts with Welcome

  return (
    <Router>
      {showWelcome ? (
        // Show Welcome screen first
        <Welcome onFinish={() => setShowWelcome(false)} />
      ) : (
        // After Welcome, show main app routes
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Product Details */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Category/Subcategory Routes */}
          <Route path="/products/Electronics/:subcategory" element={<Electronics />} />
          <Route path="/products/Fashion/:subcategory" element={<Fashion />} />
          <Route path="/products/Home/:subcategory" element={<House />} />
          <Route path="/products/Beauty/:subcategory" element={<Beauty />} />
          <Route path="/products/Appliances/:subcategory" element={<Appliances />} />

          {/* Other Pages */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
