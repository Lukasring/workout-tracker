import React, { useState } from "react";
import ExcersiseSet from "./ExcersiseSet";
import NumberInput from "../UI/NumberInput/NumberInput";
import classes from "./ExcersiseCard.module.scss";

const WEIGHT_CHANGE = 2.5;
const REPS_CHANGE = 1;

type ExcersiseSet = {
  weight: number;
  reps: number;
};

type Props = {
  excersiseName: string;
};

const ExcersiseCard: React.FC<Props> = (props) => {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [excersiseSets, setExcersiseSet] = useState<ExcersiseSet[]>([]);

  const incrementWeight = () => setWeight(weight + WEIGHT_CHANGE);
  const decrementWeight = () => {
    if (weight - WEIGHT_CHANGE >= 0) {
      setWeight(weight - WEIGHT_CHANGE);
    }
  };
  const weightChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (+event.currentTarget.value >= 0) {
      setWeight(+event.currentTarget.value);
    }
  };

  const incrementReps = () => setReps((prevReps) => prevReps + REPS_CHANGE);
  const decrementReps = () => {
    if (reps - REPS_CHANGE >= 0) {
      setReps((prevReps) => prevReps - REPS_CHANGE);
    }
  };
  const repsChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (+event.currentTarget.value >= 0) {
      setReps(+event.currentTarget.value);
    }
  };

  const addSetHandler = () => {
    const sets: ExcersiseSet[] = [
      ...excersiseSets,
      {
        weight,
        reps,
      },
    ];
    setExcersiseSet(sets);
  };

  return (
    <div className={classes.ExcersiseCard}>
      <h2>{props.excersiseName}</h2>
      <NumberInput
        label="Weight"
        value={weight}
        changed={weightChangeHandler}
        increment={incrementWeight}
        decrement={decrementWeight}
      />
      <NumberInput
        label="Reps"
        value={reps}
        changed={repsChangeHandler}
        increment={incrementReps}
        decrement={decrementReps}
      />
      <button className={classes.AddSetButton} onClick={addSetHandler}>
        Add Set
      </button>
      {excersiseSets &&
        excersiseSets.map((set, index) => (
          <ExcersiseSet
            key={`${set.reps}${set.weight}${index}`}
            setNumber={index + 1}
            weight={set.weight}
            reps={set.reps}
          />
        ))}
    </div>
  );
};

export default ExcersiseCard;
