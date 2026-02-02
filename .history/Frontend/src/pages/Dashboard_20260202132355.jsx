import React from "react";
import "../App.css";

export default function Dashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Dashboard</h1>

      <div className="card">
        <h3>Total Expenses</h3>
        <p className="amount">₹ 0</p>
      </div>

      <div className="card">
        <h3>Recent Activity</h3>
        <p>No expenses added yet.</p>
      </div>
    </div>
  );
}
