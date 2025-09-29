import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";

function App() {
  // State to track logged in user
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("loggedInUser")) || null);

  // State to control modal visibility
  const [showAuth, setShowAuth] = useState(user ? false : true);

  // Handle user login from AuthModal
  const handleLogin = (loggedUser) => {
    setUser(loggedUser);
    setShowAuth(false);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setShowAuth(true);
  };

  return (
    <Router>
      {/* Navbar with login/logout display */}
      <Navbar user={user} onLogout={handleLogout} />

      {/* Show modal if no user */}
      {showAuth && <AuthModal closeModal={() => setShowAuth(false)} onLogin={handleLogin} />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
