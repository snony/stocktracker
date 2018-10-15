import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { API, GlobalState } from 'types'

import { News } from './types'


export interface NewsFetchFailed extends Action {
  type: typeof NEWS_FETCH_FAILED
}

export const NEWS_FETCH_FAILED = 'NEWS_FETCH_FAILED '

export const getNewsFetchFailedAction: ActionCreator<NewsFetchFailed> = () => ({
  type: NEWS_FETCH_FAILED
})

export interface NewsReceivedAction extends Action {
  type: typeof NEWS_RECEIVED_ACTION
  newsItems: News[]
}

export const NEWS_RECEIVED_ACTION = 'NEWS_RECEIVED_ACTION'

export const receiveNewsAction: ActionCreator<NewsReceivedAction> = (newsItems: News[]) => ({
  type: NEWS_RECEIVED_ACTION,
  newsItems,
})

export type NewsAction = NewsReceivedAction | NewsFetchFailed
type ThunkResult = ThunkAction<void, GlobalState, API, NewsAction>
export const getNewsData: (symbol: string) => ThunkResult = symbol => async (dispatch, _, api) => {
  try {
    const newsItems = await api.getNews(symbol)
    return dispatch(receiveNewsAction(newsItems))
  } catch (err) {
    return dispatch(getNewsFetchFailedAction())
  }
}
