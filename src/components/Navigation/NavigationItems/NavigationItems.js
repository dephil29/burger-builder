import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul
    className={classes.NavigationItems}
  >
    <NavigationItem
      link="/"
      exact
    >
    Burger Builder
    </NavigationItem>
    <NavigationItem
      active
      link="/orders"
    >
    Orders
    </NavigationItem>
    {!props.isAuthenticated ?
      <NavigationItem
        active
        link="/auth"
      >
      Authenticate
      </NavigationItem>
    :
    <NavigationItem
      active
      link="/logout"
    >
    Logout
    </NavigationItem>
    }
  </ul>
);

export default navigationItems