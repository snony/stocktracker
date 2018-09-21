import { NEWS_RECIEVED_ACTION } from './newsActions'

const initialState = []

export default (state = initialState, { type, news }) => {
  switch (type) {
    case NEWS_RECIEVED_ACTION:
      return [...news]
    default:
      return state
  }
}
