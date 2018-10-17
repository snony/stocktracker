import { MockStore } from 'redux-mock-store'

import { mockApi, mockFailedApi } from '__mock__/api.mock'
import { mockGlobalState } from '__mock__/globalstate.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import { mockPeersState } from '__mock__/peers.mock'

import {
  getPeersData,
  PEERS_ACTION_TYPES,
  PeersActions,
} from 'peers/peersActions'

describe('Peers action', () => {
  let store: MockStore<{}>

  const mockSymbol = 'aapl'
  
  describe('Success', () => {
    beforeEach(() => {
      store = generateMockStore(mockGlobalState, mockApi)
      store.clearActions()
    })

    const expectedDataAction = {
      type: PEERS_ACTION_TYPES.RECEIVED_DATA,
      peers: mockPeersState,
    }
    
    it('should create new PEERS_RECEIVED_ACTION object', () => {
      const action = PeersActions.receivedData(mockPeersState)
      expect(action).toEqual(expectedDataAction)
    })

    it('should create new PEERS_RECEIVED_ACTION object after successful', async () => {
      await store.dispatch<any>(getPeersData(mockSymbol))
      expect(store.getActions()[0]).toEqual(expectedDataAction)
    })
  })

  describe('Fail', () => {
    beforeEach(() => {
      store = generateMockStore(mockGlobalState, mockFailedApi)
      store.clearActions()
    })
    
    const expectedErrorAction = {
      type: PEERS_ACTION_TYPES.RECEIVED_ERROR,
      error: true
    }

    it('should create new PEERS_RECEIVED_ERROR', () => {
      const action = PeersActions.receivedError()
      expect(action).toEqual(expectedErrorAction)
    })

    it('should dispatch PEERS_RECEIVED_ERROR when fetch fails', async () => {
      await store.dispatch<any>(getPeersData(mockSymbol))
      expect(store.getActions()[0]).toEqual(expectedErrorAction)
    })
  })
})
