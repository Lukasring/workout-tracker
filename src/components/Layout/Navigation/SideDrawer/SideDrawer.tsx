import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from "../../../UI/Backdrop/Backdrop";
import ToggleDrawerButton from '../ToggleSideDrawerButton/ToggleDrawer';
import classes from './SideDrawer.module.scss';

interface Props {
  closed: () => void;
  open: boolean;
  toggle: () => void;
}

const SideDrawer:React.FC<Props> = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <ToggleDrawerButton clicked={props.toggle}/>
    </React.Fragment>
  );
};

export default SideDrawer;
