import { mockFailedGlobalState, mockGlobalState } from '__mock__/globalstate.mock'
import { mockPeers } from '__mock__/peers.mock'

import {
  PEERS_ACTION_TYPES,
  PeersReceivedData,
  PeersReceivedError
} from 'peers/peersActions'
import peersReducer, { initialState } from 'peers/peersReducer'

describe('Peers Reducer', () => {
  const previousState = initialState

  it('should return the default peers state state', () => {
    const action = {} as PeersReceivedData
    const returnState = peersReducer(undefined, action)

    expect(returnState).toEqual(previousState)
  })

  it('should handle PEERS_RECEIVED_DATA', () => {
    const action: PeersReceivedData = {
      type: PEERS_ACTION_TYPES.RECEIVED_DATA,
      peers: mockPeers
    }

    const expectedState = mockGlobalState.peers
    const returnState = peersReducer(previousState, action)

    expect(returnState).toEqual(expectedState)
  })

  it('should handle PEERS_RECEIVED_ERROR', () => {
    const action: PeersReceivedError = {
      type: PEERS_ACTION_TYPES.RECEIVED_ERROR,
      error: true
    }

    const expectedState = mockFailedGlobalState.peers
    const returnState = peersReducer(previousState, action)

    expect(returnState).toEqual(expectedState)
  })
})
