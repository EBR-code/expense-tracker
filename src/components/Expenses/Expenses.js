import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

//from App.js we pass the expenseArray throught props "items"
const Expenses = props => {
  const [yearChange, setYearChange] = useState('2021');
  // a function that handles the data from an event change in ExpenseFilter, by setting that data to setYearChange
  const saveYearChangeHandler = chosenYear => {
    setYearChange(chosenYear);
  };
  // filters through expense array and return array object/s that matches chosen year.
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === yearChange;
  });

  return (
    // added li for semantic reasons
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            defaultYear={yearChange}
            onYearChange={saveYearChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
