import React  from 'react';
import {NavLink} from 'react-router-dom';
import classes from "./NavigationItems.module.scss";

const NavigationItems:React.FC = () => {
  return (
      <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
          <NavLink exact to='/' activeClassName={classes.active}>Home</NavLink>
        </li>
        <li className={classes.NavigationItem}>
          <NavLink to='/history' activeClassName={classes.active}>History</NavLink>  
        </li>
      </ul>
  )
}

export default NavigationItems;