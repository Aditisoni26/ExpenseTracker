import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">ExpenseTracker</span>
      </div>

      <nav className="header-center">
        <button className="nav-link">Dashboard</button>
        <button className="nav-link">Add Expense</button>
        <button className="nav-link">Reports</button>
      </nav>

      <div className="header-right">
        <button className="login-btn"></button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}
