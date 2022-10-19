import { useState } from "react";

import "./ExpenseForm.css"

const ExpenseForm = () => {
    // useState will have an empty string because theres no input when its first rendered
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // "event" in react captures the type of event and inside of the event 
    // the user input is stored, console.log "event.target.value" for output
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
  return <form> 
    {/* first dive is the wrapper div */}
    {/* each first div after will be the input wrapper divs */}
    <div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        {/* onChange allows react to capture every keystroke in that input field */}
        <input type="text" onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
    </div>
    <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
    </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
  </form>;
};

export default ExpenseForm;
