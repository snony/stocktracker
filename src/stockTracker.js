import React from 'react'

import Search from './search'
import History from './history'
import Overview from './overview'
import News from './news'
import Peers from './peers'
import KeyStatsContainer from './keystats'

import AdaptiveLogo from './logo'

const ComponentTitle = ({ title }) => <h3 className="component-title">{title}</h3>

export const StockTracker = () => (
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
      <ComponentTitle title="News" />
      <News />
    </div>
    <div className="stock-tracker-container__key-stats">
      <ComponentTitle title="Key Stats" />
      <KeyStatsContainer />
    </div>
    <div className="stock-tracker-overview">
      <ComponentTitle title="Overview" />
      <Overview />
    </div>
    <div className="stock-tracker-container__peers">
      <ComponentTitle title="Peers" />
      <Peers />
    </div>
  </div>
)

export default StockTracker
