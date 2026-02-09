import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  function logout() {
    localStorage.removeItem("token");
    navigate("/login"); // redirect after logout
  }

  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">ExpenseTracker</span>
      </div>

      <nav className="header-center">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>

        <NavLink to="/add-transaction" className="nav-link">
          Add Transaction
        </NavLink>

        <NavLink to="/reports" className="nav-link">
          Reports
        </NavLink>
      </nav>

      <div className="header-right">
        {isLoggedIn ? (
          <button onClick={logout} className="login-btn">
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="signup-btn">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}
