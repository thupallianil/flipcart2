import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-blue-600 font-bold">₹{product.price}</p>
      <p className="text-yellow-500">{product.rating}★</p>
      <button onClick={()=>addToCart(product)} className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
