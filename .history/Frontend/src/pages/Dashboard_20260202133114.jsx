import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="page dashboard">
      {/* TOP SUMMARY */}
      <div className="dashboard-hero">
        <div className="hero-left">
          <h1 className="hero-title">Expense Overview</h1>
          <p className="hero-subtitle">
            Track and manage your spending efficiently
          </p>

          <div className="hero-amount">
            <span>Total Spent</span>
            <h2>₹ 0</h2>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stat">
            <p>This Month</p>
            <h3>₹ 0</h3>
          </div>
          <div className="hero-stat">
            <p>Transactions</p>
            <h3>0</h3>
          </div>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="dashboard-grid">
        <div className="card large">
          <h3 className="card-title">Recent Expenses</h3>
          <div className="empty-state">
            <p>No expenses recorded</p>
            <span>Add an expense to start tracking</span>
          </div>
        </div>

        <div className="card side">
          <h3 className="card-title">Quick Actions</h3>

          <button className="action-btn primary">
            + Add Expense
          </button>

          <button className="action-btn">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
