import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="dash">
      {/* Header */}
      <div className="dash-header">
        <h1>Dashboard</h1>
        <p>Manage your money in one place</p>
      </div>

      {/* Hero Balance */}
      <div className="balance-hero">
        <div>
          <span>Available Balance</span>
          <h2>₹ 0</h2>
          <p>Updated after every transaction</p>
        </div>
      </div>

      {/* Stats */}
      <div className="dash-stats">
        <div className="stat income">
          <span>Income</span>
          <h3>₹ 0</h3>
        </div>

        <div className="stat expense">
          <span>Expenses</span>
          <h3>₹ 0</h3>
        </div>

        <div className="stat neutral">
          <span>Transactions</span>
          <h3>0</h3>
        </div>
      </div>

      {/* Activity */}
      <div className="dash-activity">
        <h3>Recent Transactions</h3>
        <div className="activity-empty">
          <p>No transactions yet</p>
          <span>Add income or expense to get started</span>
        </div>
      </div>
    </div>
  );
}
