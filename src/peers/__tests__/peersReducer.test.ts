import { mockGlobalState } from '__mock__/globalstate.mock'
import { PEERS_RECEIVED_ACTION, PeersReceivedAction } from 'peers/peersActions'
import peersReducer, { initialState } from 'peers/peersReducer'

describe('tests for peers reducer', () => {
  const previousState = initialState

  it('should return the default peers state state', () => {
    const action = {} as PeersReceivedAction
    const returnState = peersReducer(undefined, action)

    expect(returnState).toEqual(previousState)
  })

  it('should handle PEERS_RECEIVED_ACTION', () => {
    const action: PeersReceivedAction = {
      type: PEERS_RECEIVED_ACTION,
      peers: mockGlobalState.peers
    }

    const expectedState = mockGlobalState.peers
    const returnState = peersReducer(previousState, action)

    expect(returnState).toEqual(expectedState)
  })
})
