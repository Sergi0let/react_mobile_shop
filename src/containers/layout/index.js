import React from 'react'
import {Route, Switch} from 'react-router'

import Phones from '../phones/index'

const routes = (
  <Switch>
    <Route path="/" component={Phones} exact />
  </Switch>
)

const Layout = () => {
  return <div>{routes}</div>
}

export default Layout
