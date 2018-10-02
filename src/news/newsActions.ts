import { Dispatch } from 'redux';
import { API } from '../types'
import { News, NewsAction } from './types'



export const NEWS_RECEIVE_ACTION = 'NEWS_RECEIVE_ACTION'

const receiveNewsAction = (newsItems: News[]): NewsAction => ({ type: NEWS_RECEIVE_ACTION, newsItems })

export const getNewsData = (symbol: symbol) => (dispatch: Dispatch<NewsAction>, _: any, api: API) => {
  api.getNews(symbol).then((newsItems: News[]) => {
    return dispatch(receiveNewsAction(newsItems))
  })
}