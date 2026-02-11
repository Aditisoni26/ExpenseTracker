import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function AddExpense() {
  const { addExpense } = useContext(ExpenseContext);

  const [form, setForm] = useState({
    name: "",
    amount: "",
    date: "",
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
    <form onSubmit={submit}>
      <input placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="number" placeholder="Amount"
        value={form.amount}
        onChange={e => setForm({ ...form, amount: e.target.value })} />
      <input type="date"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })} />
      <button>Add Expense</button>
    </form>
  );
}
