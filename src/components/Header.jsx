// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const Header = ({ cartCount }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    () => JSON.parse(localStorage.getItem("loggedInUser")) || null
  );
  const [showAuth, setShowAuth] = useState(false);

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

      <header className="bg-blue-600 p-3 flex items-center justify-between">
  {/* Logo */}
<Link to="/" className="flex items-center">
  <img
    src="/images.png"
    alt="Flipkart Logo"
    className="w-14 h-14 object-cover rounded-full transition-transform duration-300 hover:scale-105 shadow-lg"
  />
</Link>


        {/* Search bar */}
        <div className="flex-1 mx-4 relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-100 bg-white text-gray-800 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-blue-500 
                       hover:shadow-md transition-shadow"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Right side: Login / Cart */}
        <div className="flex items-center gap-4">
          {loggedInUser ? (
            <>
              <span className="text-white font-semibold">
                Hello, {loggedInUser.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowAuth(true)}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
            >
              Login
            </button>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative text-white font-semibold">
            Cart
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
