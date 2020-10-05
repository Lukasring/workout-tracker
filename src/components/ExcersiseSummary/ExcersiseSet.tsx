import React from "react";
import classes from "./ExcersiseSet.module.css";

type Props = {
  setNumber: number;
  weight: number;
  reps: number;
};
const ExcersiseSet: React.FC<Props> = (props) => {
  return (
    <div className={classes.ExcersiseSet}>
      <p>{props.setNumber}</p>
      <p>{`${props.weight}kg`}</p>
      <p>{`${props.reps} reps`}</p>
    </div>
  );
};

export default ExcersiseSet;
