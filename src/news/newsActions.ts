import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { API, GlobalState } from '../types'
import { News } from './types'

export interface NewsReceivedAction extends Action {
  type: typeof NEWS_RECEIVED_ACTION
  newsItems: News[]
}

export const NEWS_RECEIVED_ACTION = 'NEWS_RECEIVED_ACTION'

export const receiveNewsAction: ActionCreator<NewsReceivedAction> = (newsItems: News[]) => ({
  type: NEWS_RECEIVED_ACTION,
  newsItems
})

type ThunkResult = ThunkAction<void, GlobalState, API, NewsReceivedAction>
export const getNewsData: (symbol: string) => ThunkResult = symbol => async (dispatch, _, api) => {
  const newsItems = await api.getNews(symbol)
  return dispatch(receiveNewsAction(newsItems))
}

