import { Reducer } from 'redux'

import { PEERS_ACTION_TYPES, PeersActions } from './peersActions'
import { Peers } from './types'

export interface PeersState {
  peers: Peers,
  error: boolean
}

export const initialState: PeersState = {
  peers: [],
  error: false
}

const peersReducer: Reducer<PeersState, PeersActions> = (state = initialState, action) => {
  switch (action.type) {
    case PEERS_ACTION_TYPES.RECEIVED_DATA:
      return {
        ...state,
        peers: action.peers,
        error: false
      }
    case PEERS_ACTION_TYPES.RECEIVED_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default peersReducer
