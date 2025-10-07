import React, { useState, useEffect } from "react";

const AuthModal = ({ closeModal, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    identifier: "",
    loginPassword: "",
  });

  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleSignup = (e) => {
    e.preventDefault();
    const exists = users.find(
      (u) => u.email === form.email || u.mobile === form.mobile || u.username === form.username
    );
    if (exists) {
      alert("⚠️ User already exists! Please login instead.");
      setIsLogin(true);
      return;
    }
    const newUser = { username: form.username, email: form.email, mobile: form.mobile, password: form.password };
    setUsers([...users, newUser]);
    alert("✅ Account created successfully! Please login now.");
    setIsLogin(true);
    setForm({ username: "", email: "", mobile: "", password: "", identifier: "", loginPassword: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) =>
        (u.username === form.identifier || u.email === form.identifier || u.mobile === form.identifier) &&
        u.password === form.loginPassword
    );
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("✅ Successfully logged in!");
      if (onLogin) onLogin(user);
      closeModal();
    } else {
      alert("❌ Invalid credentials! Please try again.");
    }
    setForm({ ...form, identifier: "", loginPassword: "" });
  };

  return (
    <div className="fixed inset-0 bg-gold-300  bg-gold-200 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-lg relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={closeModal}>✕</button>
        {isLogin ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username / Email / Mobile"
                required
                value={form.identifier}
                onChange={(e) => setForm({ ...form, identifier: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={form.loginPassword}
                onChange={(e) => setForm({ ...form, loginPassword: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              New here? <button onClick={() => setIsLogin(false)} className="text-blue-600 font-semibold">Sign Up</button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <input type="text" placeholder="Username" required value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Mobile" required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="Password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors">Sign Up</button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Already have an account? <button onClick={() => setIsLogin(true)} className="text-blue-600 font-semibold">Login</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal; // ✅ Make sure this is default export
