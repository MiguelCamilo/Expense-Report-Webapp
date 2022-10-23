import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  // this is allowing us to pass data from a previous component
  // up to a another component, ( child > parent )
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // pulls in data from from the expenseForm component,
    // specifically from the expenseData object within
    const expenseData = {
      ...enteredExpenseData, // "..." pulls all the key value pairs from the object
      id: Math.random().toString(), //
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* best practice is create a seperate component for longer code */}
      {/* remember that you want to add this component to the App.js to render it */}
      {/* onSaveExpenseData is a custom property we made */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
