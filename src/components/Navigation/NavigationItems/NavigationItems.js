import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul
    className={classes.NavigationItems}
  >
    <NavigationItem
    active
      link="/"
    >
    blah
    </NavigationItem>
    <NavigationItem
    active
      link="/"
    >
    blah
    </NavigationItem>
  </ul>
);

export default navigationItems