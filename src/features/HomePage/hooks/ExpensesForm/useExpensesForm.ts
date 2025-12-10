import { useContext, useState, type ChangeEvent } from "react";
import type { Expenses } from "../../../../types/expenses";
import { ExpensesContext } from "../../../../context/expensesContext/ExpenseesContext";

export const useExpensesForm = (defaultExpense: Expenses) => {
  const [expense, setExpense] = useState(defaultExpense);

  const { setExpenses } = useContext(ExpensesContext);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setExpense((prev) => ({ ...prev, [name as keyof Expenses]: value }));
  };

  const checkData = (expense: Expenses): boolean =>
    Object.values(expense).every(
      (val) => val !== "" && val !== null && val !== undefined
    );

  const saveData = (expense: Expenses): void =>
    setExpenses({ ...expense, id: Math.random() });

  const resetData = (): void => setExpense(defaultExpense);

  return { expense, handleChangeInput, checkData, saveData, resetData };
};
