import { PEERS_RECEIVED_ACTION, PeersReceivedAction } from '../peersActions'
import peersReducer, { initialState } from '../peersReducer'

import { mockGlobalState } from '__mock__/globalstate.mock'

describe('tests for peers reducer', () => {
  const currentState = initialState

  it('should return the default peers state state', () => {
    const action = {} as PeersReceivedAction
    const returnState = peersReducer(undefined, action)

    expect(returnState).toEqual(currentState)
  })

  it('should handle PEERS_RECEIVED_ACTION', () => {
    const action: PeersReceivedAction = {
      type: PEERS_RECEIVED_ACTION,
      peers: mockGlobalState.peers
    }

    const expectedState = mockGlobalState.peers
    const returnState = peersReducer(currentState, action)

    expect(returnState).toEqual(expectedState)
  })
})
