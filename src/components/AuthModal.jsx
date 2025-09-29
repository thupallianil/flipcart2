// src/components/AuthModal.jsx
import React, { useState } from "react";

const AuthModal = ({ closeModal, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Fetch existing users from localStorage or empty array
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || []
  );

  // Form state
  const [form, setForm] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    identifier: "",
    loginPassword: ""
  });

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();

    // Check if user exists
    const exists = users.find(
      (u) =>
        u.email === form.email ||
        u.mobile === form.mobile ||
        u.username === form.username
    );

    if (exists) {
      alert("User already exists! Please login.");
      setIsLogin(true);
      return;
    }

    const newUser = {
      username: form.username,
      mobile: form.mobile,
      email: form.email,
      password: form.password
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Account created! Please login.");
    setIsLogin(true);

    // Reset form
    setForm({
      username: "",
      mobile: "",
      email: "",
      password: "",
      identifier: "",
      loginPassword: ""
    });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        (u.email === form.identifier ||
          u.mobile === form.identifier ||
          u.username === form.identifier) &&
        u.password === form.loginPassword
    );

    if (user) {
      alert(`Welcome, ${user.username}!`);
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      if (onLogin) onLogin(user); // Notify parent
      closeModal();
    } else {
      alert("Invalid credentials! Try again.");
    }

    // Clear login fields
    setForm({ ...form, identifier: "", loginPassword: "" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {isLogin ? (
          // ---------------- LOGIN FORM ----------------
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Email / Mobile / Username"
              value={form.identifier}
              onChange={(e) =>
                setForm({ ...form, identifier: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.loginPassword}
              onChange={(e) =>
                setForm({ ...form, loginPassword: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
            <p className="text-sm text-center">
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-blue-600 underline"
              >
                Sign up
              </button>
            </p>
          </form>
        ) : (
          // ---------------- SIGNUP FORM ----------------
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Mobile"
              value={form.mobile}
              onChange={(e) =>
                setForm({ ...form, mobile: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Sign Up
            </button>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-blue-600 underline"
              >
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
