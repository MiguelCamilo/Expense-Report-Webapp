import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../Filter/ExpenseFilter";

import { useState } from "react";

const Expenses = (props) => {
  const [year, setYearSelected] = useState("2020");

  const yearSelectedHandler = (selectedHandler) => {
    setYearSelected(selectedHandler);
  };
  return (
    <div>
      <Card className="expenses">
        {/* this is how the custom component is used after being imported from another file */}
        {/* the attributes are data passed from the object in App.js */}
        <ExpenseFilter selected={year} onYearSelected={yearSelectedHandler} />
        <ExpenseItem
          // props allows for use the title from the object in app.js
          // and expenses brings over all data within the object
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
