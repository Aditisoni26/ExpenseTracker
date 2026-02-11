import { useContext, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { ExpenseContext } from "../context/ExpenseContext";


export default function Dashboard() {
  const { expenses, fetchExpenses } = useContext(ExpenseContext);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <>
      <h2>Total Expenses: ₹{total}</h2>
      <h4>Total Transactions: {expenses.length}</h4>

      <ul>
        {expenses.map(e => (
          <li key={e._id}>
            {e.name} - ₹{e.amount}
          </li>
        ))}
      </ul>
    </>
  );
}
