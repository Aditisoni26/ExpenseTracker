//Report.jsx
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import "../App.css";

export default function Reports() {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

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
      </div>
    </div>
  );
}
