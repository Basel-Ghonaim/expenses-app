import { createContext } from "react";
import type { Expenses } from "../../types/expenses";

export const ExpensesContext = createContext<{
  expenses: Expenses[];
  setExpenses: (newExpense: Expenses) => void;
}>({
  expenses: [],
  setExpenses: () => {},
});
