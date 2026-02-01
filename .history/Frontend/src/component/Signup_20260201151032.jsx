import React from "react";
import "../App.css";

export default function Signup() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Sign Up</h2>
        <p className="login-subtitle">
          Create a new account
        </p>

        <form className="login-form">
          <input
            type="text"
            placeholder="Full Name"
            className="login-input"
          />

          <input
            type="email"
            placeholder="Email"
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />

          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
