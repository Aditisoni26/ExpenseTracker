import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    // 🔑 STORE TOKEN (THIS IS THE POINT OF LOGIN)
    localStorage.setItem("token", data.token);

    alert("Login successful");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">
          Welcome back. Enter your credentials.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login-input"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-footer-text">
          Don’t have an account?{" "}
          <Link to="/signup" className="login-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
