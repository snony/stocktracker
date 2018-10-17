import fetchStatus from 'fetchStatus'
import { Reducer } from 'redux'

import { PEERS_ACTION_TYPES, PeersActions } from './peersActions'
import { Peers } from './types'

export interface PeersState {
  peers: Peers
  status: string
}

export const initialState: PeersState = {
  peers: [],
  status: fetchStatus.INITIAL
}

const peersReducer: Reducer<PeersState, PeersActions> = (state = initialState, action) => {
  switch (action.type) {
    case PEERS_ACTION_TYPES.RECEIVED_DATA:
      return {
        ...state,
        peers: action.peers,
        status: fetchStatus.SUCCESS
      }
    case PEERS_ACTION_TYPES.RECEIVED_ERROR:
      return {
        ...state,
        status: fetchStatus.FAILED
      }
    default:
      return state
  }
}

export default peersReducer
