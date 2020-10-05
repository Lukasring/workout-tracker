import React from "react";
import classes from "./ExcersiseSet.module.css";

const ExcersiseSet: React.FC = () => {
  return (
    <div className={classes.ExcersiseSet}>
      <p>Set</p>
      <p>Weight</p>
      <p>Reps</p>
    </div>
  );
};

export default ExcersiseSet;
