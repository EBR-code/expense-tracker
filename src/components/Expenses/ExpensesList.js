import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesList.css';

//from App.js we pass the expenseArray throught props "items"
const ExpensesList = (props) => {
  const [yearChange, setYearChange] = useState('2021');
  // a function that handles the data from the onYearChange props, by setting that data to setYearChange
  const saveYearChangeHandler = (chosenYear) => {
    setYearChange(chosenYear);
    console.log(yearChange);
    console.log(setYearChange);
  };
  // a function that filters by the year cho
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearChange;
  });
  return (
    <div>
      <Card className="expenses-list">
        <ExpensesFilter
          defaultYear={yearChange}
          onYearChange={saveYearChangeHandler}
        />
        {/* iterate through expense-data-array, pass elements to ExpenseItem attribute */}
        {filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpensesList;
