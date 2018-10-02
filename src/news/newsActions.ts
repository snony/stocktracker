import { Dispatch } from 'redux';
import { API } from '../types'
import { News, NewsAction } from './types'



export const NEWS_RECEIVED_ACTION = 'NEWS_RECEIVED_ACTION'

const newsReceivedAction = (newsItems: News[]): NewsAction => ({ type: NEWS_RECEIVED_ACTION, newsItems })

export const getNewsData = (symbol: symbol) => (dispatch: Dispatch<NewsAction>, _: any, api: API) => {
  api.getNews(symbol).then((newsItems: News[]) => {
    return dispatch(newsReceivedAction(newsItems))
  })
}