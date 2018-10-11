import { PEERS_RECEIVED_ACTION, PeersReceivedAction } from '../peersActions';
import peersReducer, { initialState, PeersState } from '../peersReducer'
import mockPeersData from './mockData'

describe('test for peers reducer', () => {
  it('should return the initial state', () => {
    const action = {}
    const state = peersReducer(undefined, action as PeersReceivedAction)
    expect(state).toEqual(initialState)
  })

  it('should handle receiving peers action', () => {
    const currentState: PeersState = []
    const action: PeersReceivedAction = {
      type: PEERS_RECEIVED_ACTION,
      peers: mockPeersData.examplePeers
    }
    
    const state = peersReducer(currentState, action)
    expect(state).toEqual(mockPeersData.examplePeers)
  })
})

