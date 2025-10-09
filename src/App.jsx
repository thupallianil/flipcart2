// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyProfile from "./components/MyProfile";

// Pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import Welcome from "./Pages/Welcome";
import Electronics from "./Pages/Electronics";
import Fashion from "./Pages/Fashion";
import Beauty from "./Pages/Beauty";
import Appliances from "./Pages/Appliances";
import SellerDashboard from "./Pages/SellerDashboard"; // ✅ added

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  // ✅ Get logged-in user info
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <Router>
      {showWelcome ? (
        // 👋 Show welcome screen first
        <Welcome onFinish={() => setShowWelcome(false)} />
      ) : (
        <>
         
          <Routes>
            {/* 🏠 Home */}
            <Route path="/" element={<Home />} />

            {/* 📦 Product Details */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* 🛍️ Category Pages */}
            <Route path="/products/Electronics/:subcategory" element={<Electronics />} />
            <Route path="/products/Fashion/:subcategory" element={<Fashion />} />
            <Route path="/products/Beauty/:subcategory" element={<Beauty />} />
            <Route path="/products/Appliances/:subcategory" element={<Appliances />} />

            {/* 🛒 Cart / Checkout / About */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />

            {/* 👤 Profile */}
            <Route path="/profile" element={<MyProfile />} />

            {/* 🧰 Seller Dashboard (Only visible if seller) */}
            {user?.role === "seller" && (
              <Route path="/seller" element={<SellerDashboard />} />
            )}
          </Routes>

          {/* 🦶 Footer for all pages */}
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
