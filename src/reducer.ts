import { combineReducers } from 'redux'

import companySymbolsReducer from './bootstrapReducer'
import company from './companyReducer'
import { historyReducer } from './history'
import { keystatsReducer } from './keystats'
import { newsReducer } from './news'
import { overviewReducer } from './overview'
import { peersReducer } from './peers'

export default combineReducers({
  companySymbolsState: companySymbolsReducer,
  company,
  history: historyReducer,
  news: newsReducer,
  keystats: keystatsReducer,
  overview: overviewReducer,
  peers: peersReducer
})
