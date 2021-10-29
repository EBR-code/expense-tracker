import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  //function we passed through a prop to get expenseData from child component ExpenseForm.
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      // FIXME later
      id: Math.random().toString()
    };
    // passes expenseData from ExpenseForm to App.js
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      {/* onSaveExpenseData prop naming convention, the prop value should be a function, a function that is triggered when something happens inside of this component */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
