import React from 'react'
import {Route, Switch} from 'react-router'

import Phones from '../phones/index'

const routes = (
  <Switch>
    <Route path="/" component={Phones} exact />
  </Switch>
)

const Layout = () => {
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            Sidebar <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            repellendus esse cupiditate sit iste voluptatem quaerat libero dolor
            sint rerum, ea perspiciatis nemo similique fugit nihil magnam,
            quidem illo numquam?
          </div>
          <div className="col-md-9">{routes}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
