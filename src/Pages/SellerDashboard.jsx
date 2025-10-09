// src/Pages/SellerDashboard.jsx
import React, { useState, useEffect } from "react";
import { Package, BarChart3, PlusCircle, ShoppingBag, Users, LogOut } from "lucide-react";

const SellerDashboard = () => {
  const [seller, setSeller] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || { username: "Seller", email: "" }
  );

  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    document.title = "Seller Dashboard | Flipkart Clone";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-center text-yellow-400">
          Seller Panel
        </h2>

        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
              activeTab === "overview"
                ? "bg-yellow-400 text-black font-semibold"
                : "hover:bg-blue-800"
            }`}
          >
            <BarChart3 size={20} /> Overview
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
              activeTab === "products"
                ? "bg-yellow-400 text-black font-semibold"
                : "hover:bg-blue-800"
            }`}
          >
            <Package size={20} /> My Products
          </button>

          <button
            onClick={() => setActiveTab("addProduct")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
              activeTab === "addProduct"
                ? "bg-yellow-400 text-black font-semibold"
                : "hover:bg-blue-800"
            }`}
          >
            <PlusCircle size={20} /> Add Product
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
              activeTab === "orders"
                ? "bg-yellow-400 text-black font-semibold"
                : "hover:bg-blue-800"
            }`}
          >
            <ShoppingBag size={20} /> Orders
          </button>

          <button
            onClick={() => setActiveTab("customers")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
              activeTab === "customers"
                ? "bg-yellow-400 text-black font-semibold"
                : "hover:bg-blue-800"
            }`}
          >
            <Users size={20} /> Customers
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              window.location.href = "/";
            }}
            className="mt-auto flex items-center gap-3 px-3 py-2 rounded-md bg-red-600 hover:bg-red-700"
          >
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-4 text-blue-800">Dashboard Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-gray-500 mb-2">Total Products</h2>
                <p className="text-3xl font-bold text-blue-800">45</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-gray-500 mb-2">Orders This Month</h2>
                <p className="text-3xl font-bold text-green-600">128</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-gray-500 mb-2">Total Revenue</h2>
                <p className="text-3xl font-bold text-yellow-500">₹84,200</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-800">My Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="mt-3 font-semibold">Smartwatch</h3>
                <p className="text-gray-500">₹2,499</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="mt-3 font-semibold">Bluetooth Speaker</h3>
                <p className="text-gray-500">₹1,999</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "addProduct" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-800">Add New Product</h1>
            <form className="bg-white p-6 rounded-lg shadow-md max-w-lg">
              <div className="mb-4">
                <label className="block text-gray-600 mb-1">Product Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Enter product name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-1">Price</label>
                <input
                  type="number"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Enter price"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-1">Image URL</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Enter image link"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              >
                Add Product
              </button>
            </form>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-800">Recent Orders</h1>
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="p-3 text-left">Order ID</th>
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">#12345</td>
                  <td className="p-3">John Doe</td>
                  <td className="p-3">₹3,499</td>
                  <td className="p-3 text-green-600 font-semibold">Delivered</td>
                </tr>
                <tr>
                  <td className="p-3">#12346</td>
                  <td className="p-3">Anita Kumar</td>
                  <td className="p-3">₹1,899</td>
                  <td className="p-3 text-yellow-500 font-semibold">Shipped</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "customers" && (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-800">Customers</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li className="border-b pb-2">John Doe - johndoe@email.com</li>
                <li className="border-b pb-2">Anita Kumar - anita@email.com</li>
                <li>Rajesh Singh - rajesh@email.com</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
