import React from 'react'
import {Route, Switch} from 'react-router'
import Phone from './containers/phone'

import Phones from './containers/phones'

export default (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/categories/:id" component={Phones} />
    <Route path="/phones/:id" component={Phone} />
  </Switch>
)
