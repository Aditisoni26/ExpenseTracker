import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">
          Track your income and expenses in one place
        </p>
      </div>

      <div className="dashboard-simple">
        {/* Balance */}
        <div className="balance-card">
          <span className="balance-label">Current Balance</span>
          <h2>₹ 0</h2>
          <p className="balance-hint">
            Your balance will update as you add income and expenses
          </p>
        </div>

        {/* Activity */}
        <div className="dashboard-section">
          <div className="section-header">
            <h3>Recent Transactions</h3>
          </div>

          <div className="section-body empty">
            <p>No transactions yet</p>
            <span>Add your first income or expense to get started</span>
          </div>
        </div>
      </div>
    </div>
  );
}
