import React from "react";
import classes from "./Backdrop.module.scss";

interface Props {
  show: boolean;
  clicked: () => void;
}

const backdrop:React.FC<Props> = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
