import { STATS_RECIEVED_ACTION } from './keystatsActions'

const initialState = null

export default (state = initialState, { type, keystats }) => {
  switch (type) {
    case STATS_RECIEVED_ACTION:
      return keystats
    default:
      return state
  }
}
