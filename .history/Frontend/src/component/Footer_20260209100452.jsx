import React from "react";
import "../App.css";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3 className="footer-title">ExpenseTracker</h3>
          <p className="footer-desc">
            Track your daily expenses simply and clearly.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Product</h4>
          <ul className="footer-list">
            <li>Dashboard</li>
            <li>Add Expense</li>
            <li>Reports</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-list">
            <li>Help</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {year} ExpenseTracker. All rights reserved.
      </div>
    </footer>
  );
}
