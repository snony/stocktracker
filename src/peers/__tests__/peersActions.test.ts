import { MockStore } from 'redux-mock-store'

import { mockApi } from '../../__mock__/api.mock'
import { mockGlobalState } from '../../__mock__/data.mock'
import { generateMockStore } from '../../__mock__/mockStore.mock'
import {
  getPeersData,
  PEERS_RECEIVED_ACTION,
  PeersReceivedAction,
  peersReceivedAction
} from '../peersActions'

const mockSymbol = 'aapl'
const mockData = mockGlobalState.peers
const expectedAction: PeersReceivedAction = {
  type: PEERS_RECEIVED_ACTION,
  peers: mockData
}

describe('tests for peers action', () => {
  let store: MockStore<{}>

  beforeEach(() => {
    store = generateMockStore(mockGlobalState , mockApi)
    store.clearActions()
  })
  
  describe('test for receive action', () => {
    it('should create new PEERS_RECEIVED_ACTION object', () => {
      const action = peersReceivedAction(mockData)
      expect(action).toEqual(expectedAction)
    })
  })

  describe('test for async thunk action', () => {
    it('should dispatch PEERS_RECEIVED_ACTION when the fetch is successful', async () => {
      const mockDispatch = store.dispatch
      const mockStoreActions = store.getActions()
      
      await mockDispatch<any>(getPeersData(mockSymbol))
      
      expect(mockStoreActions[0]).toEqual(expectedAction)
    })
  })
})

