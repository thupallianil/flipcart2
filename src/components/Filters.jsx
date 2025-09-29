import React from "react";

const Filters = ({ filters, setFilters }) => {
  return (
    <aside className="bg-white p-4 rounded shadow w-64">
      <h2 className="font-bold text-lg mb-4">Filters</h2>

      {/* Price */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Max Price</label>
        <input
          type="range"
          min="1000"
          max="100000"
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="w-full"
        />
        <span>₹{filters.price}</span>
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Category</label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Laptop">Laptop</option>
          <option value="Headphones">Headphones</option>
          <option value="Smart Watch">Smart Watch</option>
          <option value="Shoes">Shoes</option>
        </select>
      </div>

      {/* Rating */}
      <div className="mb-4">
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
