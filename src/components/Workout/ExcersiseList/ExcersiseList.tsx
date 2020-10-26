import React from "react";
import classes from "./ExcersiseList.module.scss";

type Props = {
  excersises: string[];
  excersiseClicked?: (event: React.MouseEvent<HTMLLIElement>) => void;
};

const ExcersiseList: React.FC<Props> = (props) => {
  const excersiseList = props.excersises.map((excersise) => (
    <li key={excersise} onClick={props.excersiseClicked}>
      {excersise}
    </li>
  ));

  return <ul className={classes.ExcersiseList}>{excersiseList}</ul>;
};

export default ExcersiseList;
