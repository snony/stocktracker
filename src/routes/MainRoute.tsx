import React from'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import KeyStats from 'keystats'
import StockTracker from 'stockTracker'

const MainRoute: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StockTracker} />
      <Route path="/keystats" component={KeyStats} />
    </Switch>
  </BrowserRouter>
)

export default MainRoute