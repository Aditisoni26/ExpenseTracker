import { NavLink } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">ExpenseTracker</span>
      </div>

      
        <NavLink to="/" className="nav-link">
          Dashboard
        </NavLink>

        <NavLink to="/add-expense" className="nav-link">
          Add Expense
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
