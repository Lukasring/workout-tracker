import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import CreateRoutine from "./components/Routine/CreateRoutine/CreateRoutine";
// import ExcersiseCard from "./components/ExcersiseSummary/ExcersiseCard";
import ExcersiseTypes from "./components/Workout/ExcersiseTypes/ExcersiseTypes";
import ExcersiseList from "./components/Workout/ExcersiseList/ExcersiseList";
import {
  excersiseTypes,
  allExcersises,
} from "./components/Workout/Excersises/Excersises";
// import NewExcersise from "./components/Workout/NewExcersise/NewExcersise";

const App = () => {
  const [excersiseType, setExcersiseType] = useState<string>();
  const [redirectPath, setRedirectPath] = useState("");

  const excersiseTypeHandler = (clickedExcersiseType: string | undefined) => {
    console.log(clickedExcersiseType);
    setExcersiseType(clickedExcersiseType);
    setRedirectPath(`/${clickedExcersiseType}`);
  };

  return (
    <div>
      {redirectPath && <Redirect to={redirectPath} />}
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ExcersiseTypes {...props} clicked={excersiseTypeHandler} />
          )}
        />
        {excersiseTypes.map((excersiseType) => (
          <Route
            key={excersiseType}
            path={`/${excersiseType}`}
            render={(props) => (
              <ExcersiseList
                {...props}
                excersises={
                  allExcersises.filter(
                    (excersise) =>
                      excersise.excersiseType ===
                      excersiseType.toLocaleLowerCase()
                  )[0].excersiseList
                }
              />
            )}
          />
        ))}
      </Switch>
    </div>
  );
};

export default App;
