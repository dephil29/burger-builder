import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Toolbar />
    <SideDrawer />
    <main
      className={classes.Content}
    >
      {props.children}
    </main>
  </Aux>
);

export default layout;