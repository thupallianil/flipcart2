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

  const newUser = { username: form.username, mobile: form.mobile, email: form.email, password: form.password };
  const updatedUsers = [...users, newUser];
  setUsers(updatedUsers);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  alert("✅ Account created successfully! Please login now.");
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
    alert("✅ Successfully logged in!");
    if (onLogin) onLogin(user);
    closeModal();
  } else {
    alert("❌ Invalid credentials! Please check and try again.");
  }
  setForm({ ...form, identifier: "", loginPassword: "" });
};
