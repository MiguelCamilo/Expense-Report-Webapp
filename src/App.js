import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

const App = () => {
  // object created to store data
  const expenses = [
    {
      title: "Grocery",
      amount: 150.0,
      date: new Date(2022, 3, 28),
    },
    {
      title: "Car Insurance",
      amount: 294.96,
      date: new Date(2022, 4, 28),
    },
    {
      title: "Rent",
      amount: 1000,
      date: new Date(2022, 7, 28),
    },
    {
      title: "Gas",
      amount: 55.0,
      date: new Date(2022, 2, 17),
    },
  ];
  return (
    <div>
      <NewExpense />
      {/* adding the expenses=expenses is necessary to pass the data from the obj */}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
