import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import KeyStats from 'keystats'
import News from 'news'
import StockTracker from 'stockTracker'
import styled from 'styled'

const BgColorWrapper = styled('div')(props => `
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1;
  background-image: ${props.theme.bg};
`)

const MainRoute: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StockTracker} />
      <Route path="/keystats" render={() => <BgColorWrapper><KeyStats /></BgColorWrapper>} />
      <Route path="/news" render={() => <BgColorWrapper><News /></BgColorWrapper>} />
    </Switch>
  </BrowserRouter>
)

export default MainRoute