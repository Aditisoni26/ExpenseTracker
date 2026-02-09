import React, { useState } from "react";
import "../App.css";
import Alert from "./Alert";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
 const [alert, setAlert] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (!res.ok) {
      setAlert({
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }

    alert("Signup successful");
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Sign Up</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            className="login-input"
            onChange={handleChange}
          />

          <input
            name="username"
            placeholder="Username"
            className="login-input"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login-input"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            onChange={handleChange}
          />

          <button className="login-btn">Sign Up</button>
        </form>

        <p className="login-footer-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
