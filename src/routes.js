import React from 'react'
import {Route, Switch} from 'react-router'
import Basket from './containers/basket'
import Phone from './containers/phone'
import Phones from './containers/phones'

export default (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/categories/:id" component={Phones} />
    <Route path="/phones/:id" component={Phone} />
    <Route path="/basket" component={Basket} />
  </Switch>
)
