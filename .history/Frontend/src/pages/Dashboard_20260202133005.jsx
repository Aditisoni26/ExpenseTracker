import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="page">
      {/* Page Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            Overview of your expenses
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <p className="stat-label">Total Expenses</p>
          <h2 className="stat-value">₹ 0</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">This Month</p>
          <h2 className="stat-value">₹ 0</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">Transactions</p>
          <h2 className="stat-value">0</h2>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent Activity</h3>
        </div>

        <div className="empty-state">
          <p>No expenses added yet</p>
          <span>Add your first expense to see activity here</span>
        </div>
      </div>
    </div>
  );
}
