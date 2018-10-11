import * as React from 'react'
import styled from 'react-emotion'

import History from './history'
import KeyStats from './keystats'
import AdaptiveLogo from './logo'
import News from './news'
import Overview from './overview'
import Peers from './peers'
import Search from './search'

const ComponentTitle = styled.h3`
  color: #7fb3ff;
  margin-bottom: 0.9rem;
  border-bottom: solid 0.1rem #7fb3ff;
`

export const StockTracker: React.SFC = () => (
  <div className="stock-tracker-container">
    <div className="stock-tracker-container__logo">
      <AdaptiveLogo />
    </div>
    <div className="stock-tracker-container__search">
      <Search />
    </div>
    <div className="stock-tracker-container__history">
      <History />
    </div>
    <div className="stock-tracker-container__news">
      <ComponentTitle>News</ComponentTitle>
      <News />
    </div>
    <div className="stock-tracker-container__key-stats">
      <ComponentTitle>Key Stats</ComponentTitle>
      <KeyStats />
    </div>
    <div className="stock-tracker-overview">
      <ComponentTitle>Overview</ComponentTitle>
      <Overview />
    </div>
    <div className="stock-tracker-container__peers">
      <ComponentTitle>Peers</ComponentTitle>
      <Peers />
    </div>
  </div>
)

export default StockTracker
