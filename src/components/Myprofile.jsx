import React, { useState, useEffect } from "react";

const MyProfile = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || {
      username: "Guest User",
      email: "example@email.com",
      phone: "",
      address: "",
      membership: "Silver",
      points: 250,
    }
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setIsEditing(false);
  };

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl p-8 relative overflow-hidden border-t-8 border-purple-500">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-200 opacity-20 rounded-3xl"></div>

        {/* Profile Header */}
        <div className="flex flex-col items-center relative z-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User Avatar"
            className="w-32 h-32 rounded-full shadow-2xl border-4 border-purple-400 hover:scale-110 transition-transform duration-300"
          />
          <h2 className="text-4xl font-extrabold text-purple-700 mt-4">{user.username}</h2>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="mt-1 text-gray-700 text-sm">
            Membership: <span className="font-semibold text-pink-500">{user.membership}</span> | Points:{" "}
            <span className="font-semibold text-green-600">{user.points}</span>
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center relative z-10">
          {[
            { title: "Orders", value: "3", color: "from-purple-400 to-pink-300" },
            { title: "Wishlist", value: "5", color: "from-pink-300 to-yellow-200" },
            { title: "Rewards", value: "₹250", color: "from-green-300 to-green-200" },
            { title: "Gift Cards", value: "2", color: "from-yellow-300 to-yellow-100" },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-lg hover:scale-105 transform transition-all`}
            >
              <p className="text-xl font-bold text-white">{item.value}</p>
              <p className="text-white text-sm mt-1">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-300 relative z-10"></div>

        {/* Editable Profile Info */}
        <div className="space-y-5 relative z-10">
          {[
            { label: "Username", name: "username", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "text" },
            { label: "Address", name: "address", type: "textarea" },
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-gray-800 font-semibold mb-1">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={user[field.name]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full p-4 rounded-xl border focus:outline-none h-28 resize-none shadow-sm transition-all ${
                    isEditing ? "border-pink-400 bg-white" : "border-gray-200 bg-gray-50"
                  }`}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={user[field.name]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full p-4 rounded-xl border focus:outline-none shadow-sm transition-all ${
                    isEditing ? "border-pink-400 bg-white" : "border-gray-200 bg-gray-50"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="mt-12 relative z-10">
          <h3 className="text-2xl font-bold text-purple-700 mb-6">Recent Orders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Wireless Headphones", price: "₹1500", status: "Delivered" },
              { name: "Smart Watch", price: "₹2500", status: "Shipped" },
              { name: "Sneakers", price: "₹3200", status: "Processing" },
            ].map((order, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <div>
                  <p className="font-semibold text-gray-700">{order.name}</p>
                  <p className="text-gray-500 text-sm">{order.status}</p>
                </div>
                <p className="font-bold text-pink-500">{order.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8 relative z-10 text-lg font-semibold">
          {["Facebook", "Twitter", "Instagram"].map((social, i) => (
            <a
              key={i}
              href="#"
              className="text-purple-600 hover:text-pink-500 transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-10 relative z-10">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-pink-500 text-white px-8 py-3 rounded-xl hover:bg-pink-600 shadow-lg transition-all"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-800 px-8 py-3 rounded-xl hover:bg-gray-400 shadow-lg transition-all"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-purple-500 text-white px-10 py-3 rounded-xl hover:bg-purple-600 shadow-lg transition-all"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
