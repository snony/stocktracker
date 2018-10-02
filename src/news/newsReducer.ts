import { NEWS_RECEIVED_ACTION } from './newsActions'
import { News, NewsAction } from './types';

const initState: News[] = []

const handleNewsActions = (state = initState, action: NewsAction): News[] => {
  switch (action.type) {
    case NEWS_RECEIVED_ACTION:
      return [...action.newsItems]
    default:
      return state
  }
}
export default handleNewsActions