import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // TODO add "Add New Expense" Button which intially shows instead of the ExpenseForm
  const [isEditing, setIsEditing] = useState(false);

  const addNewExpenseHandler = () => {
    // listen when the button gets clicked,
    setIsEditing(true);
    // if it gets clicked show ExpenseForm,
  };
  const cancelAddNewExpenseHandler = () => {
    setIsEditing(false);
  };
  //function we passed through a prop to get expenseData from child component-ExpenseForm.
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
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {/* gets the submitted expense data from ExpenseForm. */}
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
