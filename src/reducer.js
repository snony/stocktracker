import { combineReducers } from 'redux'
import company from './companyReducer'
import companySymbols from './bootstrapReducer'
import { history } from './history'
import { news } from './news'
import { keystatsReducer } from './keystats'
import { overview } from './overview'
import { peers, peersReducer } from './peers'

export default combineReducers({
  companySymbols,
  company,
  history,
  news,
  keystats: keystatsReducer,
  overview,
  peers: peersReducer
})
