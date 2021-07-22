import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Home/NewProduct';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/products" exact component={Home} />
        <Route path="/products/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  )
}