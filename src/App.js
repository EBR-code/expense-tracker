// App.js is called into index.js on the ReactDOM.render(<App />) line at the location within index.html (in the public folder that has the div with an id of root)
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

// temporary expenses data for testing purposes.
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // function that receives the expense data from NewExpense which it also got from ExpenseForm, then assigns it to a state updating function, to update our stateful list.
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      {/* Receives new expense data from NewExpense, which it also got from ExpenseForm */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* Passes expenseArray data as a props "items" to ExpensesList.js to render as lists. */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
