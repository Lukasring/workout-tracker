import React, { useState } from "react";
import ExcersiseTypes from "../ExcersiseTypes/ExcersiseTypes";
import ExcersiseList from "../ExcersiseList/ExcersiseList";
import * as excersises from "../Excersises/Excersises";

const NewExcersise = (props) => {
  const [excersiseType, setExcersiseType] = useState();

  const excersiseTypeHandler = (clickedExcersiseType) => {
    setExcersiseType(clickedExcersiseType);
  };

  let content = <ExcersiseTypes clicked={excersiseTypeHandler} />;

  switch (excersiseType) {
    case "Chest":
      return <ExcersiseList excersises={excersises.chest} />;
    default:
      return content;
  }

  // return content;
};

export default NewExcersise;
