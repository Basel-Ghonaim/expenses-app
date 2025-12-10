import { useState } from "react";
import type { Expenses } from "../../types/expenses";
import { ExpensesContext } from "./ExpenseesContext";

export const ExpensesContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [expenses, setExpenses] = useState<Expenses[]>([]);

  const setNewExpenses = (newExpenses: Expenses) => {
    setExpenses((prev): Expenses[] => {
      return [newExpenses, ...prev];
    });
  };

  return (
    <ExpensesContext.Provider
      value={{ expenses: expenses, setExpenses: setNewExpenses }}
    >
      {props.children}
    </ExpensesContext.Provider>
  );
};
