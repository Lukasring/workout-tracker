import React from "react";
import classes from "./ExcersiseTypes.module.scss";
import { excersiseTypes, allExcersises } from "../Excersises/Excersises";
import ExcersiseList from "../ExcersiseList/ExcersiseList";
import { Route, RouteComponentProps, Link } from "react-router-dom";

// interface Props extends RouteComponentProps<any> {
//   clicked: (clickedExcersiseType: string) => void;
// }

interface Props {
  clicked: (clickedExcersiseType: string) => void;
}

const ExcersiseTypes: React.FC<Props> = (props) => {
  const clickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    // props.clicked(event.target.value);
    // console.log(event.currentTarget.textContent?.toLocaleLowerCase());
    if (event.currentTarget.textContent) {
      props.clicked(event.currentTarget.textContent.toLocaleLowerCase());
    }
    // console.log(props);
    // props.history.push(
    //   `${
    //     props.match.path
    //   }/${event.currentTarget.textContent?.toLocaleLowerCase()}`
    // );
    // props.history.push("/chest");
  };

  return (
    <div>
      {/* {routes} */}
      <ul className={classes.ExcersiseTypes}>
        {excersiseTypes.map((excersiseType) => (
          <li key={excersiseType} onClick={clickHandler}>
            {excersiseType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExcersiseTypes;
