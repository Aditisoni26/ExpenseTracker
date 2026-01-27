import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-logo">ExpenseTracker</h3>
          <p className="footer-text">
            Simple app to track your daily expenses.
          </p>
        </div>

        <div className="footer-right">
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} ExpenseTracker. All rights reserved.
      </div>
    </footer>
  );
}
