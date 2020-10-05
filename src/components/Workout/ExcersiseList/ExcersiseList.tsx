import React from "react";
import classes from "./ExcersiseList.module.css";

type Props = {
  excersises: string[];
};

const ExcersiseList = (props: Props) => {
  const excersiseList = props.excersises.map((excersise) => (
    <li key={excersise}>{excersise}</li>
  ));

  return <ul className={classes.ExcersiseList}>{excersiseList}</ul>;
};

export default ExcersiseList;
