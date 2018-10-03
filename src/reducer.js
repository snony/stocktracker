import { combineReducers } from 'redux'
import company from './companyReducer'
import companySymbols from './bootstrapReducer'
import { history } from './history'
import { news } from './news'
import { keystats } from './keystats'
import { overviewReducer } from './overview'
import { peersReducer } from './peers'

export default combineReducers({
  companySymbols,
  company,
  history,
  news,
  keystats,
  overviewReducer,
  peers: peersReducer
})
