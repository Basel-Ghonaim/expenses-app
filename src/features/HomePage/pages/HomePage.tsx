import { useContext } from "react";
import pannerImage from "../../../assets/image/m1.png";
import ExpensesForm from "../components/expensesForm/ExpensesForm";
import ExpensesItem from "../components/expensesITem/ExpensesItem";
import { ExpensesContext } from "../../../context/expensesContext/ExpenseesContext";

export default function HomePage() {
  const { expenses } = useContext(ExpensesContext);
  return (
    <div className="content-wrapper">
      <section className="top-section">
        <img src={pannerImage} alt="image-title" />
        <section>
          <span>Welcome to Expenses Manager</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            autem, ab suscipit nam ipsum consectetur obcaecati libero, quidem
            unde, saepe eligendi qui perferendis. Nisi architecto doloribus
            corporis a perspiciatis quod?
          </p>
          <ExpensesForm />
        </section>
      </section>
      <section className="bottom-section">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpensesItem expense={expense} key={expense.id} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
