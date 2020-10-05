import React from "react";
import ExcersiseSet from "./ExcersiseSet";
import classes from "./ExcersiseCard.module.css";

const ExcersiseCard: React.FC = () => {
  return (
    <div className={classes.ExcersiseCard}>
      <h2>Excersise Name</h2>
      <ExcersiseSet />
      <ExcersiseSet />
      <ExcersiseSet />
    </div>
  );
};

export default ExcersiseCard;
