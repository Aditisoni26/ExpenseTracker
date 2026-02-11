import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

export default function Reports() {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <>
      <h2>Reports</h2>
      <p>Total spent so far: ₹{total}</p>

      <ul>
        {expenses.map(e => (
          <li key={e._id}>
            {e.date} | {e.name} | ₹{e.amount}
          </li>
        ))}
      </ul>
    </>
  );
}
