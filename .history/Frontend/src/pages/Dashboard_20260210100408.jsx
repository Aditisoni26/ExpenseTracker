//Dashboard.jsx
import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="dash">
      {/* HEADER */}
      <div className="dash-header">
        <h1>Dashboard</h1>
        <p>Manage your income and expenses in one place</p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="dash-main">
        {/* LEFT: 2 x 2 CARDS */}
        <div className="dash-cards">
          <div className="card balance">
            <span>Available Balance</span>
            <h2>₹ 0</h2>
          </div>

          <div className="card income">
            <span>Total Income</span>
            <h3>₹ 0</h3>
          </div>

          <div className="card expense">
            <span>Total Expenses</span>
            <h3>₹ 0</h3>
          </div>

          <div className="card neutral">
            <span>Transactions</span>
            <h3>0</h3>
          </div>
        </div>

        {/* RIGHT: RECENT TRANSACTIONS */}
        <div className="dash-activity">
          <h3>Recent Transactions</h3>

          <div className="activity-empty">
            <p>No transactions yet</p>
            <span>Add income or expense to get started</span>
          </div>
        </div>
      </div>
    </div>
  );
}
