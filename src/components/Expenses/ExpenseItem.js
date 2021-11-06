import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//pass expenseArray data from App.js < ExpensesList.js
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/* Pass date data from expenseArray to ExpenseDate.js */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₱ {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
