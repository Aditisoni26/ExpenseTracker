import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-top">
        <h1>Dashboard</h1>
        <p>Overview of your financial activity</p>
      </div>

      {/* CARDS */}
      <div className="dashboard-cards">
        <div className="card primary">
          <span>Current Balance</span>
          <h2>₹ 0</h2>
        </div>

        <div className="card">
          <span>Total Income</span>
          <h3>₹ 0</h3>
        </div>

        <div className="card">
          <span>Total Expenses</span>
          <h3>₹ 0</h3>
        </div>

        <div className="card">
          <span>Transactions</span>
          <h3>0</h3>
        </div>
      </div>

      {/* ACTIVITY */}
      <div className="activity">
        <h3>Recent Transactions</h3>
        <div className="activity-empty">
          <p>No transactions yet</p>
          <span>Add income or expense to see activity</span>
        </div>
      </div>
    </div>
  );
}
