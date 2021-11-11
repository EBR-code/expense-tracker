import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // listens when Add New Expense Button is clicked.
  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };
  // listens when Cancel button in ExpenseForm is clicked
  const cancelAddNewExpenseHandler = () => {
    setIsEditing(false);
  };
  //listens if data is submitted from ExpenseForm then adds an ID then, pass.
  const saveExpenseDataHandler = (enteredExpenseData) => {
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
      {/* if isEditing false just show the button, else show the Expense Form */}
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {/* gets the submitted expense data from ExpenseForm, passes it into the saveExpenseHandler*/}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
