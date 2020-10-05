import React from "react";
import classes from "./ExcersiseTypes.module.css";
import { excersiseTypes } from "../Excersises/Excersises";

type Props = {
  clicked: (clickedExcersiseType: string | undefined) => void;
};

const ExcersiseTypes = (props: Props) => {
  const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    // props.clicked(event.target.value);
    // console.log(event.currentTarget.textContent?.toLocaleLowerCase());
    props.clicked(event.currentTarget.textContent?.toLocaleLowerCase());
  };
  return (
    <ul className={classes.ExcersiseTypes}>
      {excersiseTypes.map((excersiseType) => (
        <li key={excersiseType} onClick={clickHandler}>
          {excersiseType}
        </li>
      ))}
    </ul>
  );
};

export default ExcersiseTypes;
