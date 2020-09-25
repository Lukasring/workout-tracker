import React from "react";
import classes from "./ExcersiseTypes.module.css";
const ExcersiseType = (props) => {
  const clickHandler = (event) => {
    props.clicked(event.target.textContent);
  };
  return (
    <ul className={classes.ExcersiseTypes}>
      <li onClick={(event) => clickHandler(event)}>Chest</li>
      <li onClick={(event) => clickHandler(event)}>Triceps</li>
      <li onClick={(event) => clickHandler(event)}>Shoulders</li>
      <li onClick={(event) => clickHandler(event)}>Back</li>
    </ul>
  );
};

export default ExcersiseType;
