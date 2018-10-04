import { Action, ActionCreator } from "redux"
import { ThunkAction } from "redux-thunk"

import { API, GlobalState } from "../types"
import { Peers } from "./types"

export const PEERS_RECEIVED_ACTION = 'PEERS_RECEIVED_ACTION'

export interface PeersReceivedAction extends Action {
  type: typeof PEERS_RECEIVED_ACTION
  peers: Peers
}

const peersReceivedAction: ActionCreator<PeersReceivedAction> = (peers: string[]) => ({
  type: PEERS_RECEIVED_ACTION,
  peers
})

type ThunkResult<R> = (symbol: string) => ThunkAction<R, GlobalState, API, PeersReceivedAction>

export const getPeersData: ThunkResult<void> = (symbol: string) => (dispatch, _, api) => {
  api.getPeers(symbol).then(peers => dispatch(peersReceivedAction(peers)))
}
