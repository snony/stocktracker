import { Reducer } from 'redux';
import { NEWS_RECEIVED_ACTION } from './newsActions'
import { NewsReceivedAction } from './newsActions'
import { News } from './types';

const initState: News[] = []

type NewsState = typeof initState
const handleNewsActions: Reducer<NewsState, NewsReceivedAction> = (state = initState, action) => {
  switch (action.type) {
    case NEWS_RECEIVED_ACTION:
      return [...action.newsItems]
    default:
      return state
  }
}
export default handleNewsActions