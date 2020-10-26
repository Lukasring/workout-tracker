import React, {useState} from 'react'
import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.scss';

const Layout:React.FC = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerCloseHandler = () => {
    setDrawerOpen(false);
  }
  const drawerToggle = () => {
    setDrawerOpen((currentToggle) => !currentToggle);
  }
  return (
    <React.Fragment>

      <Toolbar />
      <SideDrawer open={drawerOpen} closed={drawerCloseHandler} toggle={drawerToggle}/>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  )
}

export default Layout;