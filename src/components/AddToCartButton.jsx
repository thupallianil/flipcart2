// src/components/AddToCartButton.jsx
import React from "react";
import { addToCart, getCartCount } from "../utils/cart";

const AddToCartButton = ({ product, onCartUpdate }) => {
  const handleAdd = () => {
    addToCart(product);
    if (onCartUpdate) onCartUpdate(getCartCount());
    alert(`${product.name} added to cart!`);
  };

  return (
    <button
      className="mt-3 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
      onClick={handleAdd}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
