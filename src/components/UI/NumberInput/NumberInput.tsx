import React from "react";
import classes from "./NumberInput.module.scss";

type Props = {
  label: string;
  value: number;
  increment: () => void;
  decrement: () => void;
  changed: (event: React.FormEvent<HTMLInputElement>) => void;
};

const NumberInput = (props: Props) => (
  <div className={classes.NumberInput}>
    <label className={classes.NumberInputLabel} htmlFor={props.label}>
      {props.label}
    </label>
    <div className={classes.NumberInputElementWrapper}>
      <button className={classes.Decrement} onClick={props.decrement}>
        -
      </button>
      <input
        className={classes.Input}
        id={props.label}
        type="number"
        value={props.value}
        onChange={props.changed}
      />
      <button className={classes.Increment} onClick={props.increment}>
        +
      </button>
    </div>
  </div>
);

export default NumberInput;
