import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

//from App.js we pass the expenseArray throught props "items"
const ExpensesList = props => {
  return (
    //below "className" is a "props" name of the "Card" component
    // Not and "HTML (CSS) attribute name."
    //because the <Card ....../> is a JSX tag, NOT and "HTML" element
    <Card className="expenses-list">
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
  );
};

export default ExpensesList;
