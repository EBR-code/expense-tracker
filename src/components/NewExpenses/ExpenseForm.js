import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  //3 states for the ExpenseForm inputs.
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => {
    // passes data from title input to the 2nd element in the title state.
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = event => {
    // passes data from amount input to the 2nd element in the amount state.
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = event => {
    // passes data from date input to the 2nd element in the date state.
    setEnteredDate(event.target.value);
  };

  const submitHandler = event => {
    //prevent page to reload on form submit
    event.preventDefault();
    // passes data from submitted form input into the expenseData object
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      // parse enteredDate to the new Date constructor to convert to a date object.
      date: new Date(enteredDate)
    };
    console.log(expenseData);
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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
