import { Dispatch } from 'redux';
import { API } from '../types'
import { News } from './types'
// ML 02/10 TODO should be declared somewhere else, but leave it here for the moment


interface NewsAction { type: string, news: News }


export const NEWS_RECEIVED_ACTION = 'NEWS_RECEIVED_ACTION'

const newsReceivedAction = (news: News): NewsAction => ({ type: NEWS_RECEIVED_ACTION, news })

export const getNewsData = (symbol: symbol) => (dispatch: Dispatch<NewsAction>, _: any, api: API) => {
  api.getNews(symbol).then((news: News) => {
    return dispatch(newsReceivedAction(news))
  })
}