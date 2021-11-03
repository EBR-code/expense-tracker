import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  //function we passed through a prop to get expenseData from child component-ExpenseForm.
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
      {/* gets the submitted expense data from ExpenseForm. */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
