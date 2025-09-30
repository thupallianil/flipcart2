// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import Welcome from "./Pages/Welcome";

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
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
