import React, { useState } from "react";

const AuthModal = ({ closeModal, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || []);

  const [form, setForm] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    identifier: "",
    loginPassword: ""
  });

  // Handle signup
  const handleSignup = e => {
    e.preventDefault();

    // Check if user already exists by email, mobile, or username
    const exists = users.find(
      u =>
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
    setForm({ username:"", mobile:"", email:"", password:"", identifier:"", loginPassword:"" });
  };

  // Handle login
  const handleLogin = e => {
    e.preventDefault();
    const user = users.find(
      u =>
        (u.email === form.identifier ||
          u.mobile === form.identifier ||
          u.username === form.identifier) &&
        u.password === form.loginPassword
    );

    if (user) {
      alert(`Welcome, ${user.username || user.email || user.mobile}!`);
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      // Notify parent component
      onLogin && onLogin(user);

      // Close modal
      closeModal();
    } else {
      alert("Invalid credentials!");
    }

    // Reset login fields
    setForm({ ...form, identifier: "", loginPassword: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-96 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{isLogin ? "Login" : "Signup"}</h2>

        {isLogin ? (
          // Login Form
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Email / Mobile / Username"
              required
              value={form.identifier}
              onChange={e => setForm({ ...form, identifier: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={form.loginPassword}
              onChange={e => setForm({ ...form, loginPassword: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Login
            </button>
            <p className="text-sm mt-2">
              No account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-blue-600 underline"
              >
                Signup
              </button>
            </p>
          </form>
        ) : (
          // Signup Form
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              required
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Mobile"
              required
              value={form.mobile}
              onChange={e => setForm({ ...form, mobile: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Signup
            </button>
            <p className="text-sm mt-2">
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
