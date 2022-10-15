// import { Children } from "react";
import "./Card.css";

function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;

// read through Q&A for props.children to get an understanding
