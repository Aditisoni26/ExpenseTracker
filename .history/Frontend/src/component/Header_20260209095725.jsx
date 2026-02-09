import { NavLink } from "react-router-dom";
import React from "react";

export default function Header() {
  const isLoggedIn = localStorage.getItem("token");

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
{isLoggedIn ? (
  <button onClick={logout} className="login-btn">Logout</button>
) : (
  <>
    <button className="login-btn">Login</button>
    <button className="signup-btn">Sign Up</button>
  </>
)}

      </div>
    </header>
  );
}
