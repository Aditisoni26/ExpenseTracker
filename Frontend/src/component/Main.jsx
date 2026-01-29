import React from "react";

export default function Main() {
  return (
    <main className="main-content">
      <h2>Add Expense+</h2>

      <form className="expense-form">
        <input
          type="text"
          placeholder="Expense name"
          className="expense-input"
        />

        <input
          type="number"
          placeholder="Amount"
          className="expense-input"
        />

        <button type="submit" className="expense-btn">
          Add Expense
        </button>
      </form>
    </main>
  );
}
