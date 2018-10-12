import { mockGlobalState } from '__mock__/data.mock'
import { PEERS_RECEIVED_ACTION, PeersReceivedAction } from '../peersActions'
import peersReducer, { initialState } from '../peersReducer'

describe('tests for peers reducer', () => {
  it('should return the default peers state state', () => {
    const action = {} as PeersReceivedAction
    const returnState = peersReducer(undefined, action)

    expect(returnState).toEqual(initialState)
  })

  it('should handle receiving peers action', () => {
    const action: PeersReceivedAction = {
      type: PEERS_RECEIVED_ACTION,
      peers: mockGlobalState.peers
    }

    const currentState = initialState
    const expectedState = mockGlobalState.peers
    const returnState = peersReducer(currentState, action)

    expect(returnState).toEqual(expectedState)
  })
})
