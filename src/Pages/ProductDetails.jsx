// src/Pages/ProductDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../Data/products";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="p-4">Product not found!</div>;

  const relatedProducts = products.filter(
    (p) => p.subcategory === product.subcategory && p.id !== product.id
  );

  return (
    <div>
      <Header />
      <Navbar />

      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/3 h-64 object-contain border p-2"
          />

          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="mb-1"><strong>Category:</strong> {product.category}</p>
            <p className="mb-1"><strong>Subcategory:</strong> {product.subcategory}</p>
            <p className="mb-1"><strong>Price:</strong> ₹{product.price}</p>
            <p className="mb-1"><strong>Rating:</strong> {product.rating} ⭐</p>
            <p className="mb-2"><strong>Description:</strong> {product.description}</p>

            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc list-inside mb-2">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h3 className="font-semibold">Reviews:</h3>
            <ul className="list-disc list-inside">
              {product.reviews.map((r, i) => (
                <li key={i}>
                  <strong>{r.user}:</strong> {r.comment} ({r.rating}⭐)
                </li>
              ))}
            </ul>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="border p-2 rounded hover:shadow-lg transition"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-32 object-contain mb-2"
                  />
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-sm text-gray-600">₹{p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
