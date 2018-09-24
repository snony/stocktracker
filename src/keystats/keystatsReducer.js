import { STATS_RECEIVED_ACTION } from './keystatsActions'

const initialState = null

export default (state = initialState, { type, keystats }) => {
  switch (type) {
    case STATS_RECEIVED_ACTION:
      return keystats
    default:
      return state
  }
}
