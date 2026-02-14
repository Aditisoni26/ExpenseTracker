import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import "../App.css";

export default function Reports() {
  const { expenses } = useContext(ExpenseContext);

  // Total
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  // Category Breakdown
  const breakdown = {};
  expenses.forEach((e) => {
    breakdown[e.category] =
      (breakdown[e.category] || 0) + e.amount;
  });

  return (
    <div className="page reports-page">
      <div className="reports-header">
        <h1 className="reports-title">Reports</h1>
        <p className="reports-subtitle">
          Insights into your spending behavior
        </p>
      </div>

      <div className="reports-grid">
        <div className="report-card highlight">
          <h3>Total Spent</h3>
          <p>₹ {total}</p>
        </div>

        <div className="report-card">
          <h3>Total Transactions</h3>
          <p>{expenses.length}</p>
        </div>

        <div className="report-card">
          <h3>Category Breakdown</h3>

          {Object.keys(breakdown).length === 0 ? (
            <p>No data yet</p>
          ) : (
            <ul style={{ marginTop: "10px" }}>
              {Object.entries(breakdown).map(([cat, amount]) => (
                <li key={cat} style={{ marginBottom: "6px" }}>
                  {cat} — ₹ {amount}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
