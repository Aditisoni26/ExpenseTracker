import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ExpenseProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </ExpenseProvider>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExpenseProvider } from "./context/ExpenseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
      <App />
  
  </React.StrictMode>
);
