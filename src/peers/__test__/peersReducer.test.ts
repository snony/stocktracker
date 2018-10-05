import { PEERS_RECEIVED_ACTION, PeersReceivedAction } from '../peersActions';
import peersReducer, { initialState, PeersState } from '../peersReducer'
import peersData from './fixtures'

describe('test for peers reducer', () => {
  it('should return the initial state', () => {
    const currentState: undefined = undefined
    const action = {}
    const state = peersReducer(currentState, action as PeersReceivedAction)
    expect(state).toEqual(initialState)
  })

  it('should handle receiving peers action', () => {
    const currentState: PeersState = []
    const action: PeersReceivedAction = {
      type: PEERS_RECEIVED_ACTION,
      peers: peersData.examplePeers
    }
    const state = peersReducer(currentState, action)
    expect(state).toEqual(peersData.examplePeers)
  })
})

