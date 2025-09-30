// src/components/Filters.jsx
import React from "react";

const Filters = ({ filters, setFilters }) => {
  // Example options
  const categories = ["Smartphone", "Laptop", "Headphones", "Smart Watch", "Shoes"];
  const brands = ["Apple", "Samsung", "OnePlus", "Dell", "HP", "Sony", "Nike"];
  const discounts = ["10%", "20%", "30%", "40%", "50%+"];
  const types = ["Electronics", "Fashion", "Home", "Appliances", "Beauty"];
  const fits = ["Regular", "Slim", "Oversized"];
  const occasions = ["Casual", "Party", "Formal", "Sports"];
  const availability = ["In Stock", "Out of Stock"];

  return (
    <aside className="bg-white p-4 rounded shadow w-64 space-y-4">
      <h2 className="font-bold text-lg mb-2">Filters</h2>

      {/* Price */}
      <div>
        <label className="block font-semibold mb-1">Max Price</label>
        <input
          type="range"
          min="100"
          max="10000"
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="w-full"
        />
        <span>₹{filters.price}</span>
      </div>

      {/* Category */}
      <div>
        <label className="block font-semibold mb-1">Category</label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div>
        <label className="block font-semibold mb-1">Brand</label>
        <select
          value={filters.brand || ""}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      {/* Discount */}
      <div>
        <label className="block font-semibold mb-1">Discount</label>
        <select
          value={filters.discount || ""}
          onChange={(e) => setFilters({ ...filters, discount: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          {discounts.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* New Arrivals */}
      <div>
        <label className="block font-semibold mb-1">New Arrivals</label>
        <input
          type="checkbox"
          checked={filters.newArrival || false}
          onChange={(e) => setFilters({ ...filters, newArrival: e.target.checked })}
        />{" "}Show only new arrivals
      </div>

      {/* Type */}
      <div>
        <label className="block font-semibold mb-1">Type</label>
        <select
          value={filters.type || ""}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Offers */}
      <div>
        <label className="block font-semibold mb-1">Offers</label>
        <input
          type="checkbox"
          checked={filters.offers || false}
          onChange={(e) => setFilters({ ...filters, offers: e.target.checked })}
        />{" "}Show only products with offers
      </div>

      {/* Fit */}
      <div>
        <label className="block font-semibold mb-1">Fit</label>
        <select
          value={filters.fit || ""}
          onChange={(e) => setFilters({ ...filters, fit: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          {fits.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* Occasion */}
      <div>
        <label className="block font-semibold mb-1">Occasion</label>
        <select
          value={filters.occasion || ""}
          onChange={(e) => setFilters({ ...filters, occasion: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          {occasions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      {/* Availability */}
      <div>
        <label className="block font-semibold mb-1">Availability</label>
        {availability.map((a) => (
          <div key={a}>
            <input
              type="checkbox"
              checked={filters.availability === a}
              onChange={() => setFilters({ ...filters, availability: a })}
            />{" "}{a}
          </div>
        ))}
      </div>

      {/* Rating */}
      <div>
        <label className="block font-semibold mb-1">Minimum Rating</label>
        <input
          type="number"
          min="1"
          max="5"
          step="0.1"
          value={filters.rating}
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>
    </aside>
  );
};

export default Filters;
