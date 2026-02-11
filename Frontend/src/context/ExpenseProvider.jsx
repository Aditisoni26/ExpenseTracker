import { useState } from "react";
import { ExpenseContext } from "./ExpenseContext";
import api from "../utils/api";

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  async function fetchExpenses() {
    const res = await api.get("/expenses");
    setExpenses(res.data);
  }

  async function addExpense(expense) {
    await api.post("/expenses", expense);
    fetchExpenses();
  }

  return (
    <ExpenseContext.Provider
      value={{ expenses, fetchExpenses, addExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
