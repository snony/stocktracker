import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import History from 'histories'
import KeyStats from 'keystats'
import News from 'news'
import Overview from 'overview'
import Peers from 'peers'
import Quote from 'quote'
import StockTracker from 'stockTracker'
import HOC from './RouteHoCWrapper'

const MainRoute: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StockTracker} />
      <Route path="/history/:symbol" component={HOC(History)} />
      <Route path="/keystats/:symbol" component={HOC(KeyStats)} />
      <Route path="/news/:symbol" component={HOC(News)} />
      <Route path="/overview/:symbol" component={HOC(Overview)} />
      <Route path="/peers/:symbol" component={HOC(Peers)} />
      <Route path="/quote/:symbol" component={HOC(Quote)} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
)

const NoMatch = () => (<div>Path does not Exists</div>)


export default MainRoute