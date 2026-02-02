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

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* LEFT COLUMN */}
        <div className="dashboard-left">
          {/* Balance */}
          <div className="balance-card">
            <span>Current Balance</span>
            <h2>₹ 0</h2>
          </div>

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-mini income">
              <span>Income</span>
              <h3>₹ 0</h3>
            </div>

            <div className="stat-mini expense">
              <span>Expenses</span>
              <h3>₹ 0</h3>
            </div>

            <div className="stat-mini neutral">
              <span>Transactions</span>
              <h3>0</h3>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="dashboard-right">
          <div className="dashboard-section">
            <div className="section-header">
              <h3>Recent Transactions</h3>
            </div>

            <div className="section-body empty">
              <p>No transactions yet</p>
              <span>Add income or expense to see activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
