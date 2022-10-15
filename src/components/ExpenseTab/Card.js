// this file is a seperate wrapper component
import "./Card.css";

function Card(props) {
  // anything that is recieved as a className from another file gets added to the custom component
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// read through Q&A for props.children to get an understanding
