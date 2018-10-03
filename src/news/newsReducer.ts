import { Reducer } from 'redux';
import { NEWS_RECEIVE_ACTION } from './newsActions'
import { NewsAction } from './newsActions'
import { News } from './types';

const initState: News[] = []

type NewsState = typeof initState
const handleNewsActions: Reducer<NewsState, NewsAction> = (state = initState, action: NewsAction) => {
  switch (action.type) {
    case NEWS_RECEIVE_ACTION:
      return [...action.newsItems]
    default:
      return state
  }
}
export default handleNewsActions