import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Dashboard</h1>

      {/* Stats section */}
      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Total Expenses</p>
          <h2 className="stat-value">₹ 0</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">This Month</p>
          <h2 className="stat-value">₹ 0</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">Total Transactions</p>
          <h2 className="stat-value">0</h2>
        </div>
      </div>

      {/* Recent activity */}
      <div className="card">
        <h3 className="card-title">Recent Activity</h3>
        <p className="muted-text">No expenses added yet.</p>
      </div>
    </div>
  );
}
