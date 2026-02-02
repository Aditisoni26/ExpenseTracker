import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="page dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">
          Overview of your income, expenses, and balance
        </p>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="stat-box">
          <span>Current Balance</span>
          <h2>₹ 0</h2>
        </div>

        <div className="stat-box">
          <span>Total Income</span>
          <h2>₹ 0</h2>
        </div>

        <div className="stat-box">
          <span>Total Expenses</span>
          <h2>₹ 0</h2>
        </div>

        <div className="stat-box">
          <span>Transactions</span>
          <h2>0</h2>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-section">
        <div className="section-header">
          <h3>Recent Transactions</h3>
        </div>

        <div className="section-body empty">
          <p>No transactions added yet</p>
          <span>Your recent income and expenses will appear here</span>
        </div>
      </div>
    </div>
  );
}
