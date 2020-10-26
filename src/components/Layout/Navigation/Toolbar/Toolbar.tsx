import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from "./Toolbar.module.scss";

const Toolbar = () => {
  return (
    <header className={classes.Header}>
      <nav className={classes.Toolbar}>
        <NavigationItems/>
      </nav>
      <h1 className={classes.HeaderText}>Workout Tracker</h1>
    </header>
  )
}

export default Toolbar;