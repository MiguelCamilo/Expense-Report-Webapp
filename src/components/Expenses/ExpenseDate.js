import "./ExpenseDate.css";

// created a seperate component just for the expense date
const ExpenseDate = (props) => {
  // toLocaleString in MDN docs for more info
  // best practice to keep complex code stored outside
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
};

export default ExpenseDate;
