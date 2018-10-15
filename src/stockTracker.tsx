import * as React from 'react'

import History from './history'
import KeyStats from './keystats'
import AdaptiveLogo from './logo'
import News from './news'
import Overview from './overview'
import Peers from './peers'
import LiveQuote from './quote'
import Search from './search'

const ComponentTitle = ({ title }: { title: string }) => (
  <h3 className="component-title">{title}</h3>
)

export const StockTracker: React.SFC = () => (
  <div className="stock-tracker-container">
    <div className="stock-tracker-container__logo">
      <AdaptiveLogo />
    </div>
    <div className="stock-tracker-container__search">
      <Search />
    </div>
    <div>
      <LiveQuote />
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
      <KeyStats />
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
