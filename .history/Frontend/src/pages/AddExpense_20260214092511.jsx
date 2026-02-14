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
    setForm({
  name: "",
  amount: "",
  date: "",
  category: ""
});

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
         <div className="form-group">
  <label>Category</label>

  <select
    className="category-select"
    value={form.category}
    onChange={(e) =>
      setForm({ ...form, category: e.target.value })
    }
  >
    <option value="">Select Category</option>
    <option value="Food">Food</option>
    <option value="Rent">Rent</option>
    <option value="Travel">Travel</option>
    <option value="Bills">Bills</option>
    <option value="Shopping">Shopping</option>
    <option value="Other">Other</option>
  </select>
</div>



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
