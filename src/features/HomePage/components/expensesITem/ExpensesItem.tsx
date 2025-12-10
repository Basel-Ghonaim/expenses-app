import type { Expenses } from "../../../../types/expenses";

type ExpenseItemProps = {
  expense: Expenses;
};
export default function ExpensesItem({ expense }: ExpenseItemProps) {
  return (
    <>
      <tr>
        <td>{expense.title}</td>
        <td>{expense.date}</td>
        <td>{expense.value}</td>
        <td>{expense.description}</td>
      </tr>
    </>
  );
}
