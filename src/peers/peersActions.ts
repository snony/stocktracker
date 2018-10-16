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
  error: true
}

const receivedError: ActionCreator<PeersReceivedError> = () => ({
  type: PEERS_ACTION_TYPES.RECEIVED_ERROR,
  error: true
})

export const PeersActions = {
  receivedData,
  receivedError
}

type ActionObject<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>
export type PeersActions = ActionObject<typeof PeersActions>

type ThunkResult<R> = (symbol: string) => ThunkAction<R, GlobalState, API, PeersActions>

export const getPeersData: ThunkResult<void> = (symbol: string) => async (dispatch, _, api) => {
  try {
    const peers = await api.getPeers(symbol)
    dispatch(PeersActions.receivedData(peers))
  } catch {
    dispatch(PeersActions.receivedError())
  }
}
