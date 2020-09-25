import React from "react";
import classes from "./ExcersiseList.module.css";

const ExcersiseList = (props) => {
  const excersiseList = props.excersises.map((excersise) => (
    <li key={excersise}>{excersise}</li>
  ));

  return <ul className={classes.ExcersiseList}>{excersiseList}</ul>;
};

export default ExcersiseList;
