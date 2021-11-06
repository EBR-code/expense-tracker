import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //3 states for the ExpenseForm inputs.
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    // passes data from title input to the 2nd element in the title state.
    // event.target.value is from the browser
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // function handler that gets and passed the data from the form to
  const submitHandler = (event) => {
    //prevent page to reload on form-submit
    event.preventDefault();
    // packs  data from submitted form input into the expenseData object
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      // parse enteredDate to the new Date constructor to convert to a date object.
      date: new Date(enteredDate)
    };
    //passes data from here to parent component NewExpenses
    props.onSaveExpenseData(expenseData);
    //after passing expense data to NewExpense, we now reset state
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            // onChange listens to changes in title input, and executes the function titleChangeHandler
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
