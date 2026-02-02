import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="page dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">
            Track your income, expenses, and balance at a glance
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* LEFT COLUMN */}
        <div className="dashboard-left">
          {/* Balance */}
          <div className="balance-card">
            <span>Available Balance</span>
            <h2>₹ 0</h2>
            <p className="balance-hint">
              This is your net balance after income & expenses
            </p>
          </div>

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-mini income">
              <span>Total Income</span>
              <h3>₹ 0</h3>
            </div>

            <div className="stat-mini expense">
              <span>Total Expenses</span>
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
              <div className="empty-icon">📊</div>
              <p>No transactions yet</p>
              <span>
                Start by adding your first income or expense
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
