import { NavLink } from "react-router-dom";
import React from "react";

export default function Header() {
 
  function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}

  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">ExpenseTracker</span>
      </div>

      <nav className="header-center">
        <NavLink to="/Dashboard" className="nav-link">
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
        <NavLink to="/login" className="signup-btn">
          Login
        </NavLink>
      </div>
    </header>
  );
}
