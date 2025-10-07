// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";
import { User, Heart, Gift, Package, Star, Crown } from "lucide-react";

// Named imports from pages
import { houseData } from "../Pages/House.jsx";
import { beautyData } from "../Pages/Beauty.jsx";
import { electronicsData } from "../Pages/Electronics.jsx";
import { appliancesData } from "../Pages/Appliances.jsx";
import { fashionData } from "../Pages/Fashion.jsx";

const Header = () => {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(
    () =>
      JSON.parse(localStorage.getItem("cart"))?.reduce(
        (acc, item) => acc + item.quantity,
        0
      ) || 0
  );

  const [loggedInUser, setLoggedInUser] = useState(
    () => JSON.parse(localStorage.getItem("loggedInUser")) || null
  );

  const [showAuth, setShowAuth] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchDone, setSearchDone] = useState(false);

  // Merge all products with category info
  const addCategory = (data, categoryName) =>
    Object.entries(data).flatMap(([subcategory, items]) =>
      items.map((item) => ({ ...item, category: categoryName, subcategory }))
    );

  const allProducts = [
    ...addCategory(houseData, "House"),
    ...addCategory(beautyData, "Beauty"),
    ...addCategory(electronicsData, "Electronics"),
    ...addCategory(appliancesData, "Appliances"),
    ...addCategory(fashionData, "Fashion"),
  ];

  useEffect(() => {
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
  }, []);

  // Update cart count
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setShowDropdown(false);
    navigate("/");
  };

  // Live search
  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setSearchResults([]);
      setSearchDone(false);
      return;
    }

    const storedProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
    const results = storedProducts.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.subcategory.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    setSearchResults(results);
    setSearchDone(true);
  }, [searchQuery]);

  return (
    <>
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

        {/* Search */}
        <div className="flex-1 mx-4 relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-100 bg-white text-gray-800 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-blue-500
                       hover:shadow-md transition-shadow"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>

          {/* Search Results */}
          {searchQuery && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 max-h-96 overflow-y-auto rounded-b-lg mt-1">
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {searchResults.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 rounded-lg shadow hover:shadow-lg transition-shadow text-center cursor-pointer"
                    onClick={() =>
                      navigate(`/${item.category}/${item.subcategory}`)
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-24 object-cover rounded-md mb-1"
                    />
                    <h3 className="text-gray-800 font-semibold text-sm truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      {item.category} / {item.subcategory}
                    </p>
                    <p className="text-blue-600 font-bold mt-1">₹{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchQuery && searchDone && searchResults.length === 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 p-4 rounded-b-lg text-center text-gray-600 mt-1">
              ❌ Product not available
            </div>
          )}
        </div>

        {/* User & Cart */}
        <div className="flex items-center gap-6 text-white font-medium relative">
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
              <button
                onClick={() => setShowAuth(true)}
                className="bg-white text-blue-600 px-4 py-1 rounded-md"
              >
                Login
              </button>
            )}

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-60 bg-gray-300 text-gray-700 rounded-lg shadow-lg p-4 z-50">
                {!loggedInUser && (
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
                )}

                <ul className="space-y-2 text-sm">
                  {/* ✅ My Profile */}
                  <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                    <Link to="/profile" className="flex items-center gap-2">
                      <User size={18} /> My Profile
                    </Link>
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
