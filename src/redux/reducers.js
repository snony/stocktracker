import { combineReducers } from 'redux'
import { GET_COMPANY, GET_COMPANY_SYMBOLS } from './actionConstant'
import { history } from '../history'
import { news } from '../news'
import { keystats } from '../keystats'
import { overview } from '../overview'
import { peers } from '../peers'

const initialState = {
  company: null,
  companySymbols: null
}

const old = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        company: action.company
      }
    case GET_COMPANY_SYMBOLS:
      return { ...state, companySymbols: action.companySymbols }
    default:
      return state
  }
}

export default combineReducers({
  old,
  history,
  news,
  keystats,
  overview,
  peers
})
