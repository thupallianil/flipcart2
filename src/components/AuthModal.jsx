import React, { useState, useEffect } from "react";

const AuthModal = ({ closeModal, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || []
  );
  const [form, setForm] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    identifier: "",
    loginPassword: ""
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    const exists = users.find(
      (u) => u.email === form.email || u.mobile === form.mobile || u.username === form.username
    );
    if (exists) { alert("User exists! Login instead."); setIsLogin(true); return; }

    const newUser = { username: form.username, mobile: form.mobile, email: form.email, password: form.password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Account created! Please login.");
    setIsLogin(true);
    setForm({ username: "", mobile: "", email: "", password: "", identifier: "", loginPassword: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) =>
        (u.email === form.identifier || u.mobile === form.identifier || u.username === form.identifier) &&
        u.password === form.loginPassword
    );
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      if (onLogin) onLogin(user);
      closeModal();
    } else alert("Invalid credentials!");
    setForm({ ...form, identifier: "", loginPassword: "" });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white-gray bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-11/12 md:w-3/4 max-w-5xl flex overflow-hidden">
        
        {/* Left - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white w-1/2 p-8 gap-4">
          <h2 className="text-5xl font-bold mb-2">Flipkart</h2>
          <p className="text-center text-lg">Welcome to Flipkart! Explore deals, products, and more. Login to continue shopping.</p>
          <img src="/images.png" alt="Brand" className="w-44 h-44 object-cover rounded-full shadow-lg mt-4"/>
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 p-8 relative flex flex-col justify-center">
          <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black text-3xl">&times;</button>
          <h2 className="text-3xl font-bold text-center mb-6">{isLogin ? "Login" : "Sign Up"}</h2>

          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Email / Mobile / Username"
                value={form.identifier}
                onChange={(e) => setForm({ ...form, identifier: e.target.value })}
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="password"
                placeholder="Password"
                value={form.loginPassword}
                onChange={(e) => setForm({ ...form, loginPassword: e.target.value })}
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Login
              </button>
              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <button onClick={() => setIsLogin(false)} className="text-blue-600 underline">Sign Up</button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                Sign Up
              </button>
              <p className="text-center text-sm">
                Already have an account?{" "}
                <button onClick={() => setIsLogin(true)} className="text-blue-600 underline">Login</button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
