import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
   const [form, setForm] = useState({
      email: "",
      password: ""
    });
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">
          Welcome back. Enter your credentials.
        </p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            onCh
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-footer-text">
          Don’t have an account? <Link to="/signup" className="login-link">
    Sign up
  </Link>
        </p>
      </div>
    </div>
  );
}
