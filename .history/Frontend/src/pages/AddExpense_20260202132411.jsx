import React from "react";
import "../App.css";

export default function AddExpense() {
  return (
    <div className="page">
      <h1 className="page-title">Add Expense</h1>

      <form className="expense-form">
        <input
          type="text"
          placeholder="Expense Name"
          className="expense-input"
        />

        <input
          type="number"
          placeholder="Amount"
          className="expense-input"
        />

        <input
          type="date"
          className="expense-input"
        />

        <button className="expense-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
}
