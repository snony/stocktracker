import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import KeyStats from 'keystats'
import News from 'news'
import StockTracker from 'stockTracker'
import styled from 'styled'

const DivContainer = styled('div')(props => `
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: 1;
  background-image: ${props.theme.bg};
`)

const MainRoute: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StockTracker} />
      <Route path="/keystats" render={() => <DivContainer><KeyStats /></DivContainer>} />
      <Route path="/news" render={() => <DivContainer><News /></DivContainer>} />
    </Switch>
  </BrowserRouter>
)

export default MainRoute