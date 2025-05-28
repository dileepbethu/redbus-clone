import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Import context

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Get login from AuthContext

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`https://redbus-clone-3.onrender.com/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful");

        login(data.user); // ✅ Save user globally
        localStorage.setItem("user", JSON.stringify(data.user)); // Optional: Save in localStorage too

        navigate("/"); // Redirect to home or wherever you want
      } else {
        alert(data.msg || "Signup failed");
      }
    } catch (error) {
      alert("Error during signup. Please check server connection.");
    }
  };

  return (
    <div className="container mt-5 w-50">
      <h2>Sign Up</h2>
      <input className="form-control mb-2" placeholder="Name" name="name" onChange={handleChange} />
      <input className="form-control mb-2" placeholder="Email" name="email" onChange={handleChange} />
      <input className="form-control mb-2" placeholder="Password" type="password" name="password" onChange={handleChange} />
      <button className="btn btn-danger" onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default Signup;
