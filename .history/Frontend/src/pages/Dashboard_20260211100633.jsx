import { useContext, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import "../App.css";

export default function Dashboard() {
  const { expenses, fetchExpenses } = useContext(ExpenseContext);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="dash">
      <div className="dash-header">
        <h1>Dashboard</h1>
        <p>Manage your income and expenses in one place</p>
      </div>

      <div className="dash-main">
        <div className="dash-cards">
          <div className="card balance">
            <span>Total Expenses</span>
            <h2>₹ {total}</h2>
          </div>

          <div className="card neutral">
            <span>Transactions</span>
            <h3>{expenses.length}</h3>
          </div>
        </div>

        <div className="dash-activity">
          <h3>Recent Transactions</h3>

          {expenses.length === 0 ? (
            <div className="activity-empty">
              <p>No transactions yet</p>
              <span>Add expense to get started</span>
            </div>
          ) : (
            <ul style={{ padding: "20px" }}>
              {expenses.slice(-5).reverse().map((e) => (
                <li key={e._id}>
                  {e.name} - ₹{e.amount}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
