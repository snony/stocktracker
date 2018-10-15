import { Reducer } from 'redux'

import { NEWS_RECEIVED_ACTION, NewsReceivedAction } from './newsActions'
import { News } from './types'

export const initialState: News[] = []

type NewsState = typeof initialState
const newsReducer: Reducer<NewsState, NewsReceivedAction> = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_RECEIVED_ACTION:
      return [...action.newsItems]
    default:
      return state
  }
}
export default newsReducer
