import { Action, ActionCreator, ActionCreatorsMapObject } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { API, GlobalState } from 'types'

import { Peers } from './types'

export enum PEERS_ACTION_TYPES {
  RECEIVED_DATA = 'PEERS_RECEIVED_DATA',
  RECEIVED_ERROR = 'PEERS_RECEIVED_ERROR'
}

export interface PeersReceivedData extends Action {
  type: PEERS_ACTION_TYPES.RECEIVED_DATA
  peers: Peers
}

const receivedData: ActionCreator<PeersReceivedData> = (peers: string[]) => ({
  type: PEERS_ACTION_TYPES.RECEIVED_DATA,
  peers
})

export interface PeersReceivedError extends Action {
  type: PEERS_ACTION_TYPES.RECEIVED_ERROR,
  error: boolean
}

const peersReceivedError: ActionCreator<PeersReceivedError> = () => ({
  type: PEERS_ACTION_TYPES.RECEIVED_ERROR,
  error: true
})

type PeersActions = PeersReceivedData | PeersReceivedError

export const PeersAction: ActionCreatorsMapObject<PeersActions> = {
  data: receivedData,
  error: peersReceivedError
}  

type ThunkResult<R> = (symbol: string) => ThunkAction<R, GlobalState, API, PeersActions>

export const getPeersData: ThunkResult<void> = (symbol: string) => async (dispatch, _, api) => {
  try {
    const peers = await api.getPeers(symbol)
    dispatch(PeersAction.data(peers))
  } catch {
    dispatch(PeersAction.error())
  }
}
