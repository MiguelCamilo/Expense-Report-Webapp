import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
        {/* best practice is create a seperate component for longer code */}
        {/* remember that you want to add this component to the App.js to render it */}
        <ExpenseForm />
    </div>
  );
};

export default NewExpense;
