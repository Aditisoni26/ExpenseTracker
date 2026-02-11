import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ExpenseProvider } from "./context/ExpenseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ExpenseProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </ExpenseProvider>
);
