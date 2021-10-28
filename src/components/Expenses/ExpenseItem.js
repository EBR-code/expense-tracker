import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//pass expenseArray data from App.js < ExpensesList.js
const ExpenseItem = props => {
  //adding a state to the title, a data which might change
  const [title, setTitle] = useState(props.title);
  // listens to a click event to change the title
  const clickHandler = () => {
    setTitle('Update!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* Pass date data from expenseArray to ExpenseDate.js */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      {/* onClick adds an event listener, to a click event in this button */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
