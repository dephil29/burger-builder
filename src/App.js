import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
