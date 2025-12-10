import { createRoot } from "react-dom/client";
import HomePage from "./features/HomePage/pages/HomePage";

// Css Files
import "./assets/css/style.css";
import { ExpensesContextProvider } from "./context/expensesContext/ExpensesContextProvider";

createRoot(document.getElementById("root")!).render(
  <ExpensesContextProvider>
    <HomePage />
  </ExpensesContextProvider>
);
