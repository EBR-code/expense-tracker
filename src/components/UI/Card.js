import './Card.css';
// serves as a shell like a div
const Card = props => {
  //below "props.className" is "expenses-list"
  const classes = 'card ' + props.className;
  //"<div className={classes}" is SAME as: "<div className="card expenses-list"></div>
  //props.children "children" is a reserved name and the value will always be the content between opening and closing tags of your custom component.
  return <div className={classes}> {props.children} </div>;
};

export default Card;
