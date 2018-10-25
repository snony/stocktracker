import { combineReducers } from 'redux'

import { subscribeSymbolReducers } from 'quote'
import { handleSocketMessageReducer } from 'socket'
import companySymbolsReducer from './bootstrapReducer'
import company from './companyReducer'
import { historyReducer } from './histories'
import { keystatsReducer } from './keystats'
import { newsReducer } from './news'
import { overviewReducer } from './overview'
import { peersReducer } from './peers'

export default combineReducers({
  companySymbolsState: companySymbolsReducer,
  company,
  symbol: subscribeSymbolReducers,
  history: historyReducer,
  news: newsReducer,
  keystats: keystatsReducer,
  overview: overviewReducer,
  peers: peersReducer,
  quote: handleSocketMessageReducer
})
