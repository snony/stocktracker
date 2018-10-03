import { combineReducers } from 'redux'
import companySymbols from './bootstrapReducer'
import company from './companyReducer'
import { history } from './history'
import { keystats } from './keystats'
import { news } from './news'
import { overview } from './overview'
import { peers } from './peers'

export default combineReducers({
  companySymbols,
  company,
  history,
  news,
  keystats,
  overview,
  peers
})
