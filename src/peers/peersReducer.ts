import { Reducer } from 'redux'

import { PEERS_RECEIVED_ACTION, PeersReceivedAction } from './peersActions'
import { Peers } from './types'

interface PeersState {
  peers: Peers
}

const initialState: PeersState = {
  peers: []
}

const peersReducer: Reducer<PeersState, PeersReceivedAction> = (
  state = initialState, 
  action
  ) => {
  switch (action.type) {
    case PEERS_RECEIVED_ACTION:
      return {
        ...state,
        peers: action.peers
      }
    default:
      return state
  }
}

export default peersReducer
