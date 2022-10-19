import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

import "./ExpenseItem.css";
import "../UI/Card.css";

// by passing in a param of "props" to the func it allows
// for data within the object in App.js to be passed
const ExpenseItem = (props) => {
  // title holds the current value and setTitle is a 
  // func that holds the updated value for title
  const [title, setTitle] = useState(props.title); // remember that props.title comes from the obj in App.js

  const buttonClickHandler = () => {
    setTitle("Updated!")
  };
  return (
    // in jsx you have can only have one root element
    // meaning you have a parent div that wraps around the other divs
    <Card className="expense-item">
      {/* props still needs to be passed back to the ExpenseDate component */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* props.title in brackets is how we call our created const */}
        <h2> {title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* reason we dont add paranthesis on
       buttonClickHandler cause it will execute the above function 
       when react returns the <Card> component and that would be too early */}
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
