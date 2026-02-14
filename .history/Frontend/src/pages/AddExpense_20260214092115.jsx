//Addexpense.jsx
import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import "../App.css";

export default function AddExpense() {
  const { addExpense } = useContext(ExpenseContext);

  const [form, setForm] = useState({
    name: "",
    amount: "",
    date: "",
      category: "",
  });

  const submit = (e) => {
    e.preventDefault();
    addExpense({
      ...form,
      amount: Number(form.amount),
    });
    setForm({ name: "", amount: "", date: "" });
  };

  return (
    <div className="page add-expense-page">
      <div className="add-expense-card">
        <div className="add-expense-header">
          <h1>Add Expense</h1>
          <p>Enter details of your new expense</p>
        </div>

        <form className="expense-form" onSubmit={submit}>
          <div className="form-group">
            <label>Expense Name</label>
            <input
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>
         /* =========================
   CATEGORY BREAKDOWN
========================= */

.category-list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border-radius: 10px;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.category-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.category-name {
  font-size: 14px;
  font-weight: 500;
  color: #334155;
}

.category-amount {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
}



          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />
          </div>

          <button className="primary-btn full">
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}
