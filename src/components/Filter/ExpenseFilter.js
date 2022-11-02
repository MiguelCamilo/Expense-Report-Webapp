import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectedHandler = (event) => {
    // captures the year selected event
    props.onYearSelected(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* props.selected comes from expenses.js on the 
        ExpensesFilter component */}
        <select value={props.selected} onChange={selectedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
