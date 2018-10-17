import { combineReducers } from 'redux'

import symbolReducers from 'quote/quoteReducers'
import handleSocketMessageReducer from 'socketReducers'
import companySymbols from './bootstrapReducer'
import company from './companyReducer'
import { historyReducer } from './history'
import { keystatsReducer } from './keystats'
import { newsReducer } from './news'
import { overviewReducer } from './overview'
import { peersReducer } from './peers'
export default combineReducers({
  companySymbols,
  company,
  symbol: symbolReducers,
  history: historyReducer,
  news: newsReducer,
  keystats: keystatsReducer,
  overview: overviewReducer,
  peers: peersReducer,
  quote: handleSocketMessageReducer
})
