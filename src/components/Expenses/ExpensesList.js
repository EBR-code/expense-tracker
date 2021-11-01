import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesList.css';

//from App.js we pass the expenseArray throught props "items"
const ExpensesList = props => {
  const [yearChange, setYearChange] = useState('2021');
  // a function that handles the data from the onYearChange props, by setting that data to setYearChange state
  const saveYearChangeHandler = chosenYear => {
    setYearChange(chosenYear);
    console.log(chosenYear);
  };
  return (
    <div>
      <Card className="expenses-list">
        <ExpensesFilter
          defaultYear={yearChange}
          onYearChange={saveYearChangeHandler}
        />
        {/* Pass props "items" from expenseArray in App.js to ExpenseItem through props  */}
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpensesList;
