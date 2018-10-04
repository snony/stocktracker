import { combineReducers } from 'redux'
import company from './companyReducer'
import companySymbols from './bootstrapReducer'
import { historyReducer } from './history'
import { news } from './news'
import { keystatsReducer } from './keystats'
import { overview } from './overview'
import { peersReducer } from './peers'

export default combineReducers({
  companySymbols,
  company,
  history: historyReducer,
  news,
  keystats: keystatsReducer,
  overview,
  peers: peersReducer
})
