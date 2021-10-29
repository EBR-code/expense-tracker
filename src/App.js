// App.js is called into index.js on the ReactDOM.render(<App />) line at the location within index.html (in the public folder that has the div with an id of root)
import React from 'react';
import ExpensesList from './components/Expenses/ExpensesList';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
  // temporary expenses data for testing purposes.
  const expensesArray = [
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
  //function we passed through a prop to get expenseData from child component NewExpense which it also got from its child component ExpenseForm.
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div>
      {/*  */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* Passes expenseArray data as a props "items" to ExpensesList.js */}
      <ExpensesList items={expensesArray} />
    </div>
  );
};

export default App;
