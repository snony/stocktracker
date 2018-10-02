import { NEWS_RECEIVED_ACTION } from './newsActions'
import { News, NewsAction } from './types';

const initialState: News[] = []

const NewsReducer = (state: News[] = initialState, action: NewsAction): News[] => {
  switch (action.type) {
    case NEWS_RECEIVED_ACTION:
      return [...action.newsItems]
    default:
      return state
  }
}
export default NewsReducer

// (state = initialState, { type, news }) => {
//   switch (type) {
//     case NEWS_RECEIVED_ACTION:
//       return [...news]
//     default:
//       return state
//   }
// }
