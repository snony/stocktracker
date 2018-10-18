import { Reducer } from 'redux'

import { NEWS_FETCH_FAILED, NEWS_RECEIVED_ACTION, NewsAction } from './newsActions'
import { FetchStatus, NewsItemsProps } from './types'

export const initState: NewsItemsProps = { newsItems: [], fetchStatus: FetchStatus.PENDING }

const newsReducer: Reducer<NewsItemsProps, NewsAction> = (state = initState, action) => {
  switch (action.type) {
    case NEWS_RECEIVED_ACTION:
      return { ...state, newsItems: [...action.newsItems], fetchStatus: FetchStatus.SUCCESS }
    case NEWS_FETCH_FAILED:
      return { ...state, fetchStatus: FetchStatus.FAIL }
    default:
      return state
  }
}
export default newsReducer
