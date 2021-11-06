import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

//from App.js we pass the expenseArray throught props "items"
const ExpensesList = (props) => {
  const [yearChange, setYearChange] = useState('2021');
  // a function that handles the data from the onYearChange props, by setting that data to setYearChange
  const saveYearChangeHandler = (chosenYear) => {
    setYearChange(chosenYear);
  };
  // filters through expense array and return array object/s that matches chosen year.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearChange;
  });
  // if filtered expense-data-array has empty data, return "No Expenses Found" else iterate through the array and, map elements to ExpenseItem attribute
  let expensesContent = <p>No Expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={yearChange}
          onYearChange={saveYearChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default ExpensesList;
