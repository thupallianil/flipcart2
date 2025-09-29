import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Link to="/" className="text-2xl font-bold">Flipkart Clone</Link>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative">
          Cart
          <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
            {cartCount}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
