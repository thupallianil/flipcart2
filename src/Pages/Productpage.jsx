// src/Pages/ProductsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/products"; // Correct path to your products
import ProductCard from "../components/ProductCard";

const ProductsPage = ({ addToCart }) => {
  const { category, type } = useParams();

  // Filter products by category and type
  const filteredProducts = products.filter(
    (p) => p.category === category && p.type === type
  );

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found in {type}.
        </p>
      )}
    </div>
  );
};

export default ProductsPage;
