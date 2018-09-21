import { PEERS_RECEIVED_ACTION } from './peersActions'

const initialState = []

export default (state = initialState, { type, peers }) => {
  switch (type) {
    case PEERS_RECEIVED_ACTION:
      return [...peers]
    default:
      return state
  }
}
