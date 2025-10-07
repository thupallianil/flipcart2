import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { User, Heart, Gift, Package, Star, Crown } from "lucide-react";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(
    () => JSON.parse(localStorage.getItem("loggedInUser")) || null
  );
  const [showAuth, setShowAuth] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Update cart count from localStorage
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <>
      {/* Auth Modal */}
      {showAuth && (
        <AuthModal
          closeModal={() => setShowAuth(false)}
          onLogin={(user) => {
            setLoggedInUser(user);
            setShowAuth(false);
          }}
        />
      )}

      <header className="bg-blue-600 p-3 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images.png"
            alt="Logo"
            className="w-14 h-14 object-cover rounded-full hover:scale-105 transition-transform"
          />
        </Link>

        {/* Search bar */}
        <div className="flex-1 mx-4 relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-100 bg-white text-gray-800 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-blue-500
                       hover:shadow-md transition-shadow"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 text-white font-medium relative">
          {/* Login Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {loggedInUser ? (
              <button className="bg-white text-blue-600 px-4 py-1 rounded-md">
                {loggedInUser.username}
              </button>
            ) : (
              <button className="bg-white text-blue-600 px-4 py-1 rounded-md">
                Login
              </button>
            )}

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-60 bg-white text-gray-700 rounded-lg shadow-lg p-4 z-50">
                {!loggedInUser ? (
                  <div className="border-b pb-3 mb-3">
                    <p className="text-sm">
                      New customer?{" "}
                      <button
                        onClick={() => setShowAuth(true)}
                        className="text-blue-600 font-semibold"
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                ) : null}

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                    <User size={18} /> My Profile
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                    <Crown size={18} /> Flipkart Plus Zone
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                    <Package size={18} /> Orders
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                    <Heart size={18} /> Wishlist
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                    <Star size={18} /> Rewards
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                    <Gift size={18} /> Gift Cards
                  </li>
                </ul>

                {loggedInUser && (
                  <button
                    onClick={handleLogout}
                    className="mt-3 text-sm text-red-600 font-semibold hover:underline"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
