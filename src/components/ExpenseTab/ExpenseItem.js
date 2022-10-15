import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import "./Card.css";

// by passing in a param of "props" to the func it allows
// for data within the object in App.js to be passed
function ExpenseItem(props) {
  return (
    // in jsx you have can only have one root element
    // meaning you have a parent div that wraps around the other divs
    <Card className="expense-item">
      {/* props still needs to be passed back to the ExpenseDate component */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* props.title in brackets is how we call our created const */}
        <h2> {props.title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
