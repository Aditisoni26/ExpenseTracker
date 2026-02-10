//Dashboard.jsx
import React from "react";
import "../App.css";

export default function AddExpense() {
  return (
    <div className="page add-expense-page">
      <div className="add-expense-card">
        <div className="add-expense-header">
          <h1>Add Expense</h1>
          <p>Enter details of your new expense</p>
        </div>

        <form className="expense-form">
          <div className="form-group">
            <label>Expense Name</label>
            <input
              type="text"
              placeholder="e.g. Grocery, Rent"
            />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              placeholder="₹ 0.00"
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
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
