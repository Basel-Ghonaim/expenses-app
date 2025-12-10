import { type FormEvent } from "react";
import { formRows } from "../../schema/formSchema";
import type { Expenses } from "../../../../types/expenses";
import { useExpensesForm } from "../../hooks/ExpensesForm/useExpensesForm";

export default function ExpensesForm() {
  const defaultValueExpense: Expenses = {
    title: "",
    date: "",
    value: 0,
    description: "",
  };

  const { expense, handleChangeInput, checkData, saveData, resetData } =
    useExpensesForm(defaultValueExpense);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (checkData(expense)) {
      saveData(expense);
      resetData();
    } else {
      alert("complete all feilds");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formRows.map((row, rowIndex) => (
        <div className="form-row" key={rowIndex}>
          {row.fields.map((fields, fieldsIndex) => (
            <div className="form-group" key={fieldsIndex}>
              <label htmlFor={fields.name}>{fields.label}</label>
              <input
                type={fields.type}
                name={fields.name}
                id={fields.name}
                placeholder={fields.placeholder}
                onChange={handleChangeInput}
                value={expense[fields.name as keyof Expenses]}
              />
            </div>
          ))}
        </div>
      ))}
      <button className="save-btn" type="submit">
        Save
      </button>
    </form>
  );
}
