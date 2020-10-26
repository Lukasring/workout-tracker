import React from "react";
import classes from "./ToggleDrawer.module.scss";

interface Props {
  clicked: () => void;
}
const DrawerToggle:React.FC<Props> = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;