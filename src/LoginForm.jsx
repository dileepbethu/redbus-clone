// src/pages/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
console.log("API =", import.meta.env.VITE_API_BASE_URL);


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      login(data.user);
      alert("Login successful");
      navigate("/");
    } else {
      alert(data.msg);
    }
  } catch (err) {
    alert("Login failed. Check server connection.");
  }
};

return (
    <div className="container mt-5 w-50">
      <h2>Login</h2>
      <input className="form-control mb-2" placeholder="Email" name="email" onChange={handleChange} />
      <input className="form-control mb-2" placeholder="Password" type="password" name="password" onChange={handleChange} />
      <button className="btn btn-danger" onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;