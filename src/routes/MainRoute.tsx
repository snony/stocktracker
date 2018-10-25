import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import History, { getHistoryData } from 'histories'
import KeyStats, { getKeyStatsData } from 'keystats'
import News, { getNewsData } from 'news'
import Overview, { getOverviewData } from 'overview'
import Peers, { getPeersData } from 'peers'
import Quote, { setSubscribeSymbol } from 'quote'
import StockTracker from 'stockTracker'
import HOC from './RouteHoCWrapper'

const MainRoute: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StockTracker} />
      <Route path="/history/:symbol" component={HOC(History, getHistoryData)} />
      <Route path="/keystats/:symbol" component={HOC(KeyStats, getKeyStatsData)} />
      <Route path="/news/:symbol" component={HOC(News, getNewsData)} />
      <Route path="/overview/:symbol" component={HOC(Overview, getOverviewData)} />
      <Route path="/peers/:symbol" component={HOC(Peers, getPeersData)} />
      <Route path="/quote/:symbol" component={HOC(Quote, setSubscribeSymbol)} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
)

const NoMatch = () => (<div>Path does not Exists</div>)


export default MainRoute