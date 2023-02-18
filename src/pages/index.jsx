import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './home'
import Foods from './foodpage';
import Cart from './cartpage';
import Contact from './contactpage';
// navbar
import Navbar from '../component/navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/foodpage'>
          <Foods />
        </Route>
        <Route path='/cartpage'>
          <Cart />
        </Route>
        <Route path='/contactpage'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
