import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import History from 'histories'
import KeyStats from 'keystats'
import Overview from 'overview'
import Peers from 'peers'
import Quote from 'quote'
import Search from 'search'
import StockTracker from 'stockTracker'
import styled from 'styled'

const BgColorWrapper = styled('div')(props => `
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1;
  background-image: ${props.theme.bg}
`
)
const MainRoute: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StockTracker} />
      <Route path="/history" render={() => <BgColorWrapper><History /></BgColorWrapper>} />
      <Route path="/keystats" render={() => <BgColorWrapper><KeyStats /></BgColorWrapper>} />
      <Route path="/overview" render={() => <BgColorWrapper><Overview /></BgColorWrapper>} />
      <Route path="/peers" render={() => <BgColorWrapper><Peers /></BgColorWrapper>} />
      <Route path="/quote" render={() => <BgColorWrapper><Quote /></BgColorWrapper>} />
      <Route path="/search" render={() => <BgColorWrapper><Search /></BgColorWrapper>} />
    </Switch>
  </BrowserRouter>
)

export default MainRoute