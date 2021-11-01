import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = props => {
  // a function that handles the data from the onChange props, by listening to an event that changes in the "select year"
  const yearChangeHandler = event => {
    props.onYearChange(event.target.value);
    // console.log(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* props.defaultYear passed from a state in Expenseslist  */}
        {/* onChange listens to an event in the year Filter and passes it to a function that handles the data */}
        <select value={props.defaultYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpensesFilter;
