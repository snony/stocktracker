import { NEWS_RECEIVED_ACTION } from './newsActions'

const initialState = []

export default (state = initialState, { type, news }) => {
  switch (type) {
    case NEWS_RECEIVED_ACTION:
      return [...news]
    default:
      return state
  }
}
