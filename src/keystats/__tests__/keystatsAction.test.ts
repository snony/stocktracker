import { MockStore } from 'redux-mock-store'

import { mockApi } from '__mock__/api.mock'
import { mockGlobalState } from '__mock__/data.mock'
import { generateMockStore } from '__mock__/mockStore.mock'
import { 
  getKeyStatsData, 
  STATS_RECEIVED_ACTION, 
  statsReceivedAction, 
  StatsReceivedAction 
} from '../keystatsActions'

const mockSymbol = 'aapl'
const mockData = mockGlobalState.keystats  
const expectedAction: StatsReceivedAction = {
  type: STATS_RECEIVED_ACTION,
  keystats: mockData
}

describe('tests for keystats action', () => {
  let store: MockStore<{}>

  beforeEach(() => {
    store = generateMockStore(mockGlobalState, mockApi)
    store.clearActions()
  })

  describe('test for receive action', () => {
    it('should generate STATS_RECEIVED_ACTION action', () => {
      const action = statsReceivedAction(mockData)
      expect(action).toEqual(expectedAction)
    })
  })

  describe('test for async get thunk action', () => {
    it('should dispatch the STATS_RECEIVED_ACTION action when fetch is successful', async () => {
      const mockDispatch = store.dispatch
      const mockStoreActions = store.getActions()

      await mockDispatch<any>(getKeyStatsData(mockSymbol))

      expect(mockStoreActions[0]).toEqual(expectedAction)
    })
  })
})