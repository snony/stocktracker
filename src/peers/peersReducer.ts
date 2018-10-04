import { Reducer } from 'redux'

import { PEERS_RECEIVED_ACTION, PeersReceivedAction } from './peersActions'
import { Peers } from './types'

type PeersState = Peers

const initialState: PeersState = []

const peersReducer: Reducer<PeersState, PeersReceivedAction> = (state = initialState, action) => {
  switch (action.type) {
    case PEERS_RECEIVED_ACTION:
      return [...action.peers]
    default:
      return state
  }
}

export default peersReducer
